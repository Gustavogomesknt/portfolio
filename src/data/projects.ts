export interface Project {
  /** Usado no caminho da imagem: /projects/<slug>.png */
  slug: string
  name: string
  label: string
  description: string
  tags: string[]
  /** Opcional. Sem link, o card não mostra o link do projeto. */
  link?: string
}

export const projects: Project[] = [
  {
    slug: 'guarusolar',
    name: 'GuaruSolar',
    label: 'freelance · energia solar',
    description:
      'Sistema de gestão que conecta o escritório aos técnicos em campo: orçamentos com PDF e mensagem pronta para WhatsApp, agenda das equipes sem conflitos e validação de serviços por fotos enviadas pelo celular.',
    tags: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'PWA', 'Docker'],
  },
  {
    slug: 'jane-pacheco-estetica',
    name: 'Jane Pacheco Estética',
    label: 'freelance · clínica de estética',
    description:
      'Site com agendamento online em 4 passos e área da equipe. Calcula os horários livres de cada profissional e usa transação serializável para que duas clientes nunca fiquem com o mesmo horário.',
    tags: ['C#', 'ASP.NET Core 8', 'EF Core', 'React', 'PostgreSQL'],
  },
  {
    slug: 'enind',
    name: 'ENIND',
    label: 'freelance · engenharia e obras',
    description:
      'Controle de equipamentos de obra e manutenção preventiva: mostra onde cada equipamento está, acompanha validade e calibração e envia e-mails mensais de revisão automaticamente, com histórico para auditoria.',
    tags: ['React', 'Python', 'Flask'],
  },
]
