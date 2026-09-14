import { FiBriefcase } from 'react-icons/fi'
import { LuGraduationCap } from 'react-icons/lu'

const timeline = [
  {
    icon: FiBriefcase,
    place: 'Editora Globo (Grupo Globo)',
    title: 'Estagiário de Front-end',
    category: 'Experiência',
    description:
      'Desenvolvo componentes de interface reutilizáveis para um dos maiores portais de conteúdo do Brasil, com foco em performance e escala.',
    tags: ['React', 'TypeScript', 'Testes automatizados'],
  },
  {
    icon: LuGraduationCap,
    place: 'FIAP',
    title: 'Engenharia de Software',
    category: 'Formação',
    description:
      'Projetos acadêmicos que conectam interfaces, sistemas de servidor em Java e aplicativos em React Native, além de contato com C#/.NET e Firebase.',
    tags: ['Java', 'React Native', 'C#/.NET', 'Firebase'],
  },
]

export default function Experiencia() {
  return (
    <section
      id="experiencia"
      tabIndex={-1}
      aria-labelledby="experiencia-title"
      className="section-space page-shell"
    >
      <div className="sonnet-heading reveal">
        <p>Trajetória</p>
        <h2 id="experiencia-title">Experiência</h2>
      </div>
      <ol className="sonnet-timeline">
        {timeline.map(
          ({ icon: Icon, place, title, category, description, tags }) => (
            <li key={place} className="sonnet-timeline-item reveal">
              <div className="sonnet-timeline-icon">
                <Icon aria-hidden="true" />
              </div>
              <article className="sonnet-experience-card">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {place}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {title}
                    </p>
                  </div>
                  <span className="sonnet-category">{category}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="sonnet-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ),
        )}
      </ol>
    </section>
  )
}
