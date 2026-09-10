import {
  SiDotnet,
  SiExpo,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiReact,
  SiSass,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si"
import Projeto2 from "../../assets/projeto2.webp"
import Projeto3 from "../../assets/projeto3.webp"
import Projeto5 from "../../assets/projeto5.webp"
import Projeto6 from "../../assets/projeto6.webp"
import Hero from "../../Componentes/Hero/Hero"
import Sobre from "../../Componentes/Sobre/Sobre"
import Experiencia from "../../Componentes/Experiencia/Experiencia"
import ProjectList from "../../Componentes/Projetos/ProjectList"
import SkillList from "../../Componentes/Skills/SkillList"
import Contato from "../../Componentes/Contato/Contato"
import Reveal from "../../Componentes/UI/Reveal"

const projects = [
  {
    title: "Challenge Fórmula E",
    description: "Challenge acadêmico da FIAP com o tema Fórmula E.",
    image: Projeto2,
    link: "https://challenge-formula-e-phi.vercel.app/",
  },
  {
    title: "Global Solution — Steel",
    description: "Global Solution acadêmica da FIAP sobre a indústria do aço.",
    image: Projeto3,
    link: "https://global-solution-steel.vercel.app/",
  },
  {
    title: "CP2 — Front-end",
    description: "Checkpoint acadêmico da FIAP com foco em front-end.",
    image: Projeto5,
    link: "https://cp2-front-end.vercel.app/",
  },
  {
    title: "Workshop de HTML & CSS",
    description: "Projeto prático de fundamentos de HTML e CSS.",
    image: Projeto6,
    link: "https://workshop-de-html-e-css.vercel.app/",
  },
]

const skills = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS/Sass", icon: SiSass },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "Vite", icon: SiVite },
  { name: "Testes automatizados", icon: SiJest },
  { name: "React Native/Expo", icon: SiExpo },
  { name: "C#/.NET", icon: SiDotnet },
  { name: "Java/Spring Boot", icon: SiSpringboot },
  { name: "Firebase", icon: SiFirebase },
]

function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Experiencia />

      <section id="projetos" className="section-shell">
        <Reveal>
          <p className="section-eyebrow text-center">Portfólio</p>
          <h2 className="section-title mt-2 text-center">Projetos</h2>
        </Reveal>
        <div className="mt-12">
          <ProjectList projects={projects} />
        </div>
      </section>

      <section id="skills" className="section-shell">
        <Reveal>
          <p className="section-eyebrow text-center">Stack</p>
          <h2 className="section-title mt-2 text-center">Skills</h2>
        </Reveal>
        <div className="mt-12">
          <SkillList skills={skills} />
        </div>
      </section>

      <Contato />
    </main>
  )
}

export default Home
