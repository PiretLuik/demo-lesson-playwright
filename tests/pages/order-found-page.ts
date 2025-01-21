import { Locator, Page } from '@playwright/test'
import { BasePage } from './base-page'

export class OrderFoundPage extends BasePage {
  readonly uselessButton: Locator
  readonly notFoundTitle: Locator
  readonly pictureNotFound: Locator
  readonly notFoundDescription: Locator
  readonly logoutButton: Locator

  constructor(page: Page) {
    super(page)
    this.uselessButton = this.page.locator('button#useless') // Replace with the actual valid selector
    this.notFoundTitle = this.page.getByRole('heading', { name: 'Order not found' })
    this.pictureNotFound = this.page.getByTestId('username-input')
    this.notFoundDescription = this.page.getByText('Check the tracking code')
    this.logoutButton = this.page.locator('[data-testid="logout-button"]') // Ensure this matches a valid selector
  }
}
