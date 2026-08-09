const CATEGORY_CARDS = [
  {
    category: "lenceria",
    title: "Lencería",
    subtitle: "Elegancia y comodidad para cada momento.",
    image: "/images/lenceria.jpeg",
  },
  {
    category: "brasieres",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    title: "Brasieres",
    subtitle: "Diseñados para sentirte cómoda y segura.",
    image: "/images/lenceria.jpeg",
  },
  {
    category: "calzones",
    title: "Calzones",
    subtitle: "Comodidad que se adapta a ti.",
    image: "/images/lenceria.jpeg",
  },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Encabezado */}
      <div className="text-center space-y-2 mb-12">
        <span className="text-xs uppercase tracking-widest text-[#D88285] font-semibold">
          Categorías Good Girl
        </span>

        <h2 className="text-3xl sm:text-4xl font-serif text-gray-900">
          Nuestras Categorías
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
          Descubre prendas creadas para cada momento de tu día y cada versión
          de ti.
        </p>

        <div className="w-12 h-0.5 bg-[#F2D0CA] mx-auto rounded-full mt-2" />
      </div>

      {/* Categorías */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATEGORY_CARDS.map((cat) => (
          <div
            key={cat.category}
            className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Imagen */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Información */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="inline-block text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-rose-100 font-semibold">
                Explorar
              </span>

              <h3 className="text-2xl font-serif">
                {cat.title}
              </h3>

              <p className="text-xs text-rose-100/90 font-light">
                {cat.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}