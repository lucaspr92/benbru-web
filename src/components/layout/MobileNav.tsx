import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle, MapPin } from "lucide-react";
import { InstagramIcon } from "../ui/InstagramIcon";
import { site, buildWhatsAppLink } from "../../content/site";

interface MobileNavProps {
  currentPath: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/productos", label: "Productos" },
    { href: "/encargos", label: "Encargos & Envíos" },
    { href: "/contacto", label: "Contacto & Ubicación" }
  ];

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-full text-[#3F2B1F] hover:bg-[#E7E1D9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A66B38]"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú de navegación"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 top-[72px] z-50 bg-[#E9E3DD]/95 backdrop-blur-md flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-4 duration-200"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-medium py-3 px-4 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#3F2B1F] text-[#E9E3DD] font-semibold"
                      : "text-[#3F2B1F] hover:bg-[#E7E1D9]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#87786F]/20 flex flex-col gap-3">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-[#3F2B1F] text-[#E9E3DD] rounded-xl font-semibold hover:bg-[#5D4E44] transition-colors shadow-sm"
            >
              <MessageCircle className="w-5 h-5 text-[#E9E3DD]" />
              <span>Pedir por WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={site.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#5D4E44] hover:text-[#3F2B1F] font-medium"
                aria-label="Instagram de BenBru"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{site.contact.instagramHandle}</span>
              </a>
              <span className="text-[#87786F]">•</span>
              <a
                href={site.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#5D4E44] hover:text-[#3F2B1F] font-medium"
              >
                <MapPin className="w-4 h-4" />
                <span>Costa del Este</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
