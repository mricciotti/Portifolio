import PropTypes from 'prop-types'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Project({ project }) {
  return <article className="project-card reveal">
    <a href={project.link} target="_blank" rel="noreferrer" className="project-image-link" aria-label={'Visitar ' + project.title + ' (abre em nova aba)'}>
      <div className="project-browser" aria-hidden="true"><span /><span /><span /><span className="browser-address">{new URL(project.link).hostname}</span><FiArrowUpRight /></div>
      <div className="project-image"><img src={project.image} alt={project.alt} width="1200" height="600" loading="lazy" decoding="async" /><span className="project-open"><FiArrowUpRight /></span></div>
    </a>
    <div className="p-6 md:p-7">
      <div className="flex items-center justify-between gap-2"><p className="text-xs tracking-wide text-muted">{project.category}</p><span className="font-mono text-xs text-subtle">/{project.number}</span></div>
      <h3 className="mt-3 font-display text-2xl font-semibold"><a className="hover:text-cyan" href={project.link} target="_blank" rel="noreferrer">{project.title}<span className="sr-only"> (abre em nova aba)</span></a></h3>
      <p className="mt-3 min-h-20 text-sm leading-7 text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4"><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><a className="text-link text-xs" href={project.link} target="_blank" rel="noreferrer" aria-label={'Ver projeto ' + project.title + ' (abre em nova aba)'}>Ver projeto <FiArrowUpRight aria-hidden="true" /></a></div>
    </div>
  </article>
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired, category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, link: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired, number: PropTypes.string.isRequired,
  }).isRequired,
}
