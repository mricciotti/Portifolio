import { FiArrowDown, FiArrowDownRight, FiArrowUpRight, FiCode, FiMapPin } from 'react-icons/fi'
import { SiReact, SiTypescript } from 'react-icons/si'
import SocialLinks from '../Interface/SocialLinks'

const ribbons = Array.from({ length: 38 }, (_, ring) => {
  const v = ring / 38 * Math.PI * 2
  return Array.from({ length: 161 }, (_, step) => {
    const u = step / 160 * Math.PI * 2
    const radius = 142 + 54 * Math.cos(v)
    const x = radius * Math.cos(u)
    const y = radius * Math.sin(u)
    const z = 54 * Math.sin(v)
    const tiltedY = y * 0.57 - z * 0.82
    const rotatedX = x * 0.86 - tiltedY * 0.51
    const rotatedY = x * 0.51 + tiltedY * 0.86
    return (step === 0 ? 'M' : 'L') + (250 + rotatedX).toFixed(2) + ',' + (250 + rotatedY).toFixed(2)
  }).join(' ')
})

export default function Hero() {
  return <section id="inicio" tabIndex={-1} aria-labelledby="hero-title" className="hero-section">
    <div className="page-shell relative">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> Disponível para novas oportunidades</div>
          <p className="eyebrow mt-8">OLÁ, EU SOU O MATHEUS <span aria-hidden="true" className="text-cyan">↗</span></p>
          <h1 id="hero-title" className="hero-title">Transformando<br />ideias em<br /><span className="gradient-text">experiências digitais.</span></h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">Desenvolvedor front-end. Crio interfaces que conectam pessoas, com atenção a cada detalhe.</p>
          <p className="mt-3 text-sm text-muted">Atualmente na <span className="font-medium text-ink">Editora Globo</span><span className="mx-3 text-line">/</span>Engenharia de Software na <span className="font-medium text-ink">FIAP</span></p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className="button button-primary">Explorar projetos <FiArrowDownRight aria-hidden="true" /></a>
            <a href="#contato" className="button button-outline">Falar comigo <FiArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <SocialLinks /><span className="h-5 w-px bg-line" aria-hidden="true" />
            <span className="flex items-center gap-2 text-xs text-muted"><FiMapPin aria-hidden="true" /> São Paulo · Remoto</span>
          </div>
        </div>
        <div className="orbit-scene" aria-hidden="true">
          <div className="orbit-grid" /><div className="orbit-halo" />
          <span className="orbit-coordinate coordinate-top">MR — UNIVERSO CRIATIVO</span>
          <span className="orbit-cross cross-one">+</span><span className="orbit-cross cross-two">+</span>
          <svg viewBox="0 0 500 500" className="orbit-art" fill="none">
            <defs><linearGradient id="orbit-gradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="currentColor" className="text-cyan" /><stop offset="0.48" stopColor="currentColor" className="text-violet" /><stop offset="1" stopColor="currentColor" className="text-magenta" /></linearGradient></defs>
            <g stroke="url(#orbit-gradient)" strokeWidth="0.9">{ribbons.map((path, index) => <path key={index} d={path} opacity={0.4 + index / 70} />)}</g>
            <ellipse cx="250" cy="250" rx="235" ry="95" transform="rotate(-30 250 250)" className="text-cyan" stroke="currentColor" strokeOpacity="0.22" strokeDasharray="3 8" />
          </svg>
          <div className="orbit-chip chip-react"><SiReact className="text-cyan text-xl" /><span>React</span><span className="chip-indicator" /></div>
          <div className="orbit-chip chip-typescript"><SiTypescript className="text-violet text-lg" /><span>TypeScript</span></div>
          <div className="orbit-chip chip-code"><FiCode className="text-cyan text-xl" /><span>Ideia. Código. Experiência.</span></div>
          <span className="orbit-coordinate coordinate-bottom">CRIATIVIDADE EM CONSTANTE MOVIMENTO</span>
        </div>
      </div>
      <div className="hero-bottom"><a href="#sobre" className="inline-flex min-h-11 items-center gap-3 hover:text-cyan"><FiArrowDown aria-hidden="true" /> Um pouco mais sobre mim</a><span className="hidden items-center gap-2 sm:flex"><span className="h-1 w-1 rounded-full bg-cyan" /> Código com propósito. Interfaces com cuidado.</span></div>
    </div>
  </section>
}
