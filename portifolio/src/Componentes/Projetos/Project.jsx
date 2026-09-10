import { ExternalLink } from "lucide-react"

function Project({ title, description, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group glass-panel relative block aspect-[4/3] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-purple focus-visible:-translate-y-1 focus-visible:shadow-glow-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/60 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 group-focus-visible:max-h-20 group-focus-visible:opacity-100">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-neon-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          Ver projeto
          <ExternalLink size={14} />
        </span>
      </div>
    </a>
  )
}

export default Project
