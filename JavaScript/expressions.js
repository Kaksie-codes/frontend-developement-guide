// An expression in JavaScript is any valid unit of code that resolves to a value. 
// Expressions can be simple, like a number or a string, or complex, involving operators and multiple values.


// Primary Expressions:
// The simplest expressions that stand alone.

// e.g
42;           // A numeric literal expression
"Hello";      // A string literal expression
true;         // A boolean literal expression


// Arithmetic Expressions:
// Expressions that involve arithmetic operations like addition, subtraction, multiplication, and division.

// e.g
10 + 5;       // Addition, evaluates to 15
20 - 4;       // Subtraction, evaluates to 16
7 * 3;        // Multiplication, evaluates to 21
8 / 2;        // Division, evaluates to 4

// console.log(20 - 5);


// String Expressions:
// Expressions that concatenate strings or manipulate string values.

// e.g
"Hello" + " " + "World";   // Concatenation, evaluates to "Hello World"
console.log("Hello" + " " + "World");

let string1 = "Frontend";
let string2 = "Development"
let string3 = "class"

console.log(string1 + " " + string2 + " " + string3);

// Logical Expressions:
// Expressions that use logical operators to return boolean values (true or false).

// e.g
5 > 3;          // Greater than, evaluates to true
10 == 10;       // Equality, evaluates to true
7 != 2;         // Not equal, evaluates to true

console.log(10 === "10");


// Assignment Expressions
// Assigns a value to a variable.

// e,g
let x = 5;        // Assignment, x is now 5
x = x + 10;          // Adds 10 to x, now x is 15
console.log(x);

// Comparison Expressions:
// Expressions that compare two values and return a boolean (true or false).

// e.g
5 > 3;           // Greater than, evaluates to true
10 == 10;        // Equality, evaluates to true
7 <= 2;          // Less than or equal, evaluates to false



// Ternary (Conditional) Expressions:
// A compact form of an if-else statement.

// e.g
// condition ? expression1 : expression2;
let age = 18;
let canVote = (age >= 180) ? "Yes" : "No";  // Evaluates to "Yes"
// console.log(canVote);

let chain = 7;
let isAllowedtoEnterClass = (chain === 8) ? true : false;

// console.log(isAllowedtoEnterClass);