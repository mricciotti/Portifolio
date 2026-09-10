import { useState } from "react"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { Send } from "lucide-react"
import Reveal from "../UI/Reveal"

const CONTACT_EMAIL = "matheus.ricciotti@gmail.com"

const SOCIAL_LINKS = [
  { label: "E-mail", href: `mailto:${CONTACT_EMAIL}`, icon: HiOutlineMail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/matheus-ricciotti-55a087302/", icon: BsLinkedin },
  { label: "GitHub", href: "https://github.com/mricciotti", icon: BsGithub },
  { label: "Instagram", href: "https://www.instagram.com/mat_ricciotti/", icon: BsInstagram },
]

const INITIAL_FORM = { name: "", email: "", message: "" }

function Contato() {
  const [form, setForm] = useState(INITIAL_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Contato pelo portfólio — ${form.name}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <section id="contato" className="section-shell">
      <Reveal>
        <p className="section-eyebrow text-center">Contato</p>
        <h2 className="section-title mt-2 text-center">Vamos conversar?</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-white/60">
          Me manda uma mensagem — o botão abaixo abre seu cliente de e-mail
          com tudo preenchido.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass-panel mx-auto mt-10 max-w-2xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-neon-cyan/50"
            />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Seu e-mail"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-neon-cyan/50"
            />
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Sua mensagem"
              rows={5}
              className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-neon-cyan/50"
            />
            <button type="submit" className="btn-primary mt-2 self-center">
              Enviar mensagem
              <Send size={16} />
            </button>
          </form>

          <div className="mt-8 flex justify-center gap-4 border-t border-white/10 pt-6">
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
      </Reveal>
    </section>
  )
}

export default Contato
