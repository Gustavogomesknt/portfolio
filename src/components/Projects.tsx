import { ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="secao">
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="rotulo">01 / projetos</p>
            <h2 id="projetos-titulo" className="titulo-secao mt-3">
              Sistemas em produção
            </h2>
          </div>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="link-sublinhado self-start sm:self-auto"
          >
            Ver todos no GitHub
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
