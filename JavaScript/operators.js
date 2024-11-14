// Operators are used to perform operations on variables and values. 
// JavaScript supports various types of operators:


// Arithmetic Operators:

// + (Addition): a + b
let num1 = 5;
let num2 = 9;

// console.log(num1 + num2);

// - (Subtraction): a - b
let num3 = 71;
let num4 = 14;

// console.log(num3 - num4 + num2);

// * (Multiplication): a * b
// console.log(num3 * num1);

// / (Division): a / b
// console.log(num3 / num1);

// % (Modulus): a % b

// console.log(num4 % num1);

// ++ (Increment): a++ or ++a
let a = 6;
// console.log({a});
a++;
++a;
// console.log({a});

// -- (Decrement): a-- or --a
let b;
// console.log({b});
b--;
// console.log({b});

// V = IR
let v;
let I = 7;
let R = 50;
v = I * R;
// console.log({v});
// BODMAS
// Temperature Assignment
let celsiusVal = 50;
let FahrenheitVal;

// FahrenheitVal = celsiusVal * (9/5) + 32;
// console.log({FahrenheitVal})

let num5 = 20;
// console.log({num5});
num5*=10;
// console.log({num5});
// // --num1;



// Assignment Operators:

// = (Assign): a = b
let country = 'Azerbaijan'

// += (Add and assign): a += b (equivalent to a = a + b)

let favNumber = 7;
favNumber +=favNumber;
// console.log({favNumber})

// -= (Subtract and assign): a -= b
favNumber-=7;
// console.log({favNumber});

// *= (Multiply and assign): a *= b
favNumber*=favNumber;
// console.log({favNumber});

// /= (Divide and assign): a /= b
favNumber/=5;
// console.log({favNumber});

// %= (Modulus and assign): a %= b
favNumber%=9.8;
// console.log({favNumber});

let number1 = 2;
let number2 = 3;
let number3 = 1;
number3 = number1 + number3;
// console.log({number3})
number3+=number1;
// console.log({number3})
number1+=2;
// console.log(number3);


// Comparison Operators:
// == (Equal to): a == b
// console.log(5 == "5M");
// console.log(5 == "50");

// === (Strict equal to): a === b
// console.log(5 === "5");

// != (Not equal to): a != b
// console.log(5 != "5");

// !== (Strict not equal to): a !== b
// console.log(5 !== "5");
// console.log(!(5 == "5"));

// > (Greater than): a > b
// console.log(!(!(5 > 5)));

// < (Less than): a < b
console.log(10 < 5);

// >= (Greater than or equal to): a >= b
console.log(10 >= 5);

// <= (Less than or equal to): a <= b
console.log(12 <= 12);

// Logical Operators:
// && (Logical AND): a && b
console.log(!(!(12 <= 12)) && 6 >= 12 );

(5 > 13) && console.log('yes Boss!');

console.log((!(!(12 <= 12)) || 6 >= 12) ? 'running' : 'not running');
// (!(!(12 <= 12)) && 6 >= 12 ) ? 'running' : 'not running';

// || (Logical OR): a || b
console.log(12 <= 12 || 6 >= 12 );


// ! (Logical NOT): !a
let isMarried = false;
console.log(!isMarried)

console.log(10 > 2 && (4 > 5 || 5 > 2) )