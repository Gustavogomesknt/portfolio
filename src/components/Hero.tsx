import { ArrowRight } from 'lucide-react'
import { hero } from '../data/hero'
import { site } from '../data/site'

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-titulo" className="py-20 md:py-32">
      <div className="container-site">
        <p className="rotulo">{hero.label}</p>

        <h1
          id="hero-titulo"
          className="mt-6 max-w-[16ch] text-[clamp(44px,7vw,88px)] leading-[1.02] font-bold tracking-[-0.03em]"
        >
          {hero.title}
        </h1>

        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-texto-secundario">
          {hero.paragraph}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#projetos" className="btn btn-destaque">
            Ver projetos
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href={site.githubUrl} target="_blank" rel="noreferrer" className="btn btn-contorno">
            GitHub
          </a>
          <a href={site.linkedinUrl} target="_blank" rel="noreferrer" className="btn btn-contorno">
            LinkedIn
          </a>
        </div>

        <p className="mt-10 flex items-center gap-3 font-mono text-[13px] text-texto-secundario">
          <span
            aria-hidden="true"
            className="size-2 shrink-0 rounded-full bg-destaque ring-4 ring-destaque/15"
          />
          {hero.status}
        </p>
      </div>
    </section>
  )
}
