// What are Higher-Order Functions?
// A higher-order function is a function that either:

// 1.) Takes one or more functions as arguments.
// 2.) Returns a function.


// These functions help us write more reusable and modular code,
//  by passing functions around and using them where needed.



// Why are HOFs useful?
// Higher-order functions help in:

// 1.) Reducing code duplication.
// 2.) Writing flexible functions that can be customized with different behaviors.
// 3.) Abstracting over common patterns of computation (e.g., looping over arrays).

function greet(name) {   
    console.log(`Hello, ${name}!`);
}

// greet('Buhari');
const sayMyName = (name) => {
    console.log(`My name is ${name}`)
}

function logGreeting(myFunc, name) {
    sayMyName(name);
    myFunc(name);
}
  
// We pass the 'greet' function as an argument to 'logGreeting'
// logGreeting(greet, "Tyronne"); // Output: Hello, tyronne!

// function Add(num1, num2){
//     return num1 + num2;
// }

// let answer = Add(1, 2);

// console.log({answer});

function multiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const multiplyByTwo = multiplier(2);

//   console.log(multiplyByTwo(5)); // Output: 10

  
//   Callbacks  
//   A callback is a function passed into another function as an argument, 
//   which is then invoked inside the outer function. 
//   It's a way to make sure a function is executed only after another function has finished.
// Callbacks are commonly used in asynchronous programming but also in higher-order functions.

function getUserName(callback) {
    const name = "Chad";
    callback(name);
}
  
  function greetUser(name) {
    console.log(`Hello, ${name}!`);
  }
  
//   // Passing 'greetUser' as a callback to 'getUserName'
//   getUserName(greetUser); // Output: Hello, Chad!


// Inbuilt Higher-Order Functions (Array Methods)
// JavaScript has several in-built higher-order functions that are frequently used for array manipulation. 
// Let’s look at some of the most commonly used ones:

// A.) forEach
// Purpose: The forEach method executes a provided function once for each array element.
// Use Case: It’s used to perform an action on every item in an array, but it does not return anything.

// const numbers = [1, 2, 3, 4, 5];
// const multiplyBy = (number) => {
//     console.log(number * 2);
// }
// numbers.forEach((number) => multiplyBy(number));

// numbers.forEach(function(number){
//     console.log(number * 2);    
// });

// numbers.forEach((number) => console.log(number * 2));



// B.) map
// Purpose: The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
// Use Case: It’s used when you want to transform an array into another array.
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]


// C. filter
// Purpose: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// Use Case: It’s used when you want to filter out elements that do not meet certain conditions.
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4, 6]

// D. reduce
// Purpose: The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Use Case: It’s used to accumulate values (e.g., summing up numbers, finding the product of numbers, etc.).
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Output: 10


// E. find
// Purpose: The find method returns the first element in the array that satisfies the provided testing function. If no element is found, it returns undefined.
// Use Case: It’s used when you need to find the first matching element based on a condition.
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Nsikak", age: 37 }
//   ];
  
//   const user = users.find((user) => user.age === 37);
  
//   console.log(user); // Output: { name: "Nsikak", age: 37 }
  

// F. some and every
// Purpose:
// some checks if at least one element in the array passes the test implemented by the provided function.
// every checks if all elements in the array pass the test.
// const numbers = [1, 2, 3, 4];

// // Using some
// const hasEven = numbers.some((number) => number % 2 === 0);
// console.log(hasEven); // Output: true (because 2 and 4 are even)

// // Using every
// const allEven = numbers.every((number) => number % 2 === 0);
// console.log(allEven); // Output: false (because not all numbers are even)


// Using a Custom Higher-Order Function with a Callback
function repeatAction(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  
  repeatAction(3, (i) => {
    console.log(`This is iteration ${i + 1}`);
  });


// console.log("Task 1: Start");

// // Callback function executed after 2 seconds (2000 milliseconds)
// setTimeout(function() {
//   console.log("Task 2: This is delayed by 2 seconds");
// }, 2000);

// console.log("Task 3: End");



// console.log("Starting countdown...");

// let counter = 5;
// const countdown = setInterval(function() {
//   console.log(counter);
//   counter--;

//   if (counter === 0) {
//     console.log("Liftoff!");
//     clearInterval(countdown); // Stops the interval
//   }
// }, 1000); // Interval of 1 second





// CLASS WORK
// Question 1: Timer Functions
// Write a function startCountdown that accepts two parameters:
// A number seconds representing the countdown time.
// A callback function onFinish that will execute when the countdown finishes.


// Question 2: Delayed Message
// Write a function delayedMessage that takes two arguments:
// A message (string) to display.
// A delay (number) representing the time in milliseconds after which the message should be displayed.

// Question 3: map Implementation
// Write a higher-order function myMap that mimics the behavior of the map function:
// It takes an array and a callback function as arguments.
// The callback function should apply some transformation to each element of the array and return a new array with the transformed elements.