export default function IntroFifo() {
  return (
    <div className="flex h-full w-full items-center justify-center text-center">
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-5xl font-bold">First-In, First-Out</h1>

        <p className="text-lg">
          FIFO es un algoritmo de reemplazo de páginas que sigue una lógica
          sencilla: la primera página que entra en la memoria es la primera en
          salir cuando es necesario liberar espacio.
        </p>

        <h2 className="text-center text-2xl font-semibold">Conceptos clave</h2>
        <ul className="list-inside list-disc text-lg">
          <li>
            <strong>Orden de llegada:</strong> Las páginas se gestionan en el
            mismo orden en que fueron cargadas.
          </li>
          <li>
            <strong>Reemplazo sin análisis:</strong> No se evalúa si la página
            ha sido usada recientemente.
          </li>
          <li>
            <strong>Implementación simple:</strong> Se utiliza una cola para
            gestionar el reemplazo.
          </li>
        </ul>

        <h2 className="text-center text-2xl font-semibold">
          Ventajas y Desventajas
        </h2>
        <ul className="list-inside list-disc text-lg">
          <li>
            <strong>Ventaja:</strong> Fácil de implementar y comprender, ideal
            para fines educativos.
          </li>
          <li>
            <strong>Desventaja:</strong> Puede reemplazar páginas que aún se
            usan, generando más fallos de página.
          </li>
        </ul>
      </div>
    </div>
  );
}
