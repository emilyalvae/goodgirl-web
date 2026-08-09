"use client";

import { useState } from "react";
import { Heart, Eye, Star } from "lucide-react";

const BEST_SELLERS = [
  {
    id: 1,
    name: "Bralette Encaje Encanto Negro",
    category: "Lencería",
    price: 59.9,
    oldPrice: 69.9,
    rating: 4.9,
    tag: "Más vendido",
    image: "/images/lenceria2.jpeg",
  },
  {
    id: 2,
    name: "Conjunto Bralette Rosa",
    category: "Ropa Interior",
    price: 69.9,
    oldPrice: null,
    rating: 4.8,
    tag: "Favorito",
    image: "/images/lenceria2.jpeg",
  },
  {
    id: 3,
    name: "Bata Satén Seda Rosada",
    category: "Pijamas",
    price: 79.9,
    oldPrice: 89.9,
    rating: 4.9,
    tag: "Oferta",
    image: "/images/lenceria2.jpeg",
  },
  {
    id: 4,
    name: "Conjunto Encaje Floral",
    category: "Lencería",
    price: 64.9,
    oldPrice: null,
    rating: 4.7,
    tag: null,
    image: "/images/lenceria2.jpeg",
  },
];

export default function BestSellers() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<
    (typeof BEST_SELLERS)[number] | null
  >(null);

  const toggleWishlist = (productId: number) => {
    setWishlist((currentWishlist) =>
      currentWishlist.includes(productId)
        ? currentWishlist.filter((id) => id !== productId)
        : [...currentWishlist, productId]
    );
  };

  return (
    <section
      id="catalogo"
      className="bg-[#f8e4e2] py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center space-y-3 mb-10">
        <span className="text-xs uppercase tracking-widest text-[#D88285] font-semibold">
          Favoritos de la Comunidad
        </span>

        <h2 className="text-3xl sm:text-4xl font-serif text-gray-900">
          Más Vendidos
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
          Diseños impecables, comodidad que abraza y un estilo que enamora a
          primera vista.
        </p>

        <div className="w-12 h-0.5 bg-[#F2D0CA] mx-auto rounded-full" />
        </div>
      

      {/* Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BEST_SELLERS.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl border border-rose-50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Imagen */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />


              {/* Favoritos */}
              <button
                onClick={() => toggleWishlist(product.id)}
                aria-label={`Agregar ${product.name} a favoritos`}
                className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white hover:text-[#D88285] transition-colors"
              >
                <Heart
                  className={`w-4 h-4 ${
                    wishlist.includes(product.id)
                      ? "fill-[#D88285] text-[#D88285]"
                      : ""
                  }`}
                />
              </button>

              {/* Vista rápida */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="p-2.5 bg-white text-gray-800 rounded-full hover:bg-[#D88285] hover:text-white transition-colors shadow-lg flex items-center gap-1.5 text-xs font-medium px-4"
                >
                  <Eye className="w-4 h-4" />
                  <span>Vista Rápida</span>
                </button>
              </div>
            </div>

            {/* Información */}
            <div className="p-4 flex flex-col flex-grow justify-between space-y-2">
              <div>
                <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider">
                  {product.category}
                </span>

                <h3 className="text-sm font-medium text-gray-800 line-clamp-1 group-hover:text-[#D88285] transition-colors">
                  {product.name}
                </h3>
              </div>

              {/* Precio + rating */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-baseline space-x-2">
                  <span className="text-base font-bold text-gray-900">
                    S/. {product.price.toFixed(2)}
                  </span>

                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      S/. {product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-1 text-amber-400 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* Modal - Vista rápida */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl mb-5">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider">
              {quickViewProduct.category}
            </span>

            <h3 className="text-xl font-serif text-gray-900 mt-1">
              {quickViewProduct.name}
            </h3>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-lg font-bold">
                S/. {quickViewProduct.price.toFixed(2)}
              </span>

              {quickViewProduct.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  S/. {quickViewProduct.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 text-amber-400 text-sm mt-2">
              <Star className="w-4 h-4 fill-current" />
              <span>{quickViewProduct.rating}</span>
            </div>

            <button
              onClick={() => setQuickViewProduct(null)}
              className="w-full mt-6 py-3 rounded-full bg-[#D88285] text-white text-sm font-medium hover:bg-[#c97074] transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}