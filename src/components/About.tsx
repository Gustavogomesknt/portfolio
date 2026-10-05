import { aboutParagraphs } from '../data/about'
import { Timeline } from './Timeline'

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="secao">
      <div className="container-site">
        <p className="rotulo">02 / sobre</p>
        <h2 id="sobre-titulo" className="titulo-secao mt-3">
          Um pouco sobre mim
        </h2>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5 text-lg leading-relaxed text-texto-secundario">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Timeline />
        </div>
      </div>
    </section>
  )
}
