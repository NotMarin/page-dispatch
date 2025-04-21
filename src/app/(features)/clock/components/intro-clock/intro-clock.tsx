import React from "react";

export default function IntroClock() {
  return (
    <div className="flex h-full w-full items-center justify-center text-center">
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-5xl font-bold">Clock</h1>

        <p className="2xl:text-lg">
          El algoritmo Clock es una versión optimizada del algoritmo Second
          Chance, que utiliza una estructura circular similar a las manecillas
          de un reloj para gestionar las páginas en memoria.
        </p>

        <h2 className="text-center text-2xl font-semibold">Conceptos clave</h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>Reloj circular:</strong> Las páginas se organizan como en un
            reloj, con un puntero que recorre las entradas.
          </li>
          <li>
            <strong>Bit de uso:</strong> Al igual que en Second Chance, cada
            página tiene un bit que indica si ha sido utilizada recientemente.
          </li>
          <li>
            <strong>Reemplazo eficiente:</strong> El puntero avanza limpiando
            bits hasta encontrar una página con bit de uso en 0 para reemplazar.
          </li>
        </ul>

        <h2 className="text-center text-2xl font-semibold">
          Ventajas y Desventajas
        </h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>Ventaja:</strong> Es eficiente en cuanto a tiempo y espacio,
            y mantiene un buen equilibrio entre complejidad y rendimiento.
          </li>
          <li>
            <strong>Desventaja:</strong> Aunque más simple que LRU, aún requiere
            hardware o estructuras adicionales para el bit de uso.
          </li>
        </ul>
      </div>
    </div>
  );
}
