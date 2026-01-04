import { test, expect } from '@playwright/test';

test('app loads and displays welcome message', async ({ page }) => {
  await page.goto('/');
  
  //_ Verificamos que el título se cargue (localizado)
  //? Depende del idioma por defecto del sistema simulado, pero buscamos "OpenCL" que es común
  const title = page.getByRole('heading', { name: /OpenCL/i });
  await expect(title).toBeVisible();
});

test('responsive layout check', async ({ page }) => {
    await page.goto('/');
    //_ Verificamos que el input existe
    const input = page.locator('#greet-input');
    await expect(input).toBeVisible();
});
