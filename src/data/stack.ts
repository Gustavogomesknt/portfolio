export interface StackGroup {
  name: string
  items: string[]
}

export const stack: StackGroup[] = [
  {
    name: 'Back-end',
    items: ['C#', 'ASP.NET Core', 'EF Core', 'Node.js', 'Express', 'Prisma', 'Python'],
  },
  {
    name: 'Front-end',
    items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind', 'shadcn/ui'],
  },
  {
    name: 'Banco de dados',
    items: ['SQL Server', 'T-SQL', 'PostgreSQL', 'MySQL'],
  },
  {
    name: 'DevOps',
    items: ['Docker', 'GitHub Actions', 'Azure DevOps', 'Git'],
  },
  {
    name: 'Monitoramento',
    items: ['Datadog', 'Dynatrace', 'Grafana', 'Zabbix'],
  },
]
