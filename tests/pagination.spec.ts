import { test } from "@playwright/test";
import { AddComputer } from "../pages/newPC";
import { ComputerPage } from "../pages/computerPage";


test("Pagination", async function ({ page }) {
  const computersPage = new ComputerPage(page);
  await computersPage.goto();
  await computersPage.nextPage();
  
  await computersPage.checkPagination();
});
