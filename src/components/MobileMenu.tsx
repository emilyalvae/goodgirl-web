"use client";

import { X } from "lucide-react";

interface MenuData {
  mujer: {
    title: string;
    items: string[];
  };

  ninas: {
    title: string;
    items: string[];
  };

  promociones: {
    title: string;
    items: string[];
  };
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  menuData: MenuData;
}

export default function MobileMenu({
  open,
  onClose,
  menuData,
}: MobileMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">

      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto">

        <div>

          {/* Header del menú */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">

            <h2 className="font-serif italic text-2xl text-[#ed0996]">
              Good Girl
            </h2>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-400 hover:bg-gray-100"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </button>

          </div>

          {/* Links */}
          <div className="py-6 space-y-6">

            {/* Inicio */}
            <a
              href="#"
              onClick={onClose}
              className="block text-base font-medium text-gray-800 hover:text-[#D88285]"
            >
              Inicio
            </a>

            {/* Mujer */}
            <div>

              <h3 className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2">
                Mujer
              </h3>

              <div className="pl-3 space-y-2 border-l-2 border-rose-100">
                {menuData.mujer.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={onClose}
                    className="block text-sm text-gray-600 hover:text-[#D88285]"
                  >
                    {item}
                  </a>
                ))}
              </div>

            </div>

            {/* Niñas */}
            <div>

              <h3 className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2">
                Niñas
              </h3>

              <div className="pl-3 space-y-2 border-l-2 border-rose-100">
                {menuData.ninas.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={onClose}
                    className="block text-sm text-gray-600 hover:text-[#D88285]"
                  >
                    {item}
                  </a>
                ))}
              </div>

            </div>

            {/* Promociones */}
            <div>

              <h3 className="text-xs uppercase font-semibold text-[#D88285] tracking-wider mb-2">
                ¡Promociones!
              </h3>

              <div className="pl-3 space-y-2 border-l-2 border-rose-300">
                {menuData.promociones.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={onClose}
                    className="block text-sm text-gray-700 font-medium hover:text-[#D88285]"
                  >
                    {item}
                  </a>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}