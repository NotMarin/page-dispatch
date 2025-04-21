export default function IntroOptimal() {
  return (
    <div className="flex h-full w-full items-center justify-center text-center">
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-5xl font-bold">Óptimo</h1>

        <p className="2xl:text-lg">
          El algoritmo Óptimo reemplaza la página que no será utilizada por el
          mayor tiempo posible en el futuro, minimizando así la cantidad de
          fallos de página.
        </p>

        <h2 className="text-center text-2xl font-semibold">Conceptos clave</h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>Conocimiento futuro:</strong> Requiere conocer de antemano
            la secuencia completa de accesos a páginas.
          </li>
          <li>
            <strong>Selección ideal:</strong> Siempre elige la mejor página para
            reemplazar en términos de minimizar fallos.
          </li>
          <li>
            <strong>Modelo teórico:</strong> No se usa en sistemas reales, pero
            sirve como referencia para evaluar otros algoritmos.
          </li>
        </ul>

        <h2 className="text-center text-2xl font-semibold">
          Ventajas y Desventajas
        </h2>
        <ul className="list-inside list-disc 2xl:text-lg">
          <li>
            <strong>Ventaja:</strong> Ofrece el menor número posible de fallos
            de página.
          </li>
          <li>
            <strong>Desventaja:</strong> No puede implementarse en la práctica
            ya que requiere conocer el futuro.
          </li>
        </ul>
      </div>
    </div>
  );
}
