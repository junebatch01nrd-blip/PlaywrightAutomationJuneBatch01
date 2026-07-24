import {Page, Locator} from '@playwright/test'


export class LoginPage{

readonly page:Page;

constructor(page: Page){

this.page = page;

}

get usernameField():Locator{

return this.page.getByPlaceholder('Username')

}


get passwordField():Locator{

return this.page.getByRole('textbox', {name: 'Password'})

}

get loginButton():Locator{

return this.page.getByRole('button', {name: 'Login'})

}



async  login(username:string, password:string){

    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
}





}