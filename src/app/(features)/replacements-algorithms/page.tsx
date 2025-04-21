export default function IntroReplacementAlgorithms() {
  return (
    <div className="flex h-full w-full items-center justify-center text-center">
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-5xl font-bold">
          Algoritmos de Reemplazo de Página
        </h1>

        <p className="2xl:text-lg">
          Los algoritmos de reemplazo de página son técnicas utilizadas por los
          sistemas operativos para decidir qué páginas de memoria deben ser
          reemplazadas cuando se produce un fallo de página y no hay espacio
          libre disponible en la memoria principal.
        </p>

        <p className="2xl:text-lg">
          Estos algoritmos surgieron con los primeros sistemas de memoria
          virtual en la década de 1960, cuando los sistemas operativos
          comenzaron a permitir que los programas fueran más grandes que la
          memoria física disponible.
        </p>

        <h2 className="text-center text-2xl font-semibold">
          ¿Por qué son necesarios?
        </h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>Memoria limitada:</strong> Los procesos requieren más
            memoria de la que está disponible físicamente.
          </li>
          <li>
            <strong>Fallo de página:</strong> Cuando una página requerida no
            está en memoria, se debe traer desde disco.
          </li>
          <li>
            <strong>Selección de víctima:</strong> Es necesario decidir qué
            página se eliminará para hacer espacio.
          </li>
        </ul>

        <h2 className="text-center text-2xl font-semibold">Tipos comunes</h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>FIFO (First-In, First-Out):</strong> Reemplaza la página más
            antigua.
          </li>
          <li>
            <strong>LRU (Least Recently Used):</strong> Reemplaza la página
            menos usada recientemente.
          </li>
          <li>
            <strong>Clock:</strong> Optimización de Second Chance usando un
            puntero circular.
          </li>
        </ul>

        <h2 className="text-center text-2xl font-semibold">Importancia</h2>
        <p className="2xl:text-lg">
          Un buen algoritmo de reemplazo puede mejorar significativamente el
          rendimiento del sistema, reduciendo el número de accesos a disco y
          haciendo más eficiente el uso de la memoria.
        </p>
      </div>
    </div>
  );
}
