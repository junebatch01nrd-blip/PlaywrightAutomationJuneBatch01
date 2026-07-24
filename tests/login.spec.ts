import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import testData from '../testData/testData.json';
import { ExelUtils } from '../utility/ExcelUtils';

test('valid login', async({page}) =>{

const loginPage = new LoginPage(page)
const dashboardPage = new DashboardPage(page)


//Go to Login page
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await loginPage.login(testData.username, testData.password);
await expect(dashboardPage.dashboardHeading).toBeVisible();


});


test('inValid login', async({page}) =>{

const loginPage = new LoginPage(page)

const userData = ExelUtils.getData('./testData/credentials.xlsx', 'credentials', 0);


//Go to Login page
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await loginPage.login(userData.username, userData.password);
await expect(page.getByText("invalid credentials")).toBeVisible();



});

