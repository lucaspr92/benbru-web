export interface DeliveryZone {
  name: string;
  badge?: string;
  description: string;
}

export const deliveryZones: DeliveryZone[] = [
  { name: "Costa del Este", badge: "Local & Envíos inmediatos", description: "Retiros por el local o envíos rápidos en el radio urbano y bosque." },
  { name: "Aguas Verdes", badge: "Zona Vecina", description: "Envíos diarios programados." },
  { name: "La Lucila del Mar", badge: "Zona Sur", description: "Envíos directos a domicilio." },
  { name: "San Bernardo", badge: "Zona Sur", description: "Repartos diarios coordinados por franjas horarias." },
  { name: "Mar de Ajó", badge: "Zona Sur", description: "Entregas programadas para casas, cabañas y eventos." },
  { name: "Costa Azul", badge: "Zona Sur", description: "Reparto a domicilio coordinado por WhatsApp." },
  { name: "Mar del Tuyú", badge: "Zona Norte", description: "Envíos diarios en turnos mañana y tarde." },
  { name: "Santa Teresita", badge: "Zona Norte", description: "Entregas a domicilio y coordinación de pedidos especiales." }
];

export const orderSteps = [
  {
    step: "01",
    title: "Elegí tus favoritos",
    description: "Recorré nuestro catálogo de panadería de masa madre, pastelería artesanal o armá tu box personalizado."
  },
  {
    step: "02",
    title: "Escribinos al WhatsApp",
    description: "Indicanos tu pedido, si retirás por el local en Costa del Este o tu dirección para delivery."
  },
  {
    step: "03",
    title: "Coordinamos y te llega fresco",
    description: "Te confirmamos disponibilidad, horario estimado y método de pago (transferencia o efectivo en local)."
  }
];

export const orderTypes = [
  {
    id: "tortas",
    title: "Tortas & Festejos",
    description: "Tortas artesanales para cumpleaños, celebraciones y reuniones. Diseñadas con ingredientes reales y el mejor chocolate.",
    anticipation: "Encargos con 48 hs de anticipación"
  },
  {
    id: "boxes",
    title: "Boxes Desayuno / Merienda",
    description: "Ideales para regalar o sorprender en tus vacaciones. Incluye viennoiserie, tostadas con masa madre, dulces y café.",
    anticipation: "Encargos con 24 hs de anticipación"
  },
  {
    id: "catering",
    title: "Eventos & Picadas Dulces/Saladas",
    description: "Variedad de mini focaccias rellenas, sandwiches en panes especiales, mini croissants y bocados dulces para grupos.",
    anticipation: "Encargos con 72 hs de anticipación"
  }
];
