import {test, expect} from '@playwright/test';
import { PageManager } from '../pages/PageManager';
import testData from '../testData/testData.json';
import { Helper } from '../utility/Helper';
import { ExelUtils } from '../utility/ExcelUtils';


test('should add a new employee', async({page}) =>{

const PM = new PageManager(page);
const empData = Helper.generateData();

console.log(empData);
//Go to Login page
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await PM.loginPage.login(testData.username, testData.password);
await expect(PM.dashboardPage.dashboardHeading).toBeVisible();

const employeeId= await PM.pimPage.addEmployee(empData.firstName,  empData.lastName);

 await ExelUtils.writeEmployeeData('./testData/Employee.xlsx',
    'Employees',
    empData.firstName,
    empData.lastName,
    employeeId
  );


})