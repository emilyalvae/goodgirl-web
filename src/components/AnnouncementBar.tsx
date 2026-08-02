"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  if (!showAnnouncement) {
    return null;
  }

  return (
    <div className="bg-[#f8e4e2] text-[#2C2627] px-4 py-2 text-xs sm:text-sm text-center relative font-medium transition-all duration-300">
      <span>Envíos gratis por compras mayores a S/200</span>

      <button
        onClick={() => setShowAnnouncement(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Cerrar anuncio"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}