"use client";

import { useState } from "react";

export default function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">
        PRUEBA REACT
      </h1>

      <p className="text-2xl">
        Contador: {count}
      </p>

      <button
        type="button"
        onClick={() => {
          console.log("🔥 CLICK EN TEST");
          setCount((prev) => prev + 1);
        }}
        className="px-8 py-4 bg-pink-500 text-white rounded-lg text-xl"
      >
        CLICK AQUÍ
      </button>
    </main>
  );
}