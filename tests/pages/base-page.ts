import { Locator, Page } from '@playwright/test'

export abstract class BasePage {
  readonly page: Page
  readonly languageSwitcher: Locator
  readonly englishLanguageButton: Locator
  readonly russianLanguageButton: Locator
  readonly privacyPolicyLink: Locator
  readonly cookiePolicyLink: Locator

  protected constructor(page: Page) {
    this.page = page
    this.languageSwitcher = page.locator('div.language')
    this.privacyPolicyLink = page.getByTestId('privacy-policy')
    this.englishLanguageButton = page.getByRole('button', { name: 'EN' })
    this.russianLanguageButton = page.getByRole('button', { name: 'RU' })
    this.privacyPolicyLink = page.getByTestId('privacy-policy')
    this.cookiePolicyLink = page.getByTestId('cookie-policy')
  }
}
