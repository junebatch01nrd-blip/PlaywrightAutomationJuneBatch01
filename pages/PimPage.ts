import {Page, Locator} from '@playwright/test'


export class PimPage{

readonly page:Page;

constructor(page: Page){

this.page = page;

}

get pimLink(){

    return this.page.getByRole('link', {name:'PIM'})
}

get pimHeading(){

    return this.page.getByRole('heading', {name:'PIM', exact:true})
}

get addButton(){

    return this.page.getByRole('button', {name:'Add'})
}

get employeeFullNameText(){

    return this.page.getByText('Employee Full Name')

}

get firstNameInput(){

    return this.page.getByRole('textbox', { name: 'First Name' })
}

get lastNameInput(){

    return this.page.getByPlaceholder('Last Name')
}

get employeeIdInput(){

return this.page.locator('.oxd-input-group')
.filter({has:this.page.locator('label',{hasText:'Employee Id'})})
.locator('.oxd-input.oxd-input--active')
}

get employeeIdInputValue(){

    return this.employeeIdInput.inputValue()
}

get saveButton(){

    return this.page.getByRole('button', {name:'Save'})

}

get personalHeading(){

    return this.page.getByRole('heading', {name:'Personal Details'})
}

async addEmployee(firstname: string, lastname:string){

    await this.pimLink.click();
    await this.addButton.click();
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);

    const employeeIdvalue= await this.employeeIdInputValue;

    await this.saveButton.click();

    return employeeIdvalue;


}




}