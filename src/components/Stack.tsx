import { stack } from '../data/stack'

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-titulo" className="secao">
      <div className="container-site">
        <p className="rotulo">03 / stack</p>
        <h2 id="stack-titulo" className="titulo-secao mt-3">
          Ferramentas que eu uso
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stack.map((group) => (
            <li key={group.name} className="card p-6">
              <h3 className="text-lg font-medium">{group.name}</h3>
              <ul aria-label={group.name} className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
