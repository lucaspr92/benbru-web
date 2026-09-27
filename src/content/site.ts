export const site = {
  name: "BenBru",
  subname: "Panadería & Cafetería",
  tagline: "El sabor del buen pan artesanal y café de especialidad.",
  description: "Panadería y cafetería artesanal en Costa del Este. Masa madre, pastelería y café en un entorno natural único. Envíos en todo el Partido de La Costa.",
  url: "https://benbru.com.ar",
  location: {
    name: "Local Costa del Este",
    street: "Av. 2 y Los Alelíes",
    city: "Costa del Este",
    region: "Partido de La Costa, Provincia de Buenos Aires",
    country: "Argentina",
    fullAddress: "Av. 2 y Los Alelíes, Costa del Este, Pcia. de Buenos Aires",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+2+y+Los+Alel%C3%ADes,+Costa+del+Este,+Buenos+Aires",
    embedMapUrl: "https://maps.google.com/maps?q=Av.+2+y+Los+Alel%C3%ADes,+Costa+del+Este,+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed",
    hoursText: "Todos los días de 8:00 a 20:30 hs",
    seasonNote: "Horarios extendidos en temporada de verano y fines de semana largos."
  },
  contact: {
    whatsappNumber: "5492257520849",
    whatsappDisplay: "+54 9 2257 52-0849",
    whatsappDefaultMessage: "¡Hola BenBru! Quería hacerles una consulta 😊",
    instagramUrl: "https://www.instagram.com/benbru.co",
    instagramHandle: "@benbru.co"
  },
  values: [
    {
      title: "Masa Madre & Lenta Fermentación",
      description: "Respetamos los tiempos naturales del pan para lograr corteza crocante, miga aireada y digestión liviana."
    },
    {
      title: "100% Artesanal",
      description: "Elaboramos todo en nuestro obrador con materias primas nobles y sin conservantes artificiales."
    },
    {
      title: "Café de Especialidad",
      description: "Granos seleccionados y calibrados a diario para acompañar cada momento de tu día."
    },
    {
      title: "En el Corazón del Bosque",
      description: "Ubicados en Costa del Este, un punto de encuentro cálido entre el aroma a pino y pan recién horneado."
    }
  ]
} as const;

export function buildWhatsAppLink(message?: string): string {
  const text = message || site.contact.whatsappDefaultMessage;
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildProductWhatsAppLink(productName: string): string {
  const text = `¡Hola BenBru! Vi su web y quería consultar la disponibilidad de "${productName}" 🥐`;
  return buildWhatsAppLink(text);
}

export function buildOrderWhatsAppLink(orderType: string): string {
  const text = `¡Hola BenBru! Me gustaría hacer un encargo de ${orderType} 🎂`;
  return buildWhatsAppLink(text);
}
