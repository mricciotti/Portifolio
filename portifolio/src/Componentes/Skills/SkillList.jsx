import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiSass,
  SiTailwindcss,
  SiGit,
  SiVite,
  SiExpo,
  SiDotnet,
  SiSpringboot,
  SiFirebase,
} from 'react-icons/si'
import { FiCheckCircle } from 'react-icons/fi'

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS/Sass', icon: SiSass },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Git', icon: SiGit },
  { name: 'Vite', icon: SiVite },
  { name: 'Testes automatizados', icon: FiCheckCircle },
  { name: 'React Native/Expo', icon: SiExpo },
  { name: 'C#/.NET', icon: SiDotnet },
  { name: 'Java/Spring Boot', icon: SiSpringboot },
  { name: 'Firebase', icon: SiFirebase },
]

export default function SkillList() {
  return (
    <section
      id="especialidades"
      tabIndex={-1}
      aria-labelledby="skills-title"
      className="section-space page-shell"
    >
      <div className="sonnet-heading text-center reveal">
        <p>Tecnologias</p>
        <h2 id="skills-title">Skills</h2>
      </div>
      <ul className="skills-grid">
        {skills.map(({ name, icon: Icon }) => (
          <li className="skill-item reveal" key={name}>
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
