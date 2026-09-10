import Reveal from "../UI/Reveal"

function SkillList({ skills }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <Reveal key={skill.name} delay={index * 0.04}>
          <div className="glass-panel flex items-center gap-3 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:shadow-glow-cyan">
            <skill.icon className="text-2xl text-neon-cyan" />
            <p className="font-display text-sm font-medium text-white/80">
              {skill.name}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default SkillList
