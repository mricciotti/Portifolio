import { FiArrowUp } from 'react-icons/fi'
import Brand from '../Interface/Brand'

export default function Footer() {
  return (
    <footer className="page-shell">
      <div className="footer-inner">
        <a href="#inicio" aria-label="Matheus Ricciotti — início">
          <Brand />
        </a>
        <p className="text-center text-xs leading-6 text-muted">
          © {new Date().getFullYear()} Matheus Ricciotti.
          <br />
          Feito com cuidado, café e React.
        </p>
        <a href="#inicio" className="text-link text-xs">
          Voltar ao topo <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
