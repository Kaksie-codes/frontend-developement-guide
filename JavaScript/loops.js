// Loops are used to repeatedly run a block of code as long as a specified condition is true. 
// The main types of loops in JavaScript are:


// for loops

// for (initialization; condition; increment) {
    // code to be executed
// }

// for(let num = 10; num >= 0; num--){
//     console.log(num);
// }

// for(let num = 0; num <= 10; num++){
//     console.log(num);
// }

// for(let num = 3; num < 20; num+=3){
//     console.log(num);
// }

// for(let num = 0; num < 20; num++){
//     if(num >= 3){
//         if(num % 3 === 0){
//             console.log(num);
//         }
//     }   
// }

// for(let num = 1; num < 7; num++){
//     console.log(num * 3)
// }


// while loop

// while (condition) {
//     code to be executed
// }
  
// let isShopOpen = true;

// while(isShopOpen){
//     console.log('Buy Bread');
//     isShopOpen = false;
// }

// let count = 5;

// while(count >= 0){
//     console.log(count);
//     count--;
// }


// do while loop 

// do {
    // code to be executed
//   } while (condition);
  
// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);


// for...in Loop: Used to iterate over the properties of an object.

// for (let key in object) {
    // code to be executed
//   }

// example
let person = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 25  
};

// console.log(person.lastName);
// console.log(person['firstName']);

// for (let dog in person) {
//     // console.log(dog);
//     console.log(dog + ": " + person[dog]);
//     // console.log(`${prop}: ${person[prop]}`);
// }



let firstname = 'Jack';
let lastname = 'Robinson'
// console.log('my name is ' + firstname + " " + lastname);
// console.log(`my name is ${firstname} ${lastname}`);
let _name = "Maria";
_name+='-'
_name+='stella'
// console.log(_name)

// console.log(`"Hello 'Sam'"`);
// console.log('hello \'sam\'');



// for...of Loop: Used to iterate over iterable objects like arrays, strings, maps, etc.
// for (let value of iterable) {
//     // code to be executed
//   }
  
// example
let numbers = [1, 2, 3, 4, 5];

// for (let thing of numbers) {
//   console.log(thing);
// }

let nums = [];
console.log(nums);
nums.push(1);
console.log(nums);
nums.push(10);
console.log(nums);

let dogs = ['german shepard', 'Terrier', 'ekuke']

// for(let dog of dogs){
//     console.log(dog);
// }

// console.log(dogs.length);

// console.log(dogs[5]);

// for(let i = 0; i < dogs.length; i++){
//     console.log(dogs[i])
// }

// for(let i = 20; i >= 0; i--){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// let randomDigit = prompt('Enter a number:')

// if(randomDigit > 1000){
//     console.log(`${randomDigit} is greater than 1000`);
// }else if(randomDigit <=999 && randomDigit > 700){
//     console.log(`${randomDigit} is between 1000 and 700`);
// }else if(randomDigit <=699 && randomDigit > 200){
//     console.log(`${randomDigit} is between 700 and 200`);
// }else{
//     console.log(`${randomDigit} is less than  or equal to 200`);
// }