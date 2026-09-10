import { FiArrowUpRight, FiCode, FiLayers, FiZap } from 'react-icons/fi'
import MinhaFoto from '../../assets/minha-foto.webp'

export default function Sobre() {
  return <section id="sobre" tabIndex={-1} aria-labelledby="sobre-title" className="section-space page-shell">
    <div className="section-heading reveal"><p className="eyebrow"><span>01 /</span> SOBRE MIM</p><h2 id="sobre-title">Por trás do código<span className="text-cyan">.</span></h2></div>
    <div className="about-grid reveal">
      <div className="portrait-card"><img src={MinhaFoto} width="675" height="900" loading="lazy" decoding="async" alt="Matheus Ricciotti" /><div className="portrait-caption"><span className="status-dot" /><span>Matheus Ricciotti<span className="block text-xs font-normal text-muted">Desenvolvedor front-end</span></span><FiCode className="ml-auto text-cyan" aria-hidden="true" /></div></div>
      <div className="py-2">
        <h3 className="font-display text-2xl font-medium leading-snug md:text-3xl">Curioso por natureza.<br /><span className="text-muted">Desenvolvedor por escolha.</span></h3>
        <p className="mt-5 leading-relaxed text-muted">Sou Matheus, estudante de Engenharia de Software na FIAP e estagiário de front-end na Editora Globo. Gosto de transformar ideias em interfaces claras, úteis e agradáveis de usar.</p>
        <p className="mt-4 leading-relaxed text-muted">Minha formação também passa por projetos acadêmicos com aplicações web, sistemas de servidor e aplicativos móveis. Essa visão me ajuda a entender o produto além da tela.</p>
        <p className="mt-4 leading-relaxed text-muted">Busco uma oportunidade de estágio ou júnior em front-end, em São Paulo ou remoto, para contribuir, aprender com o time e construir experiências cada vez melhores.</p>
        <div className="mt-7 flex flex-wrap gap-3"><span className="tag"><FiLayers aria-hidden="true" /> Interfaces reutilizáveis</span><span className="tag"><FiZap aria-hidden="true" /> Atenção à performance</span></div>
        <a href="#contato" className="text-link mt-6">Vamos construir algo juntos <FiArrowUpRight aria-hidden="true" /></a>
      </div>
    </div>
  </section>
}
