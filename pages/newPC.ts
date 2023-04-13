import { Locator, Page } from "@playwright/test";

export class AddComputer {
  page: Page;
  computerName: Locator;
  introduced: Locator;
  discontinued: Locator;
  companyDropdown: Locator;
  createButton: Locator;
  cancelButton: Locator;
  nextPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.computerName = this.page.getByLabel("Computer name");
    this.introduced = this.page.getByLabel("Introduced");
    this.discontinued = this.page.getByLabel("Discontinued");
    this.companyDropdown = this.page.getByLabel("Company");
    this.createButton = this.page.getByRole("button", {
      name: "Create this computer",
    });
    this.cancelButton = this.page.getByRole("button", { name: "Cancel" });
   }

  async fillComputerForm(
    computerName: string,
    introducedDate: string,
    discontinuedDate: string,
    company: string
  ) {
    await this.computerName.fill(computerName);
    await this.introduced.fill(introducedDate);
    await this.discontinued.fill(discontinuedDate);
    await this.companyDropdown.selectOption(company);
    await this.createButton.click();
  }
}
