import React from "react";

export default function IntroSecondChange() {
  return (
    <div className="flex h-full w-full items-center justify-center text-center">
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-5xl font-bold">Segunda Oportunidad</h1>

        <p className="2xl:text-lg">
          El algoritmo Second Chance mejora el enfoque de FIFO al evitar
          reemplazar páginas que han sido utilizadas recientemente. Es una
          técnica sencilla pero efectiva que reduce la cantidad de fallos de
          página.
        </p>

        <h2 className="text-center text-2xl font-semibold">Conceptos clave</h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>Bit de referencia:</strong> Cada página tiene un bit que
            indica si fue accedida desde su última llegada o revisión.
          </li>
          <li>
            <strong>Segunda oportunidad:</strong> Si una página va a ser
            reemplazada pero su bit está en 1, se le da una segunda oportunidad
            y se coloca al final de la cola.
          </li>
          <li>
            <strong>Basado en FIFO:</strong> Mantiene la lógica de orden de
            llegada, pero con inteligencia adicional.
          </li>
        </ul>

        <h2 className="text-center text-2xl font-semibold">
          Ventajas y Desventajas
        </h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>Ventaja:</strong> Mejora significativamente a FIFO con poco
            esfuerzo adicional.
          </li>
          <li>
            <strong>Desventaja:</strong> Requiere mantenimiento del bit de
            referencia y puede consumir más tiempo en la revisión.
          </li>
        </ul>
      </div>
    </div>
  );
}
