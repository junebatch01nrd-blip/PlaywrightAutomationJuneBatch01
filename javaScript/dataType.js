/*

--Data types in JavaScript--

kind of value which varibale is storing is called dat types 

there 2 types of data types in javascript

1. Primitive data types
2. Non-primitive data types

immutable fixed size data types in javascript 

it h holds a single value 

let name = "john";  // memory alocation 1001
name = 'shyam";      // memory alocation 1002

There are 7 primitive data types in javascript

1. String
-- Represents a sequence of character enclosed in single or double quotes

"" , 'hello world' , 'helloworld' ,
console.log('helloworld');

'Hello wrold' or "Hello world"
let reduce = "90";  //string data type

"The shadow element"

2. Number
-- Represents numeric values, both integers and floating-point numbers

let age = 25;  //number data type
let marks = 99.5;  //number data type

3. Boolean: Represents a logical value that can be either true or false.

true / false 

let isStudent  = true

4.Null: Represents the intenitional absence of any object value 

let result = null;  //null data type

5.Undefined: It Represents a variable that has benn dclared but not assigned any value 

let name; //undefined data type

6.BigInt: Represents integers with arbitrary precision, allowing for very large numbers beyond the safe integer limit of the Number type.

let bigNumber = 1234567890123456789012345678901234567890n;

7.Symbol: Represents a unique identifier. and it is used to create unique property keys for objects.

Example:
const uniqueId = Symbol('id');

*/

let name = "John Doe";  //string data type
console.log(typeof name);  //output: string
console.log(name);  //output: John Doe

const age = 25;  //number data type   
console.log(typeof age);  //output: number
console.log(age);  //output: 25

let isStudent = true;  //boolean data type
console.log(typeof isStudent);
console.log("isStudent");  //output: true
console.log(isStudent);

let searchTexbox = null;  //null data type ///india
console.log(typeof searchTexbox);
console.log(searchTexbox);


let result;  //undefined data type
console.log(typeof result);
console.log(result);

let bigintValue =  9002323434343334n;
console.log(typeof bigintValue);
console.log(bigintValue);

let x = Symbol('id');
console.log(typeof x);
console.log(x);

let num = 'twenty five';   

  //output: 30


console.log(typeof num);
console.log(num);

 num = 35;  //memory alocation 1002
console.log(num);  //output: shyam
console.log(typeof num);

const username = "prince@xyzintech.com"
const password = "prince@123"


//Non-primitive data types in javascript
//1. Object
//2. Array
//3. Function

//object
//Object is collection of properties...
//properties are key and value pairs












