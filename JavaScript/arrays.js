// let myArray = ['cow Leg'];
// console.log(myArray);
// myArray.push('Spaghetti');
// console.log(myArray);
// myArray.push('Indomie');
// console.log(myArray);
// myArray.unshift('Milo');
// console.log(myArray);
// myArray.shift();
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift(10);
// console.log(myArray);

// let myNumbers = [];
// console.log(myNumbers);

// for(let i = 1; i <= 10; i++){
//     myNumbers.push(i);
//     console.log(myNumbers);
// }

// for(let i = 1; i <= 10; i++){
//     myNumbers.pop();
//     console.log(myNumbers);
// }

// console.log(Math.random())
// console.log(Math.sqrt(9))

// let randomNumber = Math.random();
// console.log({randomNumber})
// randomNumber = randomNumber * 20;
// console.log({randomNumber})	
// randomNumber = Math.round(randomNumber)
// console.log({randomNumber})


let myAnimals = ["monkey", "Zebra", ["Lion", "ox", ["horse", ['rat', ['chicken']]],], "mouse", "tiger", "cat", "pig", "dog"]

// console.log(myAnimals)
// console.log(myAnimals.length)
// console.log(myAnimals[1])
// console.log(myAnimals[myAnimals.length - 1])
// console.log(myAnimals[2][2][1][1][0])

// const animals = ["monkey", "Zebra", "Lion", "Antelope", "eagle"]

// for(let n = 0; n < specialArray.length; n++){
//     console.log(specialArray[n]);
// }

// for(let animal of animals){
//     console.log(animal)
// }

// animals.forEach((animal) => console.log(animal))

// const nums = [24, 23, 32, 45, 60];

// let randomIndex = Math.random();
// console.log({randomIndex})
// randomIndex = randomIndex * nums.length;
// console.log({randomIndex});
// randomIndex = Math.floor(randomIndex);
// console.log({randomIndex});

// console.log(nums);
// console.log(nums[randomIndex]);


let randomNumbers = [];
let evenNumbers = [];
let oddNumbers = [];

for(let i = 0; i < 20; i++){
    let randomNumber = Math.random();
    randomNumber = randomNumber * 30;
    randomNumber = Math.floor(randomNumber);
    randomNumbers.push(randomNumber);
}


for(let i = 0; i < randomNumbers.length; i++){
    if(randomNumbers[i] % 2 === 0){
        evenNumbers.push(randomNumbers[i]);
    }else{
        oddNumbers.push(randomNumbers[i]);
    }
}

console.log(randomNumbers);
console.log(evenNumbers);
console.log(oddNumbers);