import Lenis from "lenis"

let lenisInstance = null

export function initSmoothScroll() {
  if (lenisInstance || typeof window === "undefined") return () => {}

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

  if (prefersReducedMotion) return () => {}

  lenisInstance = new Lenis({
    duration: 1.1,
    smoothWheel: true,
  })

  let rafId
  const raf = (time) => {
    lenisInstance?.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  return () => {
    cancelAnimationFrame(rafId)
    lenisInstance?.destroy()
    lenisInstance = null
  }
}

export function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -80 })
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}
