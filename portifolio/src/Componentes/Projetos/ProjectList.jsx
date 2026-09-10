import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import Project from './Project'
import { projects } from './projects'

export default function ProjectList() {
  return <section id="projetos" tabIndex={-1} aria-labelledby="projetos-title" className="section-space page-shell">
    <div className="section-heading reveal flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow"><span>03 /</span> DA IDEIA À TELA</p><h2 id="projetos-title">Código que ganha vida<span className="text-cyan">.</span></h2><p>Projetos acadêmicos que fazem parte da minha evolução.</p></div><a href="https://github.com/mricciotti" target="_blank" rel="noreferrer" className="text-link"><FiGithub aria-hidden="true" /> Meu GitHub <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (abre em nova aba)</span></a></div>
    <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <Project key={project.id} project={project} />)}</div>
  </section>
}
