import { FiCode } from 'react-icons/fi'
import { SiReact, SiTypescript } from 'react-icons/si'

const ribbons = Array.from({ length: 38 }, (_, ring) => {
  const v = (ring / 38) * Math.PI * 2
  return Array.from({ length: 161 }, (_, step) => {
    const u = (step / 160) * Math.PI * 2
    const radius = 142 + 54 * Math.cos(v)
    const x = radius * Math.cos(u)
    const y = radius * Math.sin(u)
    const z = 54 * Math.sin(v)
    const tiltedY = y * 0.57 - z * 0.82
    const rotatedX = x * 0.86 - tiltedY * 0.51
    const rotatedY = x * 0.51 + tiltedY * 0.86
    return (
      (step === 0 ? 'M' : 'L') +
      (250 + rotatedX).toFixed(2) +
      ',' +
      (250 + rotatedY).toFixed(2)
    )
  }).join(' ')
})

export default function OrbitArt() {
  return (
    <div className="orbit-scene" aria-hidden="true">
      <div className="orbit-grid" />
      <div className="orbit-halo" />
      <span className="orbit-coordinate coordinate-top">
        MR — UNIVERSO CRIATIVO
      </span>
      <span className="orbit-cross cross-one">+</span>
      <span className="orbit-cross cross-two">+</span>
      <svg viewBox="0 0 500 500" className="orbit-art" fill="none">
        <defs>
          <linearGradient id="orbit-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="currentColor" className="text-cyan" />
            <stop
              offset="0.48"
              stopColor="currentColor"
              className="text-violet"
            />
            <stop
              offset="1"
              stopColor="currentColor"
              className="text-magenta"
            />
          </linearGradient>
        </defs>
        <g stroke="url(#orbit-gradient)" strokeWidth="0.9">
          {ribbons.map((path, index) => (
            <path key={index} d={path} opacity={0.4 + index / 70} />
          ))}
        </g>
        <ellipse
          cx="250"
          cy="250"
          rx="235"
          ry="95"
          transform="rotate(-30 250 250)"
          className="text-cyan"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeDasharray="3 8"
        />
      </svg>
      <div className="orbit-chip chip-react">
        <SiReact className="text-cyan text-xl" />
        <span>React</span>
        <span className="chip-indicator" />
      </div>
      <div className="orbit-chip chip-typescript">
        <SiTypescript className="text-violet text-lg" />
        <span>TypeScript</span>
      </div>
      <div className="orbit-chip chip-code">
        <FiCode className="text-cyan text-xl" />
        <span>Ideia. Código. Experiência.</span>
      </div>
      <span className="orbit-coordinate coordinate-bottom">
        CRIATIVIDADE EM CONSTANTE MOVIMENTO
      </span>
    </div>
  )
}
