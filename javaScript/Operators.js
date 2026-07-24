/*

//Operators in Java script--

Operator is a symbol or keyword that can perform an operation or any tasks which provide us output value

Types of Operators in Javascript---

1. Arithmetic operator: used to perform mathematical operation  
   example- +, -,*,/, %
2. Assignment Operator: used to assign values to variables
   example: =, +=, -=, *=, /=
   let num = 10
3. Comparison operator: used for comparing  values 
   example: ==, ===, !=, !==, >, <, >=, <=
4. Logical Operators: used for combining multiple conditions
   examples: && (AND), || (OR), !(NOT)
5. String operator: Used for concatenating string 
   example: +


*/
//Arithmetic Operators
let a = 10
let b = 5

let addition = a + b   // Addition
console.log(addition)

let substraction = a-b  // Substraction
console.log(substraction)

let multiplication = a * b  //Multiplication
console.log(multiplication)

let division = 100/5 // division
console.log(division)

let modulus = 10%3 // Modulus(Reminder)
console.log(modulus)

//Assignment operators

let x  = 50 // = equals operator
x= x+5     // equivalent x+=5
x+=5
console.log(x)

x-=10    // equivalent x= x - 10
console.log(x)

x*=2     //equivalent to x = x*2
console.log(x)

x/=2
console.log(x)

//Comparison Operators-

let c = 10   //number   = is assigning value to variable
let d = '10'  ///string
let isEqual = c==d          //== compare only value
console.log(isEqual)

let isStrictEqual = c===d    //=== it will compare value as well as it data type
console.log(isStrictEqual)

//What is difference between =, == , ====

let isGreaterthan = a>b
console.log(isGreaterthan)

let isLessthan = a<b
console.log(isLessthan)

let e = 20
let f = 20
let isGreaterthanOrEqual = 20>=20
console.log(isGreaterthanOrEqual)

let islessthanOrEqual = 21<=20
console.log(islessthanOrEqual)

let isNotEqual = a!= b
console.log(isNotEqual) 

/*Logical operator
// It is used for comining multiple condition together
//symbol-  &&, || , !
&& examples and logic for true value
T*T = T
T*F = F
F*T = F
F*F = F                    !  ( a>b & c<d  )True

|| OR

T + T = T
T + F = T
F + T = T
F + F = F


*/

a = 10
b = 20

let andOperator = (a>5 && b>15 )  // t + t
console.log(andOperator)

let andOperator2 = (a>15 && b>15 )  // f + t
console.log(andOperator2)

let orOperator = (a>15 || b>30)   //f+f
console.log(orOperator)

let orOperator2 = (a>15 || b>10)  //f + t
console.log(orOperator2)

let notOperator =  !(a>15 || b>10)    
console.log(notOperator)

//String operator
//String operator is used to concatenate  strings together

let firstName = "Ramesh"
let lastName  = "Kumar"

let userName  = firstName + " " + lastName  //concatenation

console.log(userName)

////////////////////////////











