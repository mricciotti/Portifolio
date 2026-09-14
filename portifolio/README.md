# Portfólio — Astra + Sonnet

Combinação solicitada na branch `new`, com React 18, JavaScript, Vite, Tailwind CSS, React Router e React Icons.

## Executar

```powershell
cd C:\Users\mathe\Documents\GitHub\Portifolio\portifolio
npm ci
npm run dev -- --host 127.0.0.1 --port 5174
```

Abra http://localhost:5174.

## Seções

- **Header, contato e footer:** Astra, mantendo navegação fixa, item ativo, menu móvel com estado do React e links reais.
- **Início:** texto e botões do Astra, com a foto pessoal na coluna visual. A imagem usa prioridade alta de carregamento.
- **Sobre:** texto do Astra com a animação orbital no lugar da foto. O SVG foi extraído para `src/Componentes/Interface/OrbitArt.jsx`.
- **Experiência:** linha do tempo do Sonnet, com ícones externos aos cartões. Editora Globo e FIAP aparecem acima do cargo e do curso. As etiquetas são “Experiência” e “Formação”.
- **Projetos:** cartões visuais do Sonnet. As capturas mantêm a proporção original, sem recortar as laterais. A descrição aparece em hover/foco no desktop e fica disponível diretamente em dispositivos de toque. O link “Ver projeto” fica sempre visível.
- **Skills:** lista única de cartões do Sonnet, centralizada e adaptável à largura disponível.
- **Estilos:** fundo grafite e tokens de base do Astra. Cores e tipografia são definidas em `tailwind.config.js`; as fontes são locais.

A integração usa os recursos de animação CSS e de rolagem do Astra, sem adicionar dependências de animação.

## Conteúdo e contato

Os quatro projetos e seus destinos foram preservados:

| Projeto | Destino |
| --- | --- |
| Fórmula E | https://challenge-formula-e-phi.vercel.app/ |
| SeaVigilant | https://global-solution-steel.vercel.app/ |
| Catálogo de vinhos | https://cp2-front-end.vercel.app/ |
| EcoTrend | https://workshop-de-html-e-css.vercel.app/ |

Os dados ficam em `src/Componentes/Projetos/projects.js`. SeaVigilant usa a descrição de preservação dos oceanos correspondente à captura, corrigindo a descrição sobre aço encontrada na versão Sonnet.

O formulário prepara um e-mail para **matheus.ricciotti@gmail.com** usando `mailto:`. A pessoa revisa e conclui o envio no aplicativo de e-mail. GitHub, LinkedIn e Instagram foram mantidos.

## Verificação

```sh
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

Os testes usam a compilação em `dist` e iniciam um preview na porta 4173, que deve estar livre. A suíte cobre desktop e celular: composição das seções, imagens, detalhes dos projetos por foco/toque, menu em retrato e paisagem, âncoras, formulário e caracteres especiais, cópia de e-mail, teclado, movimento reduzido, análise automática WCAG A/AA e larguras entre 320 e 1440 pixels.

Capturas de tela e rastros de falhas ficam em `test-results`, ignorada pelo Git. A análise automática de acessibilidade não substitui uma revisão com leitores de tela.

## Publicação

Na Vercel, use `portifolio` como Root Directory, `npm run build` como comando e `dist` como saída. Não são necessárias variáveis de ambiente.

`index.html` mantém os metadados básicos e a imagem social do Astra. Atualize o endereço absoluto de `og:image` se o domínio público mudar.

## Dependências herdadas

A instalação mantém quatro entradas de auditoria já presentes na base Astra: Vite (alta), esbuild e React Router/React Router DOM (moderadas). A integração visual não migra suas versões principais. O servidor local fica restrito a `127.0.0.1`; a publicação usa os arquivos estáticos de `dist`.
