# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddEmployee.spec.ts >> should add a new employee
- Location: tests\AddEmployee.spec.ts:7:1

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Add' })

```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test'
  2  | 
  3  | 
  4  | export class PimPage{
  5  | 
  6  | readonly page:Page;
  7  | 
  8  | constructor(page: Page){
  9  | 
  10 | this.page = page;
  11 | 
  12 | }
  13 | 
  14 | get pimLink(){
  15 | 
  16 |     return this.page.getByRole('link', {name:'PIM'})
  17 | }
  18 | 
  19 | get pimHeading(){
  20 | 
  21 |     return this.page.getByRole('heading', {name:'PIM', exact:true})
  22 | }
  23 | 
  24 | get addButton(){
  25 | 
  26 |     return this.page.getByRole('button', {name:'Add'})
  27 | }
  28 | 
  29 | get employeeFullNameText(){
  30 | 
  31 |     return this.page.getByText('Employee Full Name')
  32 | 
  33 | }
  34 | 
  35 | get firstNameInput(){
  36 | 
  37 |     return this.page.getByRole('textbox', { name: 'First Name' })
  38 | }
  39 | 
  40 | get lastNameInput(){
  41 | 
  42 |     return this.page.getByPlaceholder('Last Name')
  43 | }
  44 | 
  45 | get employeeIdInput(){
  46 | 
  47 | return this.page.locator('.oxd-input-group')
  48 | .filter({has:this.page.locator('label',{hasText:'Employee Id'})})
  49 | .locator('.oxd-input.oxd-input--active')
  50 | }
  51 | 
  52 | get employeeIdInputValue(){
  53 | 
  54 |     return this.employeeIdInput.inputValue()
  55 | }
  56 | 
  57 | get saveButton(){
  58 | 
  59 |     return this.page.getByRole('button', {name:'Save'})
  60 | 
  61 | }
  62 | 
  63 | get personalHeading(){
  64 | 
  65 |     return this.page.getByRole('heading', {name:'Personal Details'})
  66 | }
  67 | 
  68 | async addEmployee(firstname: string, lastname:string){
  69 | 
  70 |     await this.pimLink.click();
> 71 |     await this.addButton.click();
     |                          ^ Error: locator.click: Test ended.
  72 |     await this.firstNameInput.fill(firstname);
  73 |     await this.lastNameInput.fill(lastname);
  74 | 
  75 |     const employeeIdvalue= await this.employeeIdInputValue;
  76 | 
  77 |     await this.saveButton.click();
  78 | 
  79 |     return employeeIdvalue;
  80 | 
  81 | 
  82 | }
  83 | 
  84 | 
  85 | 
  86 | 
  87 | }
```