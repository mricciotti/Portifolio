import Projeto2 from '../../assets/projeto2.webp'
import Projeto3 from '../../assets/projeto3.webp'
import Projeto5 from '../../assets/projeto5.webp'
import Projeto6 from '../../assets/projeto6.webp'

export const projects = [
  {
    id: 'formula-e',
    title: 'Fórmula E',
    category: 'Challenge · Projeto acadêmico',
    description:
      'Uma experiência web sobre o universo das corridas elétricas, com conteúdo sobre equipes, provas e a categoria.',
    image: Projeto2,
    width: 1200,
    height: 526,
    alt: 'Página do projeto Fórmula E com carros de corrida e apresentação da categoria',
    link: 'https://challenge-formula-e-phi.vercel.app/',
    tags: ['Interface web', 'Automobilismo'],
    number: '01',
  },
  {
    id: 'seavigilant',
    title: 'SeaVigilant',
    category: 'Global Solution · Projeto acadêmico',
    description:
      'Um site dedicado aos desafios dos oceanos e à economia azul, apresentando problemas ambientais e objetivos de preservação.',
    image: Projeto3,
    width: 1200,
    height: 818,
    alt: 'Página do SeaVigilant sobre preservação dos oceanos, com imagem de uma tartaruga marinha',
    link: 'https://global-solution-steel.vercel.app/',
    tags: ['Interface web', 'Sustentabilidade'],
    number: '02',
  },
  {
    id: 'vinhos',
    title: 'Catálogo de vinhos',
    category: 'CP2 · Projeto acadêmico',
    description:
      'Uma interface de catálogo para explorar vinhos, conhecer produtos e encontrar informações sobre combinações.',
    image: Projeto5,
    width: 1200,
    height: 605,
    alt: 'Página do catálogo de vinhos com apresentação dos produtos em cartões',
    link: 'https://cp2-front-end.vercel.app/',
    tags: ['Interface web', 'Catálogo'],
    number: '03',
  },
  {
    id: 'ecotrend',
    title: 'EcoTrend',
    category: 'Workshop · Projeto acadêmico',
    description:
      'Uma vitrine digital com navegação por categorias de roupas, beleza e produtos sustentáveis.',
    image: Projeto6,
    width: 1200,
    height: 564,
    alt: 'Página do EcoTrend com menu de categorias e banner de destaque',
    link: 'https://workshop-de-html-e-css.vercel.app/',
    tags: ['HTML', 'CSS'],
    number: '04',
  },
]
