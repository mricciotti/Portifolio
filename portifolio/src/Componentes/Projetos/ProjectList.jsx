import Project from './Project'
import { projects } from './projects'

export default function ProjectList() {
  return (
    <section
      id="projetos"
      tabIndex={-1}
      aria-labelledby="projetos-title"
      className="section-space page-shell"
    >
      <div className="sonnet-heading text-center reveal">
        <p>Portfólio</p>
        <h2 id="projetos-title">Projetos</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
