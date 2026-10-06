export interface NavLink {
  label: string
  href: string
}

export interface Site {
  name: string
  logo: string
  email: string
  resumeUrl: string
  githubUrl: string
  linkedinUrl: string
  nav: NavLink[]
  footer: {
    left: string
    right: string
  }
}

export const site: Site = {
  name: 'Gustavo Gomes',
  logo: '<gustavo-gomes />',
  email: 'gussantos248@gmail.com',
  resumeUrl: '/curriculo-gustavo-gomes.pdf',
  githubUrl: 'https://github.com/Gustavogomesknt',
  linkedinUrl: 'https://linkedin.com/in/gustavogomesdossantos',
  nav: [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contato', href: '#contato' },
  ],
  footer: {
    left: '© 2026 Gustavo Gomes',
    right: 'Feito com React, energético e DNA de Menino da Vila',
  },
}
