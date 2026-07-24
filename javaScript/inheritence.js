//Inheritence
//What is Inheritence
//It is the process of aquiring all methods and variables from parent class
//It can be access wit keyword- extends
//Need to import parent class to provide the information to child while creating the object
import {Person} from "./basicClass1.js";


class Pet extends Person{

    constructor(firstName, lastName, age){
     
     super(firstName, lastName, age)

  }

  //Polymorphism
  //Method Overriding/Method Overloading
  //Method Overriding-

    get location() {
    return "Mumbai";
  }

  //Method Overloading
  //Java script does not support method overloading
  // we can use single method with optional parameter

  greet (message='hello'){

    return `${message}, I am ${this.fullname()} from ${this.location}`
  }


}

let pet = new Pet('Tom', 'Cat', 2)
let pet2 = new Pet("Jerry", 'eol', 1)
console.log(pet.fullname());
console.log(pet.location)
console.log(pet.greet())
console.log(pet.greet("Good Morning"))



