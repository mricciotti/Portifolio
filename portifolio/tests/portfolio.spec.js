import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('conteúdo, imagens e projetos preservados', async ({ page }) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page).toHaveTitle('Matheus Ricciotti — Desenvolvedor Front-end')
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR')
  await expect(page.locator('h1')).toHaveCount(1)
  await expect(
    page.locator('#inicio img[alt="Matheus Ricciotti"]'),
  ).toHaveAttribute('fetchpriority', 'high')
  await expect(page.locator('#inicio .orbit-art')).toHaveCount(0)
  await expect(page.locator('#sobre .orbit-art')).toHaveCount(1)
  await expect(page.locator('#sobre img')).toHaveCount(0)
  await expect(page.locator('#experiencia h3')).toHaveText([
    'Editora Globo (Grupo Globo)',
    'FIAP',
  ])
  await expect(page.locator('.sonnet-category')).toHaveText([
    'Experiência',
    'Formação',
  ])
  for (const section of await page.locator('main section').all()) {
    await section.scrollIntoViewIfNeeded()
  }
  await expect(page.locator('.project-card')).toHaveCount(4)
  await expect(page.locator('.skills-grid li')).toHaveCount(13)
  for (const img of await page.locator('img').all()) {
    await expect
      .poll(() =>
        img.evaluate((element) => element.complete && element.naturalWidth > 0),
      )
      .toBeTruthy()
  }
  for (const anchor of await page.locator('a[href^="#"]').all()) {
    const target = await anchor.getAttribute('href')
    await expect(page.locator(target)).toHaveCount(1)
  }
  expect(errors).toEqual([])
})

test('projetos mostram imagens inteiras e detalhes por toque ou foco', async ({
  page,
  isMobile,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#projetos')
  for (const card of await page.locator('.project-card').all()) {
    const link = card.locator('a')
    const description = card.locator('.project-description')
    await card.scrollIntoViewIfNeeded()
    await expect(card.locator('img')).toHaveCSS('object-fit', 'contain')
    await expect(card.locator('.project-cta')).toBeVisible()
    if (!isMobile) await link.focus()
    await expect(description).toHaveCSS('opacity', '1')
    expect(
      await description.evaluate(
        (element) => element.scrollHeight <= element.clientHeight + 1,
      ),
    ).toBeTruthy()
    await expect(link).toHaveAttribute('target', '_blank')
  }
})

test('âncoras, item ativo e menu móvel', async ({ page, isMobile }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  if (isMobile) {
    const button = page.getByRole('button', { name: /Abrir menu|Fechar menu/ })
    await button.click()
    await expect(button).toHaveAttribute('aria-expanded', 'true')
    await page.keyboard.press('Escape')
    await expect(button).toBeFocused()
    await expect(button).toHaveAttribute('aria-expanded', 'false')
    await button.click()
    await page
      .getByRole('navigation', { name: 'Navegação móvel' })
      .getByRole('link', { name: 'Projetos' })
      .click()
    await expect(button).toHaveAttribute('aria-expanded', 'false')
    await expect(page.locator('#projetos')).toBeFocused()
  } else {
    await page
      .getByRole('navigation', { name: 'Navegação principal' })
      .getByRole('link', { name: 'Projetos' })
      .click()
  }
  await expect(page).toHaveURL(/#projetos$/)
  await expect
    .poll(() =>
      page
        .locator('#projetos')
        .evaluate((element) => Math.round(element.getBoundingClientRect().top)),
    )
    .toBeGreaterThanOrEqual(80)
  await expect
    .poll(() =>
      page
        .locator('#projetos')
        .evaluate((element) => Math.round(element.getBoundingClientRect().top)),
    )
    .toBeLessThanOrEqual(130)
  if (isMobile) await page.getByRole('button', { name: 'Abrir menu' }).click()
  await expect
    .poll(() =>
      page
        .locator('#projetos')
        .evaluate((element) => Math.round(element.getBoundingClientRect().top)),
    )
    .toBeLessThanOrEqual(130)
  await expect(
    page
      .getByRole('navigation', {
        name: isMobile ? 'Navegação móvel' : 'Navegação principal',
      })
      .getByRole('link', { name: 'Projetos' }),
  ).toHaveAttribute('aria-current', 'location')
  if (isMobile) {
    await page.setViewportSize({ width: 740, height: 360 })
    await page
      .getByRole('navigation', { name: 'Navegação móvel' })
      .getByRole('link', { name: 'Contato' })
      .click()
    await expect(page).toHaveURL(/#contato$/)
    await expect(
      page.getByRole('button', { name: 'Abrir menu' }),
    ).toHaveAttribute('aria-expanded', 'false')
  }
})

test('formulário valida e prepara e-mail com caracteres especiais', async ({
  page,
  context,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#contato')
  const submit = page.getByRole('button', { name: 'Preparar e-mail' })
  await submit.click()
  await expect(page.locator('#contact-name')).toBeFocused()
  await page.getByLabel('Seu nome').fill('João & Ana')
  await page.getByLabel('Seu e-mail').fill('recrutamento@example.com')
  await page
    .getByLabel('Sua mensagem')
    .fill('Olá! React & TypeScript?\nVamos conversar #oportunidade')
  const session = await context.newCDPSession(page)
  await session.send('Page.enable')
  const navigation = new Promise((resolve) =>
    session.on('Page.frameRequestedNavigation', (event) => {
      if (event.url.startsWith('mailto:')) resolve(event.url)
    }),
  )
  await submit.click()
  const uri = new URL(await navigation)
  expect(uri.pathname).toBe('matheus.ricciotti@gmail.com')
  expect(uri.searchParams.get('subject')).toBe(
    'Contato pelo portfólio — João & Ana',
  )
  expect(uri.searchParams.get('body')).toContain(
    'Olá! React & TypeScript?\nVamos conversar #oportunidade',
  )
  expect(uri.searchParams.get('body')).toContain('recrutamento@example.com')
  await expect(page.getByRole('status')).toContainText('conclua o envio por lá')
})

test('copiar e-mail fornece confirmação e alternativa em caso de falha', async ({
  page,
}) => {
  await page.goto('/#contato')
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (text) => {
          window.copiedEmail = text
        },
      },
    })
  })
  await page.getByRole('button', { name: 'Copiar endereço de e-mail' }).click()
  expect(await page.evaluate(() => window.copiedEmail)).toBe(
    'matheus.ricciotti@gmail.com',
  )
  await expect(page.getByRole('status')).toHaveText('E-mail copiado.')
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error('Indisponível')
        },
      },
    })
  })
  await page.getByRole('button', { name: 'Copiar endereço de e-mail' }).click()
  await expect(page.getByRole('status')).toContainText('copie manualmente')
})

test('acessibilidade e movimento reduzido', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('link', { name: 'Pular para o conteúdo' }),
  ).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  expect(
    await page
      .locator('.orbit-art')
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe('none')
  expect(
    await page
      .locator('html')
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe('auto')
  const audit = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze()
  expect(audit.violations).toEqual([])
})

test('layout sem transbordamento e captura visual', async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBeTruthy()
  }
  await page.setViewportSize(
    testInfo.project.name === 'mobile'
      ? { width: 390, height: 844 }
      : { width: 1440, height: 1000 },
  )
  for (const img of await page.locator('img').all()) {
    await img.scrollIntoViewIfNeeded()
    await expect
      .poll(() =>
        img.evaluate((element) => element.complete && element.naturalWidth > 0),
      )
      .toBeTruthy()
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({ path: testInfo.outputPath('inicio.png') })
  await page.screenshot({
    path: testInfo.outputPath('portfolio.png'),
    fullPage: true,
  })
})
