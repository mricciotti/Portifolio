# Guia de desenvolvimento

Documentação técnica do [portfólio de Matheus Ricciotti](../README.md). A aplicação usa React 18 e JavaScript, com Vite e Tailwind CSS.

**[Acessar o portfólio na Vercel](https://portifolio-xi-mocha-84.vercel.app/)**

Todos os comandos abaixo devem ser executados nesta pasta, `portifolio/`.

## Preparar o ambiente

O projeto foi validado com Node.js 22 e npm. Instale as dependências a partir do arquivo de lock:

```sh
npm ci
npm run dev
```

O endereço local será exibido no terminal. Para escolher uma porta:

```sh
npm run dev -- --port 5174
```

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera os arquivos de produção em `dist/`. |
| `npm run preview` | Serve a compilação de produção localmente. |
| `npm run lint` | Analisa o código com ESLint. |
| `npm run test:e2e` | Executa os testes de navegador. |
| `npm run social-image` | Gera a imagem de compartilhamento. |

## Organização do código

```text
src/
├── Componentes/
│   ├── Header/
│   ├── Hero/
│   ├── Sobre/
│   ├── Experiencia/
│   ├── Projetos/
│   ├── Skills/
│   ├── Contato/
│   ├── Footer/
│   └── Interface/
├── Pages/Home/
├── assets/
├── App.jsx
├── index.css
└── main.jsx
public/
├── fonts/
├── favicon.svg
└── og-image.png
scripts/
tests/
```

`Pages/Home` organiza as seções da página. `Interface` reúne elementos compartilhados, como a marca, os links sociais e a animação orbital.

## Atualizar conteúdo e estilos

| Conteúdo | Arquivo |
| --- | --- |
| Apresentação e foto | [Hero.jsx](./src/Componentes/Hero/Hero.jsx) |
| Biografia | [Sobre.jsx](./src/Componentes/Sobre/Sobre.jsx) |
| Experiência e formação | [Experiencia.jsx](./src/Componentes/Experiencia/Experiencia.jsx) |
| Projetos, links e dimensões das imagens | [projects.js](./src/Componentes/Projetos/projects.js) |
| Tecnologias apresentadas | [SkillList.jsx](./src/Componentes/Skills/SkillList.jsx) |
| Formulário e e-mail de contato | [Contato.jsx](./src/Componentes/Contato/Contato.jsx) |
| Redes sociais | [SocialLinks.jsx](./src/Componentes/Interface/SocialLinks.jsx) |
| Paleta, fontes e tokens visuais | [tailwind.config.js](./tailwind.config.js) |
| Estilos e animações | [index.css](./src/index.css) |
| Título, descrição e prévia de compartilhamento | [index.html](./index.html) |

Mantenha os identificadores das seções alinhados aos links do menu. Ao substituir imagens de projetos, atualize também o texto alternativo e as dimensões em `projects.js`.

As fontes ficam em `public/fonts/`, junto às respectivas licenças. A foto e as capturas dos projetos usam WebP; os arquivos originais estão em `src/assets/`.

## Formulário de contato

O formulário valida os campos e prepara um link `mailto:` com assunto e mensagem. O envio é concluído pela pessoa no aplicativo de e-mail.

Esse fluxo não utiliza backend nem serviço externo de envio e não requer variáveis de ambiente. A opção de copiar o endereço permite iniciar a conversa por outro aplicativo.

## Testes e qualidade

Instale o Chromium usado pelo Playwright e gere o build antes de executar os testes:

```sh
npx playwright install chromium
npm run lint
npm run build
npm run test:e2e
```

A suíte inicia automaticamente um servidor de preview na porta **4173**, que precisa estar livre. A configuração fica em [playwright.config.js](./playwright.config.js).

Os testes cobrem desktop e celular, incluindo:

- Presença e organização das seções, carregamento de imagens e apresentação dos projetos.
- Navegação por âncoras, seção ativa, menu móvel e foco por teclado.
- Formulário, codificação de caracteres na mensagem e cópia do e-mail.
- Preferência por movimento reduzido e verificações automáticas de acessibilidade com axe-core.
- Layout em diferentes larguras de tela.

Capturas e rastros de falhas ficam em `test-results/`, ignorada pelo Git. A análise automática de acessibilidade complementa a revisão manual e não representa uma certificação de conformidade.

## Imagem de compartilhamento

Para recriar `public/og-image.png`:

```sh
npx playwright install chromium
npm run social-image
```

A imagem tem 1200 × 630 pixels. Ao mudar o domínio público, atualize o endereço absoluto de `og:image` em `index.html`.

## Publicação na Vercel

Configure o projeto com:

| Configuração | Valor |
| --- | --- |
| Root Directory | `portifolio` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

A aplicação é publicada como arquivos estáticos e não exige variáveis de ambiente.

## Manutenção

Para consultar atualizações e alertas das dependências:

```sh
npm outdated
npm audit
```

Revise a compatibilidade antes de atualizar versões principais e execute novamente o lint, o build e os testes após mudanças nas dependências.
