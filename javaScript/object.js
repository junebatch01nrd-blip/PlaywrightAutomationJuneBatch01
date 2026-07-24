//object
//Object is collection of properties...
//properties are key and value pairs
//properties can be define as key and value pairs
//object can store multiple data types like string, number, boolean, array, object, function etc

// how can we define object in javascript

let student = {
    firstName: "Shailesh",
    lastName: "pande",
    email:'spande@example.com',
    age: 30,
    isStudent: true,
};


//How to access object properties in javascript
//1. Dot notation
console.log(student.firstName);
console.log(student.lastName);
console.log(student.email);  //first way to access object properties
console.log(student.age);
console.log(student['email']); //second way to access object properties
console.log(student.isStudent);


//await page.locator('input[name="firstName"]').fill(student.firstName);

//how to update property value

student.firstName = "Ramesh";

console.log(student);

//how to delete property from object

delete student.lastName;

console.log(student);

//how to check properties present or not in object

console.log('age' in student);
console.log('lastName' in student);


//how to iterate object properties in javascript

for (let x in student) {

    console.log(student[x]);
    }


//Symbol DataType example-----------------
//symbol key is diffrent from string key in object
//it does not visible like normal properties in object


const studentkey = Symbol('studentId');
const studentkey2 = Symbol('studentId');

const studentWithSymbol = {
    [studentkey]: 12345,
    [studentkey2]: 67890,
    firstName: "Shailesh",
    lastName: "pande",
    email:'abc@gmail.com'
}
console.log(studentWithSymbol);


const rolekey1 = Symbol('role');
const rolekey2 = Symbol('role');

const person = {
    [rolekey1]: 'admin',
    [rolekey2]: 'user',
    firstName: "Shailesh",
    lastName: "pande",
}

console.log(person);















