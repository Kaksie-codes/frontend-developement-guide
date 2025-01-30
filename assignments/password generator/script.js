// select elements from the DOM
const passwordDisplay = document.querySelector('.password-output input');
const copyButton = document.querySelector('.password-output span');
const passwordLengthSlider = document.querySelector('.pass-length input');
const upperCaseCheckbox = document.getElementById('uppercase');
const numberCheckbox = document.getElementById('numbers');
const symbolCheckbox = document.getElementById('symbols');
const strenghtIndicator = document.getElementById('strenght-indicator');
const generatePasswordButton = document.querySelector('.generate-btn');
const passwordLength = document.querySelector('.details span')

// console.log(upperCaseCheckbox)
passwordLength.textContent = passwordLengthSlider.value;

passwordLengthSlider.addEventListener('change', () => {
    passwordLength.textContent = passwordLengthSlider.value;
    displayPassword();
})

const generateASCIICodes = (low, high) => {
    let array = [];
    for (let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}
const generatePassword = (includeNumericChar, includeSymbolChar, includeUppercaseChar) => {
    let charCodes = [];    
    let lowerCaseCharCodes = generateASCIICodes(97, 122);
    let upperCaseCharCodes = generateASCIICodes(65, 90);
    let numberCharCodes = generateASCIICodes(48, 57);
    let symbolCharacterCodes = generateASCIICodes(33,47).concat(generateASCIICodes(58, 64)).concat(generateASCIICodes(91,96)).concat(generateASCIICodes(123,126))
    
    charCodes = charCodes.concat(lowerCaseCharCodes);

    if(includeNumericChar){
        charCodes = charCodes.concat(numberCharCodes);
    }
    if(includeSymbolChar){
        charCodes = charCodes.concat(symbolCharacterCodes);
    }
    if(includeUppercaseChar){
        charCodes = charCodes.concat(upperCaseCharCodes);
    }
    // console.log('charCodes +++>>>', charCodes)
    let characters = [];
    for(let i = 0; i < charCodes.length; i++){
        characters.push(String.fromCharCode(charCodes[i]));
    }

    // console.log('characters +++>>>', characters)

    let password = '';
    for(let i = 0; i < passwordLengthSlider.value; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex];
    }
    return password;
}

generatePasswordButton.addEventListener('click', () => {
   displayPassword()
})

const displayPassword = () => {
    const includeUppercaseChar = upperCaseCheckbox.checked;
    const includeSymbolChar = symbolCheckbox.checked;
    const includeNumericChar = numberCheckbox.checked;
    // console.log({includeUppercaseChar, includeNumericChar, includeSymbolChar})
    const password = generatePassword(includeNumericChar, includeSymbolChar, includeUppercaseChar);
    console.log({password, length: password.length})
    passwordDisplay.value = password;
    displayPasswordStrenght();
}

const displayPasswordStrenght = () => {
    const lowercaseCharacters = /[a-z]/g;
    const upperCaseCharacters = /[A-Z]/g;
    const numberCharacters = /[0-9]/g;
    const specialCharacters = /[^a-zA-Z0-9\s]/g;

    let strength = 0;
    if(passwordDisplay.value.length >= 12){
        strength += 15;
    }
    if(passwordDisplay.value.match(lowercaseCharacters) !== null){
        strength += 10;
    }
    if(passwordDisplay.value.match(upperCaseCharacters) !== null){
        strength += 25;
    }
    if(passwordDisplay.value.match(numberCharacters) !== null){
        strength += 25;
    }
    if(passwordDisplay.value.match(specialCharacters) !== null){
        strength += 25;
    }

    if(strength > 75){
        strenghtIndicator.innerHTML = `
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
    `
    }else if(strength > 50){
        strenghtIndicator.innerHTML = `
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
        <span></span>
    `
    }else if(strength > 25){
        strenghtIndicator.innerHTML = `
        <span class="active"></span>
        <span class="active"></span>
        <span></span>
        <span></span>
    `
    }else{
        strenghtIndicator.innerHTML = `
        <span class="active"></span>
        <span></span>
        <span></span>
        <span></span>
    `
    }
    
}


// const lowercaseCharacters = /[a-z]/g;
// const upperCaseCharacters = /[A-Z]/g;
// const numberCharacters = /[0-9]/g;
// const specialCharacters = /[^a-zA-Z0-9\s]/g;
// let password = '1234#$%&'

// console.log(password.match(specialCharacters))