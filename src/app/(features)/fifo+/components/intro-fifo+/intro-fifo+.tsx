import React from "react";

export default function IntroFifoPlus() {
  return (
    <div className="flex h-full w-full items-center justify-center text-center">
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-5xl font-bold">FIFO+</h1>

        <p className="2xl:text-lg">
          Es una mejora del algoritmo FIFO que le da una &quot;segunda
          oportunidad&quot; a las páginas que han sido utilizadas recientemente
          antes de ser reemplazadas.
        </p>

        <h2 className="text-center text-2xl font-semibold">Conceptos clave</h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>Bit de uso:</strong> Cada página tiene un bit que indica si
            ha sido accedida recientemente.
          </li>
          <li>
            <strong>Revisión antes del reemplazo:</strong> Si el bit de uso está
            activo, la página no se reemplaza inmediatamente, sino que se le da
            otra oportunidad.
          </li>
          <li>
            <strong>Extensión de FIFO:</strong> Mantiene la simplicidad de FIFO
            pero con mayor eficiencia.
          </li>
        </ul>

        <h2 className="text-center text-2xl font-semibold">
          Ventajas y Desventajas
        </h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>Ventaja:</strong> Mejora el rendimiento de FIFO al evitar
            reemplazar páginas que aún son útiles.
          </li>
          <li>
            <strong>Desventaja:</strong> Su implementación es ligeramente más
            compleja y puede requerir más ciclos de revisión.
          </li>
        </ul>
      </div>
    </div>
  );
}
