import {
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#E1A9AA]/20 min-h-[500px] sm:min-h-[600px] flex items-center justify-center">

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">

        <img
          src="https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1920"
          alt="Good Girl colección"
          className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/30 via-rose-900/10 to-transparent" />

      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center sm:text-left w-full">

        <div className="max-w-xl space-y-6">

          {/* Etiqueta */}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/80 text-[#D88285] backdrop-blur-sm shadow-sm">

            <Sparkles className="w-3.5 h-3.5 mr-1" />

            Nueva Colección Elegancia & Confort

          </span>

          {/* Título */}
          <h2 className="text-4xl sm:text-6xl font-serif text-white drop-shadow-md leading-tight">
            Siente la delicadeza en cada detalle
          </h2>

          {/* Descripción */}
          <p className="text-sm sm:text-base text-rose-50/90 font-light max-w-md">
            Diseños exclusivos elaborados con los mejores encajes y satén para brindarte máxima comodidad día a día.
          </p>

          {/* Botón */}
          <div className="pt-2">

            <a
              href="#catalogo"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#f8e4e2] text-[#2C2627] hover:bg-white font-medium text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Descubre la Colección
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}