import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { 
  Menu, 
  X, 
  MessageCircle, 
  MapPin, 
  Home, 
  Users, 
  Croissant, 
  Truck, 
  PhoneCall, 
  ChevronRight 
} from "lucide-react";
import { InstagramIcon } from "../ui/InstagramIcon";
import { site, buildWhatsAppLink } from "../../content/site";

interface MobileNavProps {
  currentPath: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and handle Escape key when menu is open
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "unset";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/nosotros", label: "Nosotros & Oficio", icon: Users },
    { href: "/productos", label: "Catálogo de Productos", icon: Croissant },
    { href: "/encargos", label: "Encargos & Envíos", icon: Truck },
    { href: "/contacto", label: "Contacto & Ubicación", icon: PhoneCall },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2.5 rounded-xl text-[#3F2B1F] hover:bg-[#E7E1D9] active:bg-[#DED7CE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A66B38]"
        aria-label="Abrir menú de navegación"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Full-screen Mobile Drawer rendered directly in body via Portal */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex flex-col bg-[#E9E3DD] text-[#3F2B1F] h-[100dvh] w-full animate-in fade-in duration-150"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación móvil"
          >
            {/* Drawer Header */}
            <div className="h-16 sm:h-20 px-4 sm:px-6 flex items-center justify-between border-b border-[#87786F]/20 bg-[#E9E3DD] shrink-0">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5"
              >
                <img
                  src="/images/logo.jpeg"
                  alt="BenBru Logo"
                  className="w-10 h-10 rounded-full object-cover shadow-xs"
                  width="40"
                  height="40"
                />
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold text-[#3F2B1F] leading-none">
                    BENBRU
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#5D4E44] font-medium mt-0.5">
                    Costa del Este
                  </span>
                </div>
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl bg-[#E7E1D9] text-[#3F2B1F] hover:bg-[#3F2B1F] hover:text-[#E9E3DD] active:scale-95 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#A66B38]"
                aria-label="Cerrar menú de navegación"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Links */}
            <nav className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-2">
              <p className="text-[11px] uppercase tracking-widest text-[#87786F] font-bold px-3 mb-2">
                Navegación
              </p>

              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(link.href);
                const IconComponent = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                      isActive
                        ? "bg-[#3F2B1F] text-[#E9E3DD] shadow-sm"
                        : "text-[#3F2B1F] hover:bg-[#E7E1D9] active:bg-[#DED7CE]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className={`w-5 h-5 ${
                          isActive ? "text-[#A66B38]" : "text-[#5D4E44]"
                        }`}
                      />
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        isActive ? "text-[#E9E3DD]" : "text-[#87786F]"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Bottom Actions & Contact */}
            <div className="p-4 sm:p-6 border-t border-[#87786F]/20 bg-[#E7E1D9]/70 shrink-0 space-y-3 pb-[calc(1rem+env(safe-area-inset-bottom,0px))]">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full font-bold text-sm shadow-md active:scale-98 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current stroke-none" />
                <span>Pedir por WhatsApp</span>
              </a>

              <div className="flex items-center justify-around pt-1 text-xs text-[#5D4E44]">
                <a
                  href={site.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold text-[#3F2B1F] hover:text-[#A66B38] py-1 px-2"
                >
                  <InstagramIcon className="w-4 h-4 text-[#A66B38]" />
                  <span>{site.contact.instagramHandle}</span>
                </a>
                <span className="text-[#87786F]">•</span>
                <a
                  href={site.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold text-[#3F2B1F] hover:text-[#A66B38] py-1 px-2"
                >
                  <MapPin className="w-4 h-4 text-[#A66B38]" />
                  <span>Costa del Este</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
