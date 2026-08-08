import {
  MessageCircle,
  Heart,
} from "lucide-react";

const FOOTER_LINKS = {
  tienda: [
    { label: "Lencería", href: "#categorias" },
    { label: "Brasieres", href: "#categorias" },
    { label: "Calzones", href: "#categorias" },
    { label: "Más Vendidos", href: "#catalogo" },
  ],
  nosotros: [
    { label: "Sobre Good Girl", href: "#about" },
    { label: "Novedades", href: "#exclusive" },
    { label: "Testimonios", href: "#testimonios" },
  ],
  ayuda: [
    { label: "Preguntas frecuentes", href: "#faq" },
    { label: "Envíos", href: "#envios" },
    { label: "Cambios y devoluciones", href: "#cambios" },
    { label: "Contáctanos", href: "#contacto" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#2C2627] text-white">
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Marca */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <h2 className="text-3xl font-serif tracking-wide">
                Good Girl
              </h2>

              <div className="w-10 h-0.5 bg-[#D88285] mt-3" />
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Lencería pensada para hacerte sentir cómoda, segura y
              auténticamente tú.
            </p>

            <p className="flex items-center gap-1.5 text-xs text-gray-400 mt-5">
              Hecho para ti con <Heart className="w-3.5 h-3.5 text-[#D88285] fill-[#D88285]" />
            </p>

            {/* Redes */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D88285] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D88285] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D88285] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tienda */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white mb-5">
              Tienda
            </h3>

            <ul className="space-y-3">
              {FOOTER_LINKS.tienda.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nosotros */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white mb-5">
              Good Girl
            </h3>

            <ul className="space-y-3">
              {FOOTER_LINKS.nosotros.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayuda */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white mb-5">
              Ayuda
            </h3>

            <ul className="space-y-3">
              {FOOTER_LINKS.ayuda.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white mb-5">
              Contáctanos
            </h3>

            <div className="space-y-3 text-xs text-gray-400">
              <p>
                ¿Tienes alguna pregunta?
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-white hover:text-[#D88285] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Good Girl. Todos los derechos
            reservados.
          </p>

          <div className="flex items-center gap-4 text-[10px] text-gray-500">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Términos y condiciones
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}