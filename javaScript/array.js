
/*
 ----Arrays------------------

 What is array?
 -Array is collection of multiple values stored in single vaiable
 -If we have set of elements then we can store those elements in one container which is called as array

 const fruit = "Apple"; //variable declaration ..single value

 const fruits = ["Apple Banana Mango Orange", "Grapes", "Pineapple", "Papaya"]; 
 //array declaration for list of elements from same group 
 let cities = new Array("Pune", "Mumbai", "Delhi", "Bangalore");

 let numbers = [1, 2, 3, 4, 5];
 let marks = [90, 80, 70, 60, 50];


*/


var marks = new Array(90, 80, 70, 60, 50);

var marks = [90, 80, 70, 55, 57, 40];

//how to update index value in array

marks[0] = 100;

console.log(marks);

//access by index value and print in console

console.log(marks[4]);

//how to get length of array

console.log(marks.length);

//how to find index number from value in array

console.log(marks.indexOf(80));

console.log(marks.includes(700)); //true
console.log(marks.includes(70));


//subarray 

pcm = marks.slice(2,5);

console.log(pcm);

// how to add element in array

marks.push(45);
console.log(marks);

//how to add element in first index
marks.unshift(31);
console.log(marks);

//how to delete elemnt from array

marks.pop();
console.log(marks);

//how to remove first element from array
marks.shift();
console.log(marks);

//javaScript array is always dynamic even if we declare size still we can add elements above its define size
//follow the below example
var students = new Array(5);
students[0] = "ramesh";
students[1] = "gamesh";
students[5] = "ram"
console.log(students);

//reduce/filter/map
//how to sum each array element
//var marks = 0 [100, 80, 70, 55, 57, 40];
let sum=0;
for(let i =0; i<marks.length; i++ ){

  sum = sum + marks[i]

}
console.log(sum);

//reduce 
//reduce is used to combine all elements of array in one value

let total = marks.reduce((sum, mark)=> sum + mark, 0);
                           
console.log(total);

//Filter even score element by using for loop 
//var marks = 0 [100, 80, 70, 55, 57, 40];

let evenScore = []
for(let i =0; i<marks.length; i++){

   if ( marks[i]%2==0 ){
 
    evenScore.push(marks[i])

   }

}
console.log(evenScore);

//Filter 
//Filter is used to filter the elements present in an array based on specific condition

 let filterEvenScore = marks.filter(mark => mark % 2 == 0 );
 console.log(filterEvenScore);

 //Map 
 //Map is used to transform existing array element with new values  without changing its array size

 let price = [2000, 1200, 5000, 3000]

 gstPrice = price.map(price => price * 1.18);

 console.log(gstPrice);














