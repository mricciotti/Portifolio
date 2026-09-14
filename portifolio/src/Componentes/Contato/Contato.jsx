import { useState } from 'react'
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import SocialLinks from '../Interface/SocialLinks'

const email = 'matheus.ricciotti@gmail.com'

export default function Contato() {
  const [status, setStatus] = useState('')
  const [copied, setCopied] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name').trim()
    const sender = data.get('email').trim()
    const message = data.get('message').trim()
    if (!name || !message) {
      setStatus('Preencha seu nome e sua mensagem antes de continuar.')
      return
    }
    const subject = 'Contato pelo portfólio — ' + name
    const body =
      'Olá, Matheus!\n\n' +
      message +
      '\n\n' +
      name +
      '\nE-mail para retorno: ' +
      sender
    window.location.href =
      'mailto:' +
      email +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body)
    setStatus(
      'Seu aplicativo de e-mail foi solicitado. Revise a mensagem e conclua o envio por lá. Se ele não abrir, copie o endereço ao lado.',
    )
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setStatus('E-mail copiado.')
    } catch {
      setStatus(
        'Não foi possível copiar automaticamente. Selecione o endereço de e-mail e copie manualmente.',
      )
    }
  }

  return (
    <section
      id="contato"
      tabIndex={-1}
      aria-labelledby="contato-title"
      className="section-space page-shell"
    >
      <div className="contact-panel reveal">
        <div>
          <p className="eyebrow">
            <span>05 /</span> VAMOS CONVERSAR
          </p>
          <h2 id="contato-title" className="contact-title">
            Uma boa conversa.
            <br />
            <span className="gradient-text">Um novo começo.</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Tem uma oportunidade, uma ideia ou quer conhecer melhor meu
            trabalho? Vou gostar de conversar com você.
          </p>
          <div className="availability mt-6">
            <span className="status-dot" /> Aberto a vagas de estágio e júnior
          </div>
          <div className="contact-email">
            <FiMail className="shrink-0 text-cyan" aria-hidden="true" />
            <a
              href={'mailto:' + email}
              className="min-w-0 break-all hover:text-cyan"
            >
              {email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="icon-button shrink-0"
              aria-label="Copiar endereço de e-mail"
            >
              {copied ? <FiCheck /> : <FiCopy />}
            </button>
          </div>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted">
            <FiMapPin aria-hidden="true" /> São Paulo, Brasil · Disponível para
            remoto
          </p>
          <div className="mt-7">
            <SocialLinks />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="contact-name">Seu nome</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Como posso te chamar?"
              required
              maxLength={100}
            />
          </div>
          <div>
            <label htmlFor="contact-email">Seu e-mail</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="voce@empresa.com"
              required
              maxLength={254}
            />
          </div>
          <div>
            <label htmlFor="contact-message">Sua mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Me conte um pouco sobre o que você tem em mente..."
              required
              maxLength={3000}
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="button button-primary w-full justify-between"
          >
            Preparar e-mail <FiArrowUpRight aria-hidden="true" />
          </button>
          <p className="text-xs leading-relaxed text-muted">
            O formulário abre seu aplicativo de e-mail com a mensagem
            preenchida. O envio é concluído por você no aplicativo.
          </p>
          <p
            role="status"
            aria-live="polite"
            className="text-sm leading-relaxed text-cyan"
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  )
}
