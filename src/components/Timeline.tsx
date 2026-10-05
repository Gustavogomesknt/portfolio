import { timeline } from '../data/experience'

export function Timeline() {
  return (
    <div>
      <h3 className="rotulo font-normal">experiência &amp; formação</h3>
      <ol className="mt-5 border-b border-borda">
        {timeline.map((item) => (
          <li
            key={`${item.period}-${item.title}`}
            className="grid gap-2 border-t border-borda py-6 sm:grid-cols-[150px_1fr] sm:gap-6"
          >
            <p className="font-mono text-[13px] leading-6 text-texto-sutil">{item.period}</p>
            <div>
              <p className="font-medium text-texto">{item.title}</p>
              <p className="mt-1.5 leading-relaxed text-texto-secundario">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
