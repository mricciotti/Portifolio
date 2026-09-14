import { chromium } from '@playwright/test'
import { readFile } from 'node:fs/promises'
import config from '../tailwind.config.js'

const colors = config.theme.extend.colors
const font = (
  await readFile(
    new URL('../public/fonts/space-grotesk-latin.woff2', import.meta.url),
  )
).toString('base64')
const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
})
await page.setContent(`<html lang="pt-BR"><style>
@font-face{font-family:Space;src:url(data:font/woff2;base64,${font})}
*{box-sizing:border-box}body{margin:0;background:${colors.canvas};color:${colors.ink};font-family:Space,sans-serif}
main{width:1200px;height:630px;padding:65px 76px;background:radial-gradient(ellipse at 95% 15%,${colors.violet}22,transparent 60%);border-bottom:5px solid ${colors.cyan}}
.brand{font-size:26px;letter-spacing:-1px}.brand b{color:${colors.cyan}}.label{margin-top:68px;font-size:18px;color:${colors.cyan};letter-spacing:4px}h1{font-weight:500;letter-spacing:-5px;font-size:78px;line-height:1.1;margin:22px 0}
h1 span{color:${colors.violet}}p{font-size:23px;color:${colors.muted}}footer{margin-top:55px;display:flex;justify-content:space-between;font-size:17px;color:${colors.muted}}
</style><main><div class="brand">matheus ricciotti<b>.</b></div><div class="label">DESENVOLVEDOR FRONT-END</div><h1>Interfaces com cuidado.<br><span>Código com propósito.</span></h1><p>Transformando ideias em experiências digitais.</p><footer><span>Editora Globo · FIAP</span><span>São Paulo · Remoto ↗</span></footer></main></html>`)
await page.evaluate(() => document.fonts.ready)
await page.screenshot({
  path: new URL('../public/og-image.png', import.meta.url).pathname.replace(
    /^\/(?=[A-Za-z]:)/,
    '',
  ),
})
await browser.close()
