import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { 
  MessageCircle, 
  X, 
  Sparkles, 
  Coffee, 
  Croissant, 
  Wheat, 
  Sandwich, 
  ShoppingBag 
} from "lucide-react";
import type { Product, Category } from "../../content/products";
import { buildProductWhatsAppLink } from "../../content/site";

interface ProductCatalogProps {
  initialCategories: Category[];
  initialProducts: Product[];
  initialCategoryFilter?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  initialCategories,
  initialProducts,
  initialCategoryFilter = "todos"
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryFilter);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync category with URL search params
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("cat");
      if (catParam) {
        setSelectedCategory(catParam);
      }
    }
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProduct) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setActiveProduct(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeProduct]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (catId === "todos") {
        url.searchParams.delete("cat");
      } else {
        url.searchParams.set("cat", catId);
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  const filteredProducts =
    selectedCategory === "todos"
      ? initialProducts
      : initialProducts.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case "panaderia":
        return <Wheat className="w-4 h-4" />;
      case "pasteleria":
        return <Croissant className="w-4 h-4" />;
      case "salados":
        return <Sandwich className="w-4 h-4" />;
      case "cafeteria":
        return <Coffee className="w-4 h-4" />;
      case "almacen":
        return <ShoppingBag className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full">
      {/* Category Filter Chips with mobile edge padding & touch scrolling */}
      <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar justify-start md:justify-center">
        <button
          type="button"
          onClick={() => handleCategoryChange("todos")}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
            selectedCategory === "todos"
              ? "bg-[#3F2B1F] text-[#E9E3DD] shadow-md"
              : "bg-[#E7E1D9] text-[#5D4E44] hover:bg-[#DED7CE] hover:text-[#3F2B1F]"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Todos ({initialProducts.length})</span>
        </button>

        {initialCategories.map((category) => {
          const count = initialProducts.filter((p) => p.category === category.id).length;
          const isSelected = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                isSelected
                  ? "bg-[#3F2B1F] text-[#E9E3DD] shadow-md"
                  : "bg-[#E7E1D9] text-[#5D4E44] hover:bg-[#DED7CE] hover:text-[#3F2B1F]"
              }`}
            >
              {getCategoryIcon(category.id)}
              <span>{category.name} ({count})</span>
            </button>
          );
        })}
      </div>

      {/* Notice */}
      <p className="text-center text-xs text-[#87786F] mt-2 mb-8 italic">
        * La disponibilidad diaria puede variar según producción y tandas de horneado en el local.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-[#F4EFEB] rounded-2xl overflow-hidden border border-[#87786F]/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image */}
            <div 
              className="relative aspect-4/3 overflow-hidden cursor-pointer bg-[#E7E1D9]"
              onClick={() => setActiveProduct(product)}
            >
              <img
                src={product.image}
                alt={product.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {product.featured && (
                <span className="absolute top-3 left-3 bg-[#A66B38] text-white text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  Destacado
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
              <div>
                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#E9E3DD] text-[#5D4E44] border border-[#87786F]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h3 
                  onClick={() => setActiveProduct(product)}
                  className="font-display text-lg sm:text-xl font-bold text-[#3F2B1F] group-hover:text-[#A66B38] transition-colors cursor-pointer"
                >
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#5D4E44] mt-2 line-clamp-3 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-[#87786F]/15 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveProduct(product)}
                  className="text-xs font-semibold text-[#5D4E44] hover:text-[#3F2B1F] underline underline-offset-4 cursor-pointer py-1"
                >
                  Ver detalle
                </button>

                <a
                  href={buildProductWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-full shadow-sm active:scale-95 transition-all"
                  aria-label={`Consultar disponibilidad de ${product.name} por WhatsApp`}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current stroke-none" />
                  <span>Pedir</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal rendered via React Portal */}
      {mounted &&
        activeProduct &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalle de ${activeProduct.name}`}
            onClick={() => setActiveProduct(null)}
          >
            <div
              className="bg-[#E9E3DD] rounded-3xl max-w-lg w-full max-h-[88dvh] flex flex-col overflow-hidden shadow-2xl border border-[#87786F]/30 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProduct(null)}
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#3F2B1F]/80 text-[#E9E3DD] hover:bg-[#3F2B1F] flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
                aria-label="Cerrar ventana de detalle"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="h-48 sm:h-64 w-full bg-[#E7E1D9] relative shrink-0 overflow-hidden">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                {activeProduct.featured && (
                  <span className="absolute bottom-3 left-3 bg-[#A66B38] text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Especialidad de la casa
                  </span>
                )}
              </div>

              {/* Scrollable Modal Body */}
              <div className="p-5 sm:p-6 overflow-y-auto flex-1">
                {activeProduct.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {activeProduct.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#E7E1D9] text-[#5D4E44] border border-[#87786F]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#3F2B1F]">
                  {activeProduct.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#5D4E44] mt-2.5 leading-relaxed">
                  {activeProduct.longDescription}
                </p>
              </div>

              {/* Modal Footer / Action Button */}
              <div className="p-4 sm:p-5 border-t border-[#87786F]/20 bg-[#E7E1D9]/70 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-[#87786F] text-center sm:text-left">
                  Atención en local o delivery en La Costa
                </span>

                <a
                  href={buildProductWhatsAppLink(activeProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold rounded-full shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
