// Objects in JavaScript are collections of key-value pairs.
// Each value can be a string, number, array, another object, or a function (method).
// Objects are used to store and manage data in a structured way.

// There are two main ways to create an object:

// 1.) Object Literal Notation:
let vehicle = {
  mileage: 1000,
  isConvertible: false,
  "African Made": true
};
// console.log(vehicle);
// console.log(vehicle["isConvertible"]);
// console.log(vehicle.mileage);
// console.log(vehicle.brand);
// vehicle.brand = "Toyota";
// vehicle["car model"] = "Camry";
// // console.log(vehicle);
// // console.log(vehicle.model);
// // console.log(vehicle["model"]);
// console.log(vehicle);


const person = {
  name: "John",
  "his country": "United States",
  age: 30,
  profession: "Engineer",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
  drive: (carname) => {
    console.log(carname + " Vroooooooooooooom...");
  },
};

const sayHello = (name) => {
  console.log('hi ' + name);
}
// sayHello("Bob")
// console.log(person);

// person.drive('Tesla');
// person.drive('Mercedes');
// person["drive"]("Keke");

// console.log(console)

// 2.)  Using new Object() Syntax:

const car = new Object();
// console.log(car);
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;
car[Math.random() * 100] = 'correct'

  // console.log(car);

//   Accessing Object Properties
//   You can access object properties in two ways:

//   Dot Notation:
//   console.log(person.name);  // Output: John

// Bracket Notation (useful when keys are dynamic or have spaces):
//   console.log(person['age']);  // Output: 30

//   Methods
//   A method is a function that is a property of an object.
//   In the above example, greet is a method of the person object.
// person.drive('Toyota');

const food = {
  isSoup: true,
  food_name: "Pepper Soup",
  ingredients: ["onions", "bell peppers", "mayo", "garlic"],
  cook: function () {
    console.log("Cooking " + this.name);
    this.isSoup = false;
    console.log("Done cooking");
  }
}

// const food_name = food.food_name;
// console.log("food_name: " + food_name);

// Destructuring Objects
// Destructuring allows you to unpack values from objects into distinct variables.

const { food_name:dish_name  } = food;
console.log("food_name: " + dish_name );


// Nested Object Destructuring
// You can destructure nested objects too:
const student = {
  name: "Tom",
  scores: {
    math: 90,
    english: 85,
  },
};

// const english = student.scores.english;
// console.log(english);
// const english = student["scores"]["english"];
// console.log(english);

  // const { scores } = student;
  // console.log(scores)
  // const { math, english } = scores;
const {scores: { english, math }} = student;
console.log(english);

//   console.log(math);    // Outputs: 90
//   console.log(english); // Outputs: 85

const myVehicle = {
  brand: "Toyota",
  model: "Hilux",
  colors: ["Blue", "Green", "red", "Yellow", ["Pink", "brown"]],
  isAvailable: true,
  engineStats: {
    mileage: 1000,
    props: {
      electric: {
        batterySize: 10000,
        chargers: ["10W", "20W", "50W"],
      },
    },
  },
};



//  Spread Operator (...)
// The spread operator (...) allows you to copy or merge objects and arrays, as well as to unpack elements.

// Copying an Object
const person1 = { _name: 'John', age: 34 };
const person2 = { ...person1, city: "New York" };
const person5 = {...person2}
// console.log(person2);
// console.log(person5);

// Copying an Array
const cars = ["Toyota", "Ford", "BMW"];
const cars2 = [...cars, "Honda"];
// console.log(cars2);


// Merging Objects
// You can merge multiple objects using the spread operator:
const obj1 = { x: 1, y: 2 };
const obj2 = { y: 5, z: 3 };

const merged = { ...obj1, ...obj2 }; // `y` will be overwritten by obj2's `y`
// console.log(merged);  // Outputs: { x: 1, y: 5, z: 3 }

// Adding or Overwriting Properties in an Object
// You can add or modify properties while spreading:

const person3 = { name: "John", age: 30 };
const updatedPerson = { ...person3, city: "lagos", age: 35 };

// console.log(updatedPerson);

// Deleting Properties in an Object
const person4 = { name: "John", age: 30, city: "New York" };
// const deletedPerson = { ...person4 };
// delete deletedPerson.city;
// for(let [key, value] of Object.entries(person4)){
//   console.log(key, value);
// }
// console.log(deletedPerson);

// Object Methods
// There are built-in methods to manipulate objects.

// Object.keys()
// Returns an array of the object’s keys.
const citizen = { name: "John", age: 30 };
// console.log(Object.keys(citizen));

// Object.values()
// Returns an array of the object’s values.
// console.log(Object.values(citizen));

// Object.entries()
// Returns an array of key-value pairs.
// console.log(Object.entries(citizen));

// this Keyword
// In JavaScript, this refers to the current object the code is being written in.
// Inside an object method, this refers to the object.
const user = {
  name: "Emma",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

// user.greet();

const myStudent = {
  name: "Peter",
  scores: [-25, -80, -51, -95, -10, -12, -40],
  getHighestScore: function(){
    let highestScore = this.scores[0];
    for(let i = 0; i < this.scores.length; i++) {
      if(this.scores[i] > highestScore) {
        highestScore = this.scores[i]; 
      } 
    }
    console.log(`${this.name}'s highestScore was ${highestScore}`);
  },
  getLowestScore: function(){
    let lowestScore = this.scores[0];
    for(let i = 0; i < this.scores.length; i++) {
      if(this.scores[i] < lowestScore) {
        lowestScore = this.scores[i]; 
      } 
    }
    console.log(`${this.name}'s lowestScore was ${lowestScore}`);
  },
  calculateAverageScore: function(){
    let sum = 0;
    for(let i = 0; i < this.scores.length; i++) {
      sum = sum + this.scores[i]; 
    }
    console.log(`${this.name}'s average score was ${sum / this.scores.length}`);
    
  }
}

// myStudent.getHighestScore();
// myStudent.getLowestScore();
// myStudent.calculateAverageScore();

//   Object Shorthand Syntax
//   When creating objects, if the key and variable name are the same, you can use shorthand syntax:
const myName = "Mark";
const myAge = 22;

const myDetails = { myName, myAge };
// console.log(myDetails);

// Object Property Computation
// You can dynamically define property keys using square brackets.
let keyName = "color";
const radomNumber = Math.floor(Math.random() * 20);
keyName+=radomNumber;
const fruit = 'Cashew';

const myCar = {
  brand: "BMW",
  [keyName]: "red",
  [fruit]: 'tart'
};

Object.seal(myCar);
myCar.mileage = 10;
myCar.brand = "Tesla"
// console.log(myCar);

// Object freeze() and seal()

// Object.freeze(): Prevents modification of properties in the object.
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // No effect, because the object is frozen
// console.log(obj);

// Object.seal(): Allows modification of existing properties but prevents new properties from being added.
const myObj = { a: 1 };
Object.seal(obj);
myObj.a = 2; // Allowed
myObj.b = 3; // Not allowed
// console.log(obj);

//Class Work
// 1.) create an Object called student
// 2.) give it a name property and assign a string value to it
// 3.) give it a grades property and assign an array of 7 numbers to it
