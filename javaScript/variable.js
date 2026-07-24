

//-------------------JavaScript-------------------------------------

/*

Javascript is programming language-
It is used to create interactive web applications
javascript can be used for both front-end and back-end development
it famous for its ability to create dynamic and interactive user interfaces
front end development


HTML
CSS
JavaScript

front end development ( HTML + CSS + JavaScript ) = front end development

Variables----------------

variable is a container that holds data or value
it is use to store data and manipulate it in a program

let username = "John Doe";
let _username = "John Doe";
let $username = "John Doe";
let 2username = "John Doe";  ---Not Allowed

myVariable = "John Doe";  --
myvariable = "lean tery";  -- these 2 diffrent value 

const location = await page.locator('input[name="location"]').inputValue();

variable can store difrent data types such as number strings, boolean, array, object, etc.

//There are rules to define variable in javascript
1. variable name starts with letter must start with letter, underscore or dollar sign(a,_,$)
2. variable name can contain letters, numbers, underscores, and dollar signs
3. variable name cannot start with a number
4. variable name can not be a reserved keyword in javascript
5. variable name is case sensitive

var emailname = "abc@gmail.com";        0000010020--zerter@gmail.com
var emailname = "def@gmail.com"; --re-declared

emailname = " zerter@gmail.com'  --re-assigned


//keywords in javascript 

var, let, const

//var is used to declare variable 
and it can be re-assigned and redeclared in the same scope

//let is used to declare variable and it can be re-assigned but not redeclared in the same scope

//const is used to declare variable and it cannot be re-assigned or redeclared in the same scope

*/

//var

var name = "John Doe";  //declared and assigned
var name = "rom";  //re-declared and re-assigned
name = "smith";  //re-assigned
console.log(name);  //output: smith


//let 

let age =30;
console.log(age);  //output: 30

age = 50;  //re-assigned
console.log(age);  //output: 50

//let age = 35;  //re-declared not allowed
//console.log(age);  //output: 30

//const

const country = "USA";
console.log(country);  //output: USA

//const country = "Canada";  //re-declared not allowed
//country = "Mexico";  //re-assigned not allowed
//console.log(country);  //output: USA

