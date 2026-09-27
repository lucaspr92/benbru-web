import React from "react";
import { MessageCircle } from "lucide-react";
import { site, buildWhatsAppLink } from "../../content/site";

export const WhatsAppFab: React.FC = () => {
  return (
    <aside
      aria-label="Contacto por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group pointer-events-none"
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block pointer-events-auto mr-3 px-3.5 py-1.5 bg-[#3F2B1F] text-[#E9E3DD] text-xs font-semibold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        ¿Hablamos por WhatsApp?
      </span>

      {/* FAB Button */}
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp para consultas y pedidos"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-7 h-7 fill-current stroke-none" />
      </a>
    </aside>
  );
};
