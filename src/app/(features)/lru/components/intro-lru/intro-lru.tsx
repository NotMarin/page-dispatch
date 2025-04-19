export default function IntroLru() {
  return (
    <div className="flex h-full w-full items-center justify-center text-center">
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-5xl font-bold">Least Recently Used (LRU)</h1>

        <p className="text-lg">
          LRU es un algoritmo de reemplazo de páginas que se basa en la idea de
          que las páginas que no se han usado recientemente son menos propensas
          a ser utilizadas en el futuro.
        </p>

        <h2 className="text-center text-2xl font-semibold">Conceptos clave</h2>
        <ul className="list-inside list-disc text-lg">
          <li>
            <strong>Uso reciente:</strong> Se reemplaza la página que ha pasado
            más tiempo sin ser utilizada.
          </li>
          <li>
            <strong>Seguimiento del historial:</strong> Requiere llevar un
            registro del orden en que las páginas son accedidas.
          </li>
          <li>
            <strong>Mayor precisión:</strong> Reduce los fallos de página al
            conservar las páginas más activas.
          </li>
        </ul>

        <h2 className="text-center text-2xl font-semibold">
          Ventajas y Desventajas
        </h2>
        <ul className="list-inside list-disc text-lg">
          <li>
            <strong>Ventaja:</strong> Generalmente ofrece mejor rendimiento que
            FIFO en escenarios reales.
          </li>
          <li>
            <strong>Desventaja:</strong> Su implementación puede ser más
            compleja y costosa en recursos.
          </li>
        </ul>
      </div>
    </div>
  );
}
