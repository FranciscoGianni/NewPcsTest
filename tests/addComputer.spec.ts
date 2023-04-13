import { test } from "@playwright/test";
import { AddComputer } from "../pages/newPC";
import { ComputerPage } from "../pages/computerPage";


test("add new computer", async function ({ page }) {
  const computersPage = new ComputerPage(page);
  await computersPage.goto();
  await computersPage.clickOnAddNewButton();

  const addComputer = new AddComputer(page);
  const computerName = "PC test";
  await addComputer.fillComputerForm(
    computerName,
    "1990-01-01",
    "2000-12-31",
    "Nintendo"
  );

  await computersPage.checkAdd(computerName);

});
