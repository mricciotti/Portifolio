import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiSass, SiTailwindcss, SiGit, SiVite, SiExpo, SiDotnet, SiSpringboot, SiFirebase } from 'react-icons/si'
import { FiCheckCircle } from 'react-icons/fi'

const skills = [
  { name: 'React', icon: SiReact }, { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript }, { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 }, { name: 'Sass', icon: SiSass },
  { name: 'Tailwind CSS', icon: SiTailwindcss }, { name: 'Git', icon: SiGit },
  { name: 'Vite', icon: SiVite }, { name: 'Testes automatizados', icon: FiCheckCircle },
  { name: 'React Native / Expo', icon: SiExpo }, { name: 'C# / .NET', icon: SiDotnet },
  { name: 'Java / Spring Boot', icon: SiSpringboot }, { name: 'Firebase', icon: SiFirebase },
]

export default function SkillList() {
  return <section id="especialidades" tabIndex={-1} aria-labelledby="skills-title" className="section-space page-shell">
    <div className="section-heading reveal"><p className="eyebrow"><span>04 /</span> MINHA CAIXA DE FERRAMENTAS</p><h2 id="skills-title">Tecnologias que me acompanham<span className="text-violet">.</span></h2><p>Do dia a dia no front-end às experiências da minha formação.</p></div>
    <ul className="skills-grid reveal">{skills.map(({ name, icon: Icon }) => <li className="skill-item" key={name}><Icon aria-hidden="true" /><span>{name}</span></li>)}</ul>
    <p className="mt-6 flex items-center gap-2 text-xs text-muted"><span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Sempre aprendendo. Sempre construindo.</p>
  </section>
}
