import {
  FiArrowDown,
  FiArrowDownRight,
  FiArrowUpRight,
  FiCode,
  FiDownload,
  FiMapPin,
} from 'react-icons/fi'
import MinhaFoto from '../../assets/minha-foto.webp'
import Curriculo from '../../assets/Currículo.pdf'
import SocialLinks from '../Interface/SocialLinks'

export default function Hero() {
  return (
    <section
      id="inicio"
      tabIndex={-1}
      aria-labelledby="hero-title"
      className="hero-section"
    >
      <div className="page-shell relative">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" /> Disponível para novas
              oportunidades
            </div>
            <p className="eyebrow mt-8">
              OLÁ, EU SOU O MATHEUS{' '}
              <span aria-hidden="true" className="text-cyan">
                ↗
              </span>
            </p>
            <h1 id="hero-title" className="hero-title">
              Transformando
              <br />
              ideias em
              <br />
              <span className="gradient-text">experiências digitais.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Desenvolvedor front-end. Crio interfaces que conectam pessoas, com
              atenção a cada detalhe.
            </p>
            <p className="mt-3 text-sm text-muted">
              Atualmente na{' '}
              <span className="font-medium text-ink">Editora Globo</span>
              <span className="mx-3 text-line">/</span>Engenharia de Software na{' '}
              <span className="font-medium text-ink">FIAP</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="button button-primary">
                Explorar projetos <FiArrowDownRight aria-hidden="true" />
              </a>
              <a
                href={Curriculo}
                download="Curriculo-Matheus-Ricciotti.pdf"
                className="button button-outline"
              >
                Baixar currículo <FiDownload aria-hidden="true" />
              </a>
              <a href="#contato" className="button button-outline">
                Falar comigo <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <SocialLinks />
              <span className="h-5 w-px bg-line" aria-hidden="true" />
              <span className="flex items-center gap-2 text-xs text-muted">
                <FiMapPin aria-hidden="true" /> São Paulo · Remoto
              </span>
            </div>
          </div>
          <div className="hero-portrait-stage">
            <div className="hero-portrait-halo" aria-hidden="true" />
            <div className="portrait-card hero-portrait">
              <img
                src={MinhaFoto}
                width="675"
                height="900"
                fetchPriority="high"
                decoding="async"
                alt="Matheus Ricciotti"
              />
              <div className="portrait-caption">
                <span className="status-dot" />
                <span>
                  Matheus Ricciotti
                  <span className="block text-xs font-normal text-muted">
                    Desenvolvedor front-end
                  </span>
                </span>
                <FiCode className="ml-auto text-cyan" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <a
            href="#sobre"
            className="inline-flex min-h-11 items-center gap-3 hover:text-cyan"
          >
            <FiArrowDown aria-hidden="true" /> Um pouco mais sobre mim
          </a>
          <span className="hidden items-center gap-2 sm:flex">
            <span className="h-1 w-1 rounded-full bg-cyan" /> Código com
            propósito. Interfaces com cuidado.
          </span>
        </div>
      </div>
    </section>
  )
}
