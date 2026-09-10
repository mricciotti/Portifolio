import { Briefcase, GraduationCap } from "lucide-react"
import Reveal from "../UI/Reveal"

const TIMELINE = [
  {
    icon: Briefcase,
    title: "Estagiário de Front-end",
    place: "Editora Globo (Grupo Globo)",
    period: "Atual",
    description:
      "Desenvolvo componentes de interface reutilizáveis para um dos maiores portais de conteúdo do Brasil, com foco em performance e escala.",
    tags: ["React", "TypeScript", "Testes automatizados"],
  },
  {
    icon: GraduationCap,
    title: "Engenharia de Software",
    place: "FIAP",
    period: "Em andamento",
    description:
      "Projetos full-stack acadêmicos com back-end em Java e mobile em React Native, além de contato com C#/.NET e Firebase.",
    tags: ["Java", "React Native", "C#/.NET", "Firebase"],
  },
]

function Experiencia() {
  return (
    <section id="experiencia" className="section-shell">
      <Reveal>
        <p className="section-eyebrow text-center md:text-left">Trajetória</p>
        <h2 className="section-title mt-2 text-center md:text-left">
          Experiência
        </h2>
      </Reveal>

      <div className="relative mt-12 space-y-8 before:absolute before:bottom-0 before:left-6 before:top-2 before:w-px before:bg-gradient-to-b before:from-neon-cyan before:via-neon-purple before:to-transparent sm:before:left-8">
        {TIMELINE.map((item, index) => (
          <Reveal key={item.place} delay={index * 0.15}>
            <div className="relative flex gap-6 pl-16 sm:pl-20">
              <div className="glass-panel absolute left-0 flex h-12 w-12 items-center justify-center rounded-full text-neon-cyan sm:h-16 sm:w-16">
                <item.icon size={22} />
              </div>

              <div className="glass-panel flex-1 p-6 transition-shadow duration-300 hover:shadow-glow-cyan">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <span className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-xs font-medium text-neon-cyan">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-white/60">
                  {item.place}
                </p>
                <p className="mt-3 text-white/70">{item.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Experiencia
