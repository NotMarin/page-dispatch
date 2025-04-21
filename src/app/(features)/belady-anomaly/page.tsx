export default function IntroBelady() {
  return (
    <div className="flex h-full w-full items-center justify-center text-center">
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-5xl font-bold">Anomalía de Bélády</h1>

        <p className="2xl:text-lg">
          La anomalía de Bélády es un fenómeno curioso que ocurre en ciertos
          algoritmos de reemplazo de páginas, como FIFO. Contrario a lo que se
          espera, **aumentar la cantidad de marcos de página puede provocar un
          mayor número de fallos de página**.
        </p>

        <h2 className="text-center text-2xl font-semibold">
          ¿Por qué es una anomalía?
        </h2>
        <p className="2xl:text-lg">
          En teoría, si un proceso tiene más marcos disponibles, debería tener
          menos fallos de página. Sin embargo, con algunos algoritmos, como
          FIFO, esto no siempre ocurre. Esta situación contradice la intuición y
          se considera una excepción dentro del comportamiento esperado de los
          algoritmos de reemplazo.
        </p>

        <h2 className="text-center text-2xl font-semibold">Ejemplo clásico</h2>
        <p className="2xl:text-lg">
          Secuencia de páginas: 1,2,3,4,1,2,5,1,2,3,4,5
          <br />
          Usando FIFO:
        </p>
        <ul className="mx-auto w-fit list-inside list-disc text-left 2xl:text-lg">
          <li>
            Con <strong>3 marcos</strong>: 9 fallos de página.
          </li>
          <li>
            Con <strong>4 marcos</strong>: 10 fallos de página.
          </li>
        </ul>

        <h2 className="text-center text-2xl font-semibold">Importancia</h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>Evaluación crítica:</strong> Destaca la importancia de
            elegir bien el algoritmo de reemplazo.
          </li>
          <li>
            <strong>No todos son iguales:</strong> Algoritmos como LRU o Óptimo
            no sufren esta anomalía.
          </li>
          <li>
            <strong>Estudio teórico:</strong> Esta anomalía fue demostrada por
            László Bélády en 1969, marcando un hito en el análisis de
            rendimiento de sistemas operativos.
          </li>
        </ul>
      </div>
    </div>
  );
}
