import PropTypes from 'prop-types'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Project({ project }) {
  return (
    <article className="project-card reveal">
      <a
        className="project-card-link"
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={'Ver projeto ' + project.title + ' (abre em nova aba)'}
      >
        <div className="project-image">
          <img
            src={project.image}
            alt={project.alt}
            width={project.width}
            height={project.height}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="project-shade" aria-hidden="true" />
        <div className="project-caption">
          <h3 className="font-display text-lg font-semibold text-ink">
            {project.title}
          </h3>
          <p className="project-description">{project.description}</p>
          <span className="project-cta">
            Ver projeto <FiArrowUpRight aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
}
