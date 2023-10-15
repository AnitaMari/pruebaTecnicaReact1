// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'
test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // funciona con promesas. Recuperamos el texto que es un párrafo pero que va cambiando, y lo mismo con la imagen. No olvidar los await
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  console.log({ textContent, imageSrc })

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy() // para asegurarnos de que carga la img correcta
})
