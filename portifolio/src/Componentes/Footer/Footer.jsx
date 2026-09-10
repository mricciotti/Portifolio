import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { ArrowUp } from "lucide-react"
import { scrollToSection } from "../../lib/smoothScroll"

const CONTACT_EMAIL = "matheus.ricciotti@gmail.com"

const SOCIAL_LINKS = [
  { label: "E-mail", href: `mailto:${CONTACT_EMAIL}`, icon: HiOutlineMail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/matheus-ricciotti-55a087302/", icon: BsLinkedin },
  { label: "GitHub", href: "https://github.com/mricciotti", icon: BsGithub },
  { label: "Instagram", href: "https://www.instagram.com/mat_ricciotti/", icon: BsInstagram },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:px-8">
        <span className="font-display text-lg font-bold text-white">
          <span className="gradient-text">MR</span>
          <span className="text-white/50">.dev</span>
        </span>

        <div className="flex gap-4">
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

        <div className="flex flex-col items-center gap-3 text-center text-sm text-white/40">
          <p>
            © {year} Matheus Ricciotti ·{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-neon-cyan">
              {CONTACT_EMAIL}
            </a>
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="inline-flex items-center gap-1 text-white/40 transition-colors hover:text-neon-cyan"
          >
            Voltar ao topo
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
