
//Function:
//What Is Function--
//- It is a block of code can be executed together by wrapping them in module
//- A function is an independent block of code that perform specific task 
// and it does not belongs any object

  function add(a, b){

    return a+b

}
console.log(add(10, 20));

function substract(){

    return 20-10;
}

console.log(substract());

//function does not have any name which is called as anonymous function

let sumInteger = function(c,d){

   return c * d; 

}

console.log(sumInteger(40, 20));

//2nd way to write anonymous function

let sumNumbers = (e, f)=>{

return e + f
}

console.log(sumNumbers(23, 11))

//Method
//What is the diffrence between function and method
//Method is simply a function that is stored as a property of an Object
// Method: a function that belongs to an object or class.
// Function = standalone
// Method = function inside an object/class

class Login {

     validLogin(){

        return 11 + 11
    }
}

const login = new Login();
console.log(login.validLogin());






