"use client";

import { useEffect, useState } from "react";
import {
  Search,
  User,
  Heart,
  ChevronDown,
  Menu,
} from "lucide-react";

import MobileMenu from "./MobileMenu";

const MENU_DATA = {
  mujer: {
    title: "Mujer",
    items: [
      "Lencería",
      "Brasieres",
      "Calzones",
      "Conjuntos",
    ],
  },

  ninas: {
    title: "Niñas",
    items: [
      "Ropa interior",
      "Brasieres",
      "Calzones",
      "Conjuntos",
    ],
  },

  promociones: {
    title: "¡Promociones!",
    items: [
      "3x2",
      "Descuentos",
      "Ofertas especiales",
    ],
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mujerDropdown, setMujerDropdown] = useState(false);
  const [ninasDropdown, setNinasDropdown] = useState(false);
  const [promosDropdown, setPromosDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-rose-50 transition-colors"
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1 className="font-serif italic text-3xl sm:text-4xl text-[#ed0996] tracking-wide font-normal">
              Good Girl
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">

            {/* Inicio */}
            <a
              href="#"
              className="hover:text-[#D88285] transition-colors py-2"
            >
              Inicio
            </a>

            {/* Mujer */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => setMujerDropdown(true)}
              onMouseLeave={() => setMujerDropdown(false)}
            >
              <button className="flex items-center space-x-1 hover:text-[#D88285] transition-colors">
                <span>{MENU_DATA.mujer.title}</span>

                <ChevronDown
                  className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                    mujerDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mujerDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-rose-100 py-2 z-50 animate-in fade-in duration-150">
                  {MENU_DATA.mujer.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-xs hover:bg-rose-50 hover:text-[#D88285] transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Niñas */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => setNinasDropdown(true)}
              onMouseLeave={() => setNinasDropdown(false)}
            >
              <button className="flex items-center space-x-1 hover:text-[#D88285] transition-colors">
                <span>{MENU_DATA.ninas.title}</span>

                <ChevronDown
                  className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                    ninasDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {ninasDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-rose-100 py-2 z-50 animate-in fade-in duration-150">
                  {MENU_DATA.ninas.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-xs hover:bg-rose-50 hover:text-[#D88285] transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Promociones */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => setPromosDropdown(true)}
              onMouseLeave={() => setPromosDropdown(false)}
            >
              <button className="flex items-center space-x-1 font-semibold text-[#D88285] hover:opacity-80 transition-opacity">
                <span>{MENU_DATA.promociones.title}</span>

                <ChevronDown
                  className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                    promosDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {promosDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-rose-100 py-2 z-50 animate-in fade-in duration-150">
                  {MENU_DATA.promociones.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-xs font-medium hover:bg-rose-50 hover:text-[#D88285] transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">

            {/* Search */}
            <button
              className="p-2 text-gray-700 hover:text-[#D88285] hover:bg-rose-50 rounded-full transition-colors hidden sm:block"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User */}
            <button
              className="p-2 text-gray-700 hover:text-[#D88285] hover:bg-rose-50 rounded-full transition-colors hidden sm:block"
              aria-label="Mi cuenta"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Favorites */}
            <button
              className="p-2 text-gray-700 hover:text-[#D88285] hover:bg-rose-50 rounded-full transition-colors relative"
              aria-label="Favoritos"
            >
              <Heart className="w-5 h-5" />

              <span className="absolute top-1 right-1 w-2 h-2 bg-[#D88285] rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        menuData={MENU_DATA}
      />
    </>
  );
}