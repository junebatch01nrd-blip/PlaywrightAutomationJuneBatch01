//
//Classes and its properties

//What is classes and why do we need this in automation framework
//Constructor
//default constructor // parametrized constructor

 export class Person {

  constructor(firstName, lastName, age){
     
    this.firstName = firstName
    this.lastName = lastName
    this.age=age

  }
  fullname() {
    return this.firstName+ ' '+this.lastName
  }

  get location() {
    return "Pune";
  }
}
// let person = new Person('Shivaji', 'Pande', 35)
// console.log(person.fullname())
// console.log(person.lastName)
// console.log(person.age)

// let person1 = new Person('Ramesh', 'Nikam', 40)
// console.log(person1.fullname())
// console.log(person1.lastName)
// console.log(person1.age)

