import { HeartHandshake, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-rose-100 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Imagen */}
        <div className="lg:col-span-5 relative">
          <img
            src="/images/about/about-goodgirl.jpg"
            alt="Conoce Good Girl"
            className="rounded-2xl object-cover w-full h-[450px] shadow-lg"
          />

          {/* Tarjeta de impacto */}
          <div className="absolute -bottom-6 -right-6 bg-[#f8e4e2] text-[#2C2627] p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
            <HeartHandshake className="w-8 h-8 text-[#D88285] mb-2" />

            <p className="text-xs font-semibold">
              Belleza con Propósito
            </p>

            <p className="text-[11px] text-gray-600 mt-1">
              Cada detalle está pensado para hacerte sentir cómoda, segura y
              especial.
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D88285]">
            Conócenos / About Us
          </span>

          <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 leading-tight">
            Bienvenida a Good Girl
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed font-light">
            En{" "}
            <strong className="font-semibold text-gray-800">
              Good Girl
            </strong>{" "}
            creemos que la lencería es mucho más que una prenda: es una forma
            de expresar quién eres, cómo te sientes y cómo eliges vivir tu
            feminidad. Seleccionamos piezas que combinan sensualidad,
            comodidad y detalles pensados para hacerte sentir increíble.
          </p>

          {/* Propuesta */}
          <div className="bg-rose-50/70 p-5 rounded-2xl border border-rose-100 space-y-2">
            <h3 className="text-xs font-bold text-[#D88285] uppercase tracking-wider flex items-center">
              <Sparkles className="w-4 h-4 mr-1.5" />
              Nuestra esencia
            </h3>

            <p className="text-xs text-gray-700 leading-relaxed">
              Creamos una experiencia donde cada mujer pueda encontrar
              prendas que representen su personalidad, sentirse cómoda con su
              cuerpo y disfrutar de su propia forma de ser.
            </p>
          </div>

          {/* Frase */}
          <p className="text-xs text-gray-500 italic">
            Creemos que sentirte bien contigo misma también es una forma de belleza.
          </p>
        </div>
      </div>
    </section>
  );
}