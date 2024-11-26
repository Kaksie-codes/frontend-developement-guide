function greetings(){
    console.log('Hello, Universe!');
    console.log('Hello, World!');
    console.log('Hello, Africa!');
    console.log('Hello, West Africa!');
    console.log('Hello, Nigeria!');
    console.log('');
}
// greetings();
// greetings();
// greetings();
const displayCarNames = () => {
    console.log("Benz")
    console.log("Toyota")
    console.log("ferrari")
    console.log("lamboghini")
    console.log("keke")
}

// displayCarNames()

const calculateSum = (num1 = 2, num2 = 3) => {
    console.log(num1)
    console.log(num2)
    console.log(num1 + num2)
}

// calculateSum(100, 200)
// calculateSum(10001)
// calculateSum(100, 4)

// let num;
// console.log({num})

const calculate = (num1, num2, operation) => {
    console.log({num1, num2, operation})
    if(operation === "add" || operation === "addition"){
        console.log(num1 + num2)
    }else if(operation === "sub" || operation === "subtract"){
        console.log(num1 - num2)
    }else if(operation === "mul" || operation === "multiply"){
        console.log(num1 * num2)
    }else if(operation === "div" || operation === "divide"){
        console.log(num1 / num2)
    }else if(operation === "mod" || operation === "modulus"){
        console.log(num1 % num2)
    }else{
        console.log("Invalid operation")
    }
}

// calculate(10, 2, "addidas");

const getRelationshipStatus = (age) => {
    // return    
    if(age >= 18){
        console.log('before returning true')
        return true;
        console.log('after returning true')
    }else{
        console.log('before returning false')
        return false
        console.log('after returning false')
    }
}

const isNotSingle = getRelationshipStatus(29);

const isAfrican = true;
console.log(isNotSingle);


const details = (name, height) => {
    if(height >= 2){
        console.log(`${name} you are ${height}m tall, and you qualify to play basketball, voleyball and football.`)
    }else if(height >= 1.7){
        console.log(`${name} you are ${height}m tall, and you qualify to play voleyball and football.`)
    }else if (height >= 1.2){
        console.log(`${name} you are ${height}m tall, and you qualify to play football.`)
    }else{
        console.log(`${name} you are ${height}m tall, and you do not qualify to play any sport.`)
    }
}

details('Mfoniso', 2)