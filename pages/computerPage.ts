import { Page, Locator, expect } from "@playwright/test";

export class ComputerPage {
  page: Page;
  currentComputers: Locator;
  addNewButton: Locator;
  cancelButton: Locator;
  successAddToast: Locator;
  clickNextPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.currentComputers = page.locator("table tbody tr");
    this.addNewButton = page.getByRole("link", { name: "Add a new computer" });
    this.cancelButton = page.getByRole("link", { name: "Add a new computer" });
    this.clickNextPage = page.getByRole("link", { name: "Next →" });
  }

  async goto() {
    await this.page.goto("https://computer-database.gatling.io/computers");
  }

  async clickOnAddNewButton() {
    await this.addNewButton.click();
  }

  async clickOnCancelButton() {
    await this.cancelButton.click();
  }

  async checkAdd(computerName: string) {
    await expect(
      this.page.getByText(`Done ! Computer ${computerName} has been created`)
    ).toBeVisible();
  }

  async noNewPC() {
    await expect(
      this.page.getByText(`574 computers found`)
    ).toBeVisible();
  }

  async nextPage(){
    await this.clickNextPage.click();
  }


  async checkPagination() {
      await expect(
        this.page.getByText(`Displaying 11 to 20 of 574`)
      ).toBeVisible();
  }
}
