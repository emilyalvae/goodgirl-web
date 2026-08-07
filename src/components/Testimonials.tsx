"use client";

import { useState } from "react";
import { Heart, Star, X } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Valeria",
    text: "Me encantó la calidad y lo cómoda que es. Se nota que cada detalle está pensado para que una se sienta increíble.",
    rating: 5,
    image: "/images/testimonials/valeria.jpg",
  },
  {
    id: 2,
    name: "Camila",
    text: "El conjunto es precioso y quedó tal como esperaba. Definitivamente volvería a comprar en Good Girl.",
    rating: 5,
    image: "/images/testimonials/camila.jpg",
  },
  {
    id: 3,
    name: "Sofía",
    text: "Me sorprendió muchísimo la comodidad. Además, el diseño es delicado y súper bonito.",
    rating: 5,
    image: "/images/testimonials/sofia.jpg",
  },
  {
    id: 4,
    name: "Andrea",
    text: "La atención fue excelente y mi pedido llegó perfecto. Me encantó mi compra.",
    rating: 5,
    image: "/images/testimonials/andrea.jpg",
  },
];

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<(typeof TESTIMONIALS)[number] | null>(null);

  return (
    <section className="bg-white py-16 border-t border-rose-50">
      {/* Encabezado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-10">
        <Heart className="w-8 h-8 text-[#D88285] mx-auto fill-[#F8E4E2]" />

        <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">
          Lo que dicen nuestras clientas
        </h2>

        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Cada experiencia nos inspira a seguir creando momentos especiales
          para ti.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {TESTIMONIALS.map((testimonial) => (
          <button
            key={testimonial.id}
            type="button"
            onClick={() => setSelectedTestimonial(testimonial)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 cursor-pointer text-left"
          >
            <img
              src={testimonial.image}
              alt={`Testimonio de ${testimonial.name}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />

            {/* Indicador */}
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full">
                Ver experiencia
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl grid grid-cols-1 md:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              type="button"
              onClick={() => setSelectedTestimonial(null)}
              aria-label="Cerrar testimonio"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-[#D88285] hover:bg-white transition-colors shadow-sm"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Imagen grande */}
            <div className="relative aspect-square md:aspect-auto min-h-[350px] bg-gray-100">
              <img
                src={selectedTestimonial.image}
                alt={`Testimonio de ${selectedTestimonial.name}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Información */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <Heart className="w-7 h-7 text-[#D88285] fill-[#F8E4E2] mb-5" />

              {/* Estrellas */}
              <div className="flex gap-1 mb-5">
                {Array.from({
                  length: selectedTestimonial.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 text-[#D88285] fill-[#D88285]"
                  />
                ))}
              </div>

              {/* Testimonio */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                {selectedTestimonial.text}
              </p>

              {/* Cliente */}
              <div className="mt-7 pt-5 border-t border-rose-100">
                <p className="text-sm font-semibold text-gray-800">
                  {selectedTestimonial.name}
                </p>

                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                  Clienta Good Girl
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}