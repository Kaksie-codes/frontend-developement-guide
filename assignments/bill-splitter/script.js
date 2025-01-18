// select all the neccessary elements from the DOM
const billInput = document.querySelector('#bill');
const peopleInput = document.getElementById('people');
const tipPercentButtons = document.querySelectorAll('.tip-Percent');
const customTipPercentButton = document.getElementById('custom');
const tipAmountElement = document.getElementById('tip-amount');
const totalAmountElement = document.getElementById('total-amount');
const resetBtn = document.getElementById('reset-btn');

let bill;
let tipPercent;
let noOfPeople = parseInt(peopleInput.value);

// Event listeners
billInput.addEventListener('keyup', () => {
    bill = parseFloat(billInput.value); 
    calculateBill()
})

customTipPercentButton.addEventListener('click', () => {
    const customTipPercent = prompt('Enter custom tip percentage');
    tipPercent = parseFloat(customTipPercent)/100;

    calculateBill();
})
peopleInput.addEventListener('keyup', () => {
   noOfPeople = parseInt(peopleInput.value);
    console.log(noOfPeople);
    if(noOfPeople < 1) {
        peopleInput.value = 1;
        noOfPeople = parseInt(peopleInput.value);
        return;
    }
    calculateBill()
})

const calculateBill = () => {
    console.log({bill, noOfPeople,tipPercent})
    if(isNaN(bill) || isNaN(noOfPeople) || isNaN(tipPercent)){
        return;
    }
    const tip = (bill * tipPercent)/noOfPeople;
    tipAmountElement.textContent = `$ ${tip.toFixed(2)}`;
    const total = (bill/noOfPeople) + tip;
    totalAmountElement.textContent = `$ ${total.toFixed(2)}`;
    resetBtn.classList.remove('disabled')
}

resetBtn.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = 1;    
    tipPercent = '';
    tipAmountElement.textContent = '$ 0.00';
    totalAmountElement.textContent = '$ 0.00';
    resetBtn.classList.add('disabled');
    noOfPeople = parseInt(peopleInput.value);    
})

for(const button of tipPercentButtons){
    // console.log(button.textContent)
    button.addEventListener('click', () => {        
        tipPercent = parseInt(button.textContent.slice(0, -1));
        tipPercent = tipPercent/100;
        calculateBill();
    })
}

// for(let i = 0; i <tipPercentButtons.length; i++) {
//     console.log(tipPercentButtons[i].textContent);
// }