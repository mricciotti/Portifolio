import { useEffect } from 'react'
import Hero from '../../Componentes/Hero/Hero'
import Sobre from '../../Componentes/Sobre/Sobre'
import Experiencia from '../../Componentes/Experiencia/Experiencia'
import ProjectList from '../../Componentes/Projetos/ProjectList'
import SkillList from '../../Componentes/Skills/SkillList'
import Contato from '../../Componentes/Contato/Contato'

export default function Home() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!('IntersectionObserver' in window)) return
    const items = [...document.querySelectorAll('.reveal')]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    const setup = () => {
      observer.disconnect()
      items.forEach((item) => {
        item.classList.remove('reveal-pending')
        if (
          !preference.matches &&
          item.getBoundingClientRect().top > window.innerHeight
        ) {
          item.classList.add('reveal-pending')
          observer.observe(item)
        }
      })
    }
    const revealFocused = (event) => {
      event.target.closest('.reveal')?.classList.remove('reveal-pending')
    }
    setup()
    preference.addEventListener('change', setup)
    document.addEventListener('focusin', revealFocused)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', setup)
      document.removeEventListener('focusin', revealFocused)
      items.forEach((item) => item.classList.remove('reveal-pending'))
    }
  }, [])

  return (
    <main id="conteudo" tabIndex={-1}>
      <Hero />
      <Sobre />
      <Experiencia />
      <ProjectList />
      <SkillList />
      <Contato />
    </main>
  )
}
