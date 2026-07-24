/*
If Statement 
if
else if
else

one time check the condition 
suppose condition is true then it will execute their block of code 


if (true){
console.log()
}

let isDialog = await page.locator("#dialogBox").isVisible();

if (isDialog){
 await page.getByRole("button", {name:'Close'}).click(); 
}

await page.locator("#link").click();

*/

let sudentAge = 17

if ( sudentAge >= 18){
console.log("Student can vote")
}
else{
    console.log("Student can not vote")
}

let x;
let y = 10;

if(x > y){
    console.log('x is greater thay y')
}

else if (x < y){

    console.log('x is less than y')
}
else if(x == y){

     console.log('x is equal to y')
}

else {

    console.log('x is not a number or x is undefined ')
}

/*

loops -
while loop 
do-while loop 
for loop

//while loop -
 while loop run when condition is true
 if condition become false then while loop stop
 used only when we dont know how many times we want to execute block of code
 also we aware about it will get false 

while(true){

    console.log("while loop is running indefinitely")
}

do-while loop

whether condition is true or false 
it will execute its block of code atleast one time --diffrence between while loop
*/

let fuel = 10;  // liters

while (fuel > 0){
    console.log("the car is running 15km")
    fuel--;

}

fuel = 10;

do{
    console.log('The car is running in do loop once');
    fuel--;

}while (fuel > 0)

/*
For Loop
For loop executed when condition is true
block of code will execute untill condition becomes false
when we aware about how many time we have to run the block of code

click on 10 links

*/

for(let i =0; i<10; i++){

console.log('link clicked' + i)

}

//wap to sum first 5 numbers 1-5 = 1+2+3+4+5

let sum = 0;
for (let i =1; i<=5; i++){
 
    sum =sum + i;
  
}

console.log(sum)

//wap a program to print number from 1-10
//which are divisible by 2 and 5  and modulus 0

for (let i=1; i<=10; i++){
  
   if( i%2===0 && i%5==0 ){

    console.log(i)
   }

}

for (let i=1; i<=10; i++){
  
   if( i%2===0 || i%5==0 ){

    console.log(i)
   }

}

//Exercise
//WAP to print factorial of 5 
//  1*2*3*4*5  =120

let n = 5;
fact =1;

for (let i =5; i>0; i--){

    fact = fact * i
}

console.log(fact)


fact =1;

for (let i =1; i<=5; i++){

    fact = fact * i
}

console.log(fact)









