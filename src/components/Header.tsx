import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    // fecha o menu se a tela crescer para o layout de desktop
    const desktop = window.matchMedia('(min-width: 768px)')
    const onChange = () => setOpen(false)

    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onChange)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-borda bg-fundo/90 backdrop-blur">
      <a
        href="#conteudo"
        className="btn btn-destaque sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-2 focus-visible:left-2"
      >
        Pular para o conteúdo
      </a>

      <div className="container-site flex h-16 items-center justify-between gap-6">
        <a
          href="#topo"
          aria-label={`${site.name}, voltar ao topo`}
          className="font-mono text-sm font-medium text-texto"
        >
          {site.logo}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[15px] text-texto-secundario transition-colors hover:text-texto"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={site.resumeUrl} download className="btn btn-destaque">
            <Download size={16} aria-hidden="true" />
            Baixar currículo
          </a>
        </nav>

        <button
          type="button"
          className="-mr-3 inline-flex size-12 items-center justify-center rounded-botao text-texto md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Principal (celular)"
        hidden={!open}
        className="border-t border-borda bg-fundo md:hidden"
      >
        <div className="container-site py-4">
          <ul>
            {site.nav.map((item) => (
              <li key={item.href} className="border-b border-borda">
                <a
                  href={item.href}
                  className="flex min-h-12 items-center text-lg text-texto"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={site.resumeUrl} download className="btn btn-destaque mt-5 w-full">
            <Download size={16} aria-hidden="true" />
            Baixar currículo
          </a>
        </div>
      </nav>
    </header>
  )
}
