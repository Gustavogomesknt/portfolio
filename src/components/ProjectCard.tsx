import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <div className="placeholder-listrado relative aspect-[16/10] border-b border-borda">
        {imageFailed ? (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <span className="rounded-botao border border-borda-forte bg-fundo px-3 py-2 text-center font-mono text-[13px] text-texto-secundario">
              {project.name}
            </span>
          </div>
        ) : (
          <img
            src={`/projects/${project.slug}.png`}
            alt={`Tela do projeto ${project.name}`}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="rotulo">{project.label}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-[-0.01em]">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-texto-secundario">{project.description}</p>

        <ul aria-label="Tecnologias" className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="link-sublinhado mt-auto self-start pt-6"
            aria-label={`Ver projeto ${project.name}`}
          >
            Ver projeto
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
