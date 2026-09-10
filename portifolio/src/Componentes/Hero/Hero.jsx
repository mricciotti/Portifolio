import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, Download, MessageCircle } from "lucide-react"
import MinhaFoto from "../../assets/minha-foto.webp"
import { scrollToSection } from "../../lib/smoothScroll"

const NAME = "Matheus Ricciotti"

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" },
    }),
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-aurora-gradient" />
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />

      <div className="section-shell relative grid items-center gap-12 py-12 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <div className="text-center md:text-left">
          <motion.span
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
            </span>
            Aberto a oportunidades em São Paulo ou remoto
          </motion.span>

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block text-white/70">Olá, eu sou</span>
            <span className="block overflow-hidden">
              {NAME.split(" ").map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  initial={shouldReduceMotion ? undefined : "hidden"}
                  animate={shouldReduceMotion ? undefined : "visible"}
                  variants={wordVariants}
                  className="gradient-text mr-3 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl font-display text-lg font-medium text-white/90 md:mx-0">
            Desenvolvedor Front-end · React & TypeScript
          </p>
          <p className="mx-auto mt-3 max-w-xl text-white/60 md:mx-0">
            Construo interfaces rápidas e acessíveis para produtos de grande
            escala, com um pé no back-end e no mobile também.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <button
              type="button"
              onClick={() => scrollToSection("projetos")}
              className="btn-primary"
            >
              Ver projetos
              <ArrowDown size={16} />
            </button>
            <a href="/curriculo.pdf" download className="btn-secondary">
              Baixar currículo
              <Download size={16} />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("contato")}
              className="btn-secondary"
            >
              Falar comigo
              <MessageCircle size={16} />
            </button>
          </div>
        </div>

        <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 md:h-96 md:w-96">
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta opacity-40 blur-3xl animate-pulse-glow" />
          <div className="glass-panel relative h-full w-full animate-float overflow-hidden rounded-full p-2">
            <img
              src={MinhaFoto}
              alt="Foto de Matheus Ricciotti"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("sobre")}
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-float text-white/40 transition-colors hover:text-neon-cyan sm:block"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}

export default Hero
