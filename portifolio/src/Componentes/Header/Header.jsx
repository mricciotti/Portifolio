import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import Brand from '../Interface/Brand'

const links = [
  ['inicio', 'Início'],
  ['sobre', 'Sobre'],
  ['experiencia', 'Experiência'],
  ['projetos', 'Projetos'],
  ['especialidades', 'Tecnologias'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const menuButton = useRef(null)
  const header = useRef(null)

  useEffect(() => {
    let frame
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const sections = [...document.querySelectorAll('main section[id]')]
        const current = sections
          .filter((section) => section.getBoundingClientRect().top <= 170)
          .at(-1)
        if (current) setActive(current.id)
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 5
        )
          setActive('contato')
      })
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    desktop.addEventListener('change', closeOnDesktop)
    update()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const dismiss = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    const outside = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', dismiss)
    document.addEventListener('pointerdown', outside)
    return () => {
      document.removeEventListener('keydown', dismiss)
      document.removeEventListener('pointerdown', outside)
    }
  }, [open])

  function navigate(event, id) {
    setOpen(false)
    setActive(id)
    if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      document.getElementById(id)?.focus({ preventScroll: true })
    }
  }

  return (
    <header
      ref={header}
      className="site-header"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
    >
      <div className="page-shell flex h-20 items-center justify-between gap-6">
        <a
          href="#inicio"
          aria-label="Matheus Ricciotti — início"
          onClick={(event) => navigate(event, 'inicio')}
        >
          <Brand />
        </a>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={'#' + id}
              className="nav-link"
              aria-current={active === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="button button-small button-outline hidden lg:inline-flex"
          aria-current={active === 'contato' ? 'location' : undefined}
        >
          Vamos conversar <FiArrowUpRight aria-hidden="true" />
        </a>
        <button
          ref={menuButton}
          className="icon-button lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={open ? 'menu-mobile' : undefined}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação móvel"
          className="mobile-menu lg:hidden"
        >
          {[...links, ['contato', 'Contato']].map(([id, label]) => (
            <a
              key={id}
              href={'#' + id}
              className="nav-link"
              aria-current={active === id ? 'location' : undefined}
              onClick={(event) => navigate(event, id)}
            >
              {label}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
