// String

// 1. String
// -- Represents a sequence of character enclosed in single or double quotes

let day = "tuesday "
console.log(day)

//how to modify string as Uppercase and lowercase

console.log(day.toUpperCase()) //TUESDAY

console.log(day.toLowerCase()) //tuesday

//how to check string length

console.log(day.length) // output =7

//how to slice the string 

console.log(day.slice(0, 4)) // output =tues

//how to split string 

let splitDay = day.split("s")

console.log(splitDay)   // [tue, day]

console.log(splitDay[0])
console.log(splitDay[1])

console.log(splitDay[1].length)

//how to remove white space 

console.log(splitDay[1].trim().length)

//how to convert number into string

let date = '10'
let nextDate = '25'

let add = nextDate + date
console.log(add)
console.log(typeof(add))

newadd = parseInt(nextDate) + parseInt(date)
console.log(newadd)
console.log(typeof(newadd))

let newAddConvertString= newadd.toString()
console.log(newConvertString)
console.log(typeof(newConvertString))

//How to Concatenate String 

let firstname = 'John'
let lastname = 'decosta'

let fullname = firstname + ' '+lastname

console.log(fullname)

//Additional 
//how to count each character from array
let stringarray = ['apple', 'banana', 'mango'] // apple,banana,mango
console.log(stringarray)
console.log(stringarray.length)

let strArrayChar = stringarray.join(); //help to join all index together and convert it in string
console.log(strArrayChar)
console.log(strArrayChar.length)



