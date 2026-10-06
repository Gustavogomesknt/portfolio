import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'

const links = [
  { label: 'GitHub', href: site.githubUrl, external: true },
  { label: 'LinkedIn', href: site.linkedinUrl, external: true },
  { label: 'Currículo (PDF)', href: site.resumeUrl, external: false },
]

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="secao">
      <div className="container-site">
        <p className="rotulo">04 / contato</p>
        <h2
          id="contato-titulo"
          className="mt-4 text-[clamp(40px,6vw,72px)] leading-[1.05] font-bold tracking-[-0.03em]"
        >
          Vamos construir algo juntos?
        </h2>

        <a
          href={`mailto:${site.email}`}
          className="link-sublinhado mt-10 font-mono text-[clamp(17px,3.4vw,32px)] break-all"
        >
          {site.email}
        </a>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : { download: true })}
                className="link-sublinhado min-h-12 font-mono text-sm"
              >
                {link.label}
                <ArrowUpRight size={16} aria-hidden="true" />
                {link.external && <span className="sr-only">(abre em nova aba)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
