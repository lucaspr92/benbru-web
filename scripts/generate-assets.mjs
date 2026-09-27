import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const prodDir = path.join(publicDir, 'images', 'productos');
const heroDir = path.join(publicDir, 'images', 'hero');

fs.mkdirSync(prodDir, { recursive: true });
fs.mkdirSync(heroDir, { recursive: true });

const items = [
  // Panadería
  { id: 'facturas', name: 'Facturas Surtidas', category: 'Panadería', icon: '🥐' },
  { id: 'libritos', name: 'Libritos de Grasa', category: 'Panadería', icon: '🍞' },
  { id: 'bizcochitos', name: 'Bizcochitos de Grasa', category: 'Panadería', icon: '🥨' },
  { id: 'cremona', name: 'Cremona Hojaldrada', category: 'Panadería', icon: '🥯' },
  { id: 'chipa', name: 'Chipá Caliente', category: 'Panadería', icon: '🧀' },
  { id: 'palmeritas', name: 'Palmeritas Dulces', category: 'Panadería', icon: '🥨' },
  { id: 'rosquitas', name: 'Rosquitas Azucaradas', category: 'Panadería', icon: '🍩' },
  { id: 'palitos-anis', name: 'Palitos de Anís', category: 'Panadería', icon: '🥖' },
  { id: 'pan-tradicional', name: 'Pan de Mesa / Flauta', category: 'Panadería', icon: '🥖' },
  { id: 'pan-casero', name: 'Pan Casero de Campo', category: 'Panadería', icon: '🍞' },
  { id: 'negritos', name: 'Negritos de Salvado', category: 'Panadería', icon: '🍞' },
  { id: 'figazas', name: 'Figazas de Manteca', category: 'Panadería', icon: '🥪' },

  // Pastelería
  { id: 'invertida-manzana', name: 'Invertida de Manzana', category: 'Pastelería', icon: '🍎' },
  { id: 'tarta-ricota', name: 'Tarta de Ricota', category: 'Pastelería', icon: '🥧' },
  { id: 'ricota-dulce-leche', name: 'Ricota & Dulce de Leche', category: 'Pastelería', icon: '🥧' },
  { id: 'tarta-coco', name: 'Tarta Coco & DDL', category: 'Pastelería', icon: '🥥' },
  { id: 'pastafrola', name: 'Pasta Frola Artesanal', category: 'Pastelería', icon: '🥧' },
  { id: 'postre-balcarce', name: 'Postre Balcarce', category: 'Pastelería', icon: '🍰' },
  { id: 'selva-negra', name: 'Torta Selva Negra', category: 'Pastelería', icon: '🎂' },
  { id: 'brownie-nuez', name: 'Brownie con Nuez', category: 'Pastelería', icon: '🍫' },
  { id: 'bombon-suizo', name: 'Torta Bombón Suizo', category: 'Pastelería', icon: '🍫' },
  { id: 'chaja', name: 'Postre Chajá', category: 'Pastelería', icon: '🍑' },

  // Salados
  { id: 'sandwiches-miga', name: 'Sándwiches de Miga', category: 'Salados', icon: '🥪' },
  { id: 'prepizzas-muzzarella', name: 'Pre-pizza Muzzarella', category: 'Salados', icon: '🍕' },
  { id: 'prepizzas-fugazzeta', name: 'Pre-pizza Fugazzeta', category: 'Salados', icon: '🍕' },
  { id: 'empanadas', name: 'Empanadas Caseras', category: 'Salados', icon: '🥟' },

  // Cafetería
  { id: 'flat-white', name: 'Flat White de Especialidad', category: 'Cafetería', icon: '☕' },
  { id: 'cappuccino', name: 'Cappuccino Italiano', category: 'Cafetería', icon: '☕' },
  { id: 'iced-latte', name: 'Iced Latte Vainilla', category: 'Cafetería', icon: '🧊' },

  // Almacén & Bebidas & Fuego
  { id: 'bebidas-aguas', name: 'Aguas & Gaseosas', category: 'Almacén', icon: '🥤' },
  { id: 'gatorade', name: 'Gatorade Isotónica', category: 'Almacén', icon: '⚡' },
  { id: 'cervezas', name: 'Cervezas Frías', category: 'Almacén', icon: '🍺' },
  { id: 'yerba-mate', name: 'Yerba Mate Variedad', category: 'Almacén', icon: '🧉' },
  { id: 'galletitas-condor', name: 'Galletitas Cóndor', category: 'Almacén', icon: '🍪' },
  { id: 'lacteos', name: 'Lácteos Frescos', category: 'Almacén', icon: '🥛' },
  { id: 'agua-bidon', name: 'Agua en Bidón', category: 'Almacén', icon: '💧' },
  { id: 'hielo', name: 'Bolsa de Hielo', category: 'Almacén', icon: '🧊' },
  { id: 'carbon', name: 'Carbón Vegetal Asado', category: 'Almacén', icon: '🥩' },
  { id: 'lena', name: 'Leña Seca para Hogar', category: 'Almacén', icon: '🔥' }
];

async function generateProductWebp(item) {
  const safeName = item.name.replace(/&/g, '&amp;');
  const safeCategory = item.category.replace(/&/g, '&amp;');

  const svg = `
  <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F4EFEB" />
        <stop offset="100%" stop-color="#E7E1D9" />
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#E7E1D9" stop-opacity="0"/>
      </radialGradient>
    </defs>
    
    <!-- Background -->
    <rect width="800" height="600" fill="url(#bg)" />
    <rect width="800" height="600" fill="url(#glow)" />
    
    <!-- Subtle Frame -->
    <rect x="24" y="24" width="752" height="552" rx="16" fill="none" stroke="#87786F" stroke-opacity="0.25" stroke-width="2" />
    
    <!-- Badge -->
    <g transform="translate(400, 140)">
      <rect x="-100" y="-18" width="200" height="36" rx="18" fill="#E9E3DD" stroke="#87786F" stroke-opacity="0.4" />
      <text text-anchor="middle" y="6" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600" fill="#5D4E44" letter-spacing="2">${safeCategory.toUpperCase()}</text>
    </g>

    <!-- Icon -->
    <text x="400" y="290" text-anchor="middle" font-size="96">${item.icon}</text>
    
    <!-- Title -->
    <text x="400" y="380" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="34" font-weight="bold" fill="#3F2B1F">${safeName}</text>
    
    <!-- Brand mark -->
    <text x="400" y="420" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="500" fill="#87786F">BENBRU • PANADERÍA &amp; CAFETERÍA</text>
    <text x="400" y="445" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-style="italic" fill="#A66B38">Costa del Este</text>

    <!-- Decorative wheat stalks dots -->
    <circle cx="360" cy="480" r="3" fill="#A66B38" />
    <line x1="375" y1="480" x2="425" y2="480" stroke="#A66B38" stroke-width="1.5" />
    <circle cx="440" cy="480" r="3" fill="#A66B38" />
  </svg>
  `;

  const dest = path.join(prodDir, `${item.id}.webp`);
  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(dest);
  console.log(`Generated ${dest}`);
}

async function main() {
  for (const item of items) {
    await generateProductWebp(item);
  }
  console.log('All product image assets generated successfully.');
}

main().catch(console.error);
