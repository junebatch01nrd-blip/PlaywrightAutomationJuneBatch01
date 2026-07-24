import {Page} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PimPage } from '../pages/PimPage';


export class PageManager{

readonly page:Page;
readonly loginPage:LoginPage;
readonly dashboardPage:DashboardPage;
readonly pimPage: PimPage;

constructor(page: Page){

this.page = page;
this.loginPage= new LoginPage(page);
this.dashboardPage= new DashboardPage(page);
this.pimPage = new PimPage(page);

}

}