import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-borda py-8">
      <div className="container-site flex flex-col gap-2 font-mono text-[13px] text-texto-sutil sm:flex-row sm:items-center sm:justify-between">
        <p>{site.footer.left}</p>
        <p>{site.footer.right}</p>
      </div>
    </footer>
  )
}
