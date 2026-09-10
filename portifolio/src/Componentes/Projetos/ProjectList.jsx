import Reveal from "../UI/Reveal"
import Project from "./Project"

function ProjectList({ projects }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal key={project.title} delay={index * 0.1}>
          <Project
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        </Reveal>
      ))}
    </div>
  )
}

export default ProjectList
