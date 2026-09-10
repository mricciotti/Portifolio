import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import Reveal from "../UI/Reveal"

const SOCIAL_LINKS = [
  { label: "E-mail", href: "mailto:matheus.ricciotti@gmail.com", icon: HiOutlineMail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/matheus-ricciotti-55a087302/", icon: BsLinkedin },
  { label: "GitHub", href: "https://github.com/mricciotti", icon: BsGithub },
  { label: "Instagram", href: "https://www.instagram.com/mat_ricciotti/", icon: BsInstagram },
]

function Sobre() {
  return (
    <section id="sobre" className="section-shell">
      <Reveal>
        <p className="section-eyebrow text-center md:text-left">Sobre mim</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass-panel mt-6 p-8 md:p-12">
          <div className="mx-auto max-w-3xl space-y-5 text-center md:text-left">
            <p className="text-lg text-white/80">
              Gosto de construir interfaces que unem boa experiência de uso
              com código bem estruturado — é essa mistura entre design e
              engenharia que me trouxe para o front-end.
            </p>
            <p className="text-white/60">
              Hoje divido meu tempo entre o trabalho, a faculdade e projetos
              pessoais, sempre testando ferramentas novas. Estou em busca de
              novas oportunidades como desenvolvedor front-end, estágio ou
              júnior, em São Paulo ou remoto — gosto de desafios que me tirem
              da zona de conforto.
            </p>

            <div className="flex justify-center gap-4 pt-2 md:justify-start">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="social-btn"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Sobre
