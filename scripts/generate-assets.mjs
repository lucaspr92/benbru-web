import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const prodDir = path.join(publicDir, 'images', 'productos');
const heroDir = path.join(publicDir, 'images', 'hero');

fs.mkdirSync(prodDir, { recursive: true });
fs.mkdirSync(heroDir, { recursive: true });

const items = [
  { id: 'hogaza', name: 'Hogaza de Campo', category: 'Masa Madre', icon: '🍞' },
  { id: 'pan-semillas', name: 'Hogaza Multisemillas', category: 'Masa Madre', icon: '🌾' },
  { id: 'baguette', name: 'Baguette Tradición', category: 'Panadería', icon: '🥖' },
  { id: 'brioche', name: 'Pan Brioche de Molde', category: 'Especialidad', icon: '🍞' },
  { id: 'croissant', name: 'Croissant Clásico', category: 'Pastelería', icon: '🥐' },
  { id: 'croissant-almendras', name: 'Croissant de Almendras', category: 'Pastelería', icon: '🥐' },
  { id: 'pain-au-chocolat', name: 'Pain au Chocolat', category: 'Pastelería', icon: '🍫' },
  { id: 'cinnamon-roll', name: 'Cinnamon Roll', category: 'Bollería', icon: '🌀' },
  { id: 'tarta-frutos', name: 'Tarta Frutos Rojos', category: 'Pastelería', icon: '🫐' },
  { id: 'focaccia', name: 'Focaccia al Romero', category: 'Salados', icon: '🌿' },
  { id: 'croissant-relleno', name: 'Croissant Jamón & Brie', category: 'Salados', icon: '🥪' },
  { id: 'sandwich-ciabatta', name: 'Ciabatta con Lomito', category: 'Salados', icon: '🥖' },
  { id: 'flat-white', name: 'Flat White de Especialidad', category: 'Cafetería', icon: '☕' },
  { id: 'cappuccino', name: 'Cappuccino Italiano', category: 'Cafetería', icon: '☕' },
  { id: 'iced-latte', name: 'Iced Latte Vainilla', category: 'Cafetería', icon: '🧊' }
];

async function generateProductWebp(item) {
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
      <rect x="-90" y="-18" width="180" height="36" rx="18" fill="#E9E3DD" stroke="#87786F" stroke-opacity="0.4" />
      <text text-anchor="middle" y="6" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600" fill="#5D4E44" letter-spacing="2">${item.category.toUpperCase()}</text>
    </g>

    <!-- Icon -->
    <text x="400" y="290" text-anchor="middle" font-size="96">${item.icon}</text>
    
    <!-- Title -->
    <text x="400" y="380" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="34" font-weight="bold" fill="#3F2B1F">${item.name.replace(/&/g, '&amp;')}</text>
    
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

async function generateHeroWebp() {
  const heroSvg = `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3F2B1F" />
        <stop offset="60%" stop-color="#2D1F16" />
        <stop offset="100%" stop-color="#1E140E" />
      </linearGradient>
      <radialGradient id="warmLight" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#C88242" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <rect width="1920" height="1080" fill="url(#heroBg)" />
    <rect width="1920" height="1080" fill="url(#warmLight)" />

    <!-- Ambient circles -->
    <circle cx="960" cy="480" r="320" fill="none" stroke="#E9E3DD" stroke-opacity="0.08" stroke-width="2" />
    <circle cx="960" cy="480" r="380" fill="none" stroke="#A66B38" stroke-opacity="0.1" stroke-width="1" stroke-dasharray="8 8" />

    <g transform="translate(960, 480)">
      <text text-anchor="middle" y="-60" font-size="120">🌾</text>
      <text text-anchor="middle" y="50" font-family="'Playfair Display', Georgia, serif" font-size="56" font-weight="bold" fill="#E9E3DD" letter-spacing="4">BENBRU</text>
      <text text-anchor="middle" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="600" fill="#C88242" letter-spacing="8">PANADERÍA &amp; CAFETERÍA</text>
      <text text-anchor="middle" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#E7E1D9" opacity="0.8">COSTA DEL ESTE • PARTIDO DE LA COSTA</text>
    </g>
  </svg>
  `;

  const heroDest = path.join(heroDir, 'hero-bakery.webp');
  await sharp(Buffer.from(heroSvg))
    .webp({ quality: 90 })
    .toFile(heroDest);
  console.log(`Generated ${heroDest}`);
}

async function main() {
  for (const item of items) {
    await generateProductWebp(item);
  }
  await generateHeroWebp();
  console.log('All image assets generated successfully.');
}

main().catch(console.error);
