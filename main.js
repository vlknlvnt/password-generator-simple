// Getting letters, numbers and symbols

// Starting from 97, pick one among 26 codes (which stands for letters) randomly
const getLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);   
}

const getNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const getSymbol = () => {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

const randomFunctions = { getLower, getUpper, getNumber, getSymbol };

const generatePassword = () => {

    const inputValue = document.getElementById('pass-length').value; // Getting input value
    const length = inputValue; // Length equals in input value
    let generatedPassword = '';
    for ( let x = 0; x < length; x++) // For loop goes as long as length
    generatedPassword += Object.values(randomFunctions)[Math.floor(Math.random() * 4)]()

    return generatedPassword;
}

// Selecting items in HTML body 
const showResult = document.getElementById('result');
const createBtn = document.getElementById('create-pass');
const copyBtn = document.getElementById('copy');

// Showing generated password in HTML
createBtn.addEventListener('click', () => {
    showResult.innerText = generatePassword(); // show the result of generatePassword as an innertext
});

// Copying the password
copyBtn.addEventListener('click', () => {
    const password = showResult.innerText;
    if (!password) // if there is no password, do nothing
    return

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(password);

   // After copyying, if password exists, message appears
   if (password) {

        var modalArea = document.getElementById('modal');

        setTimeout(function () {modalArea.classList.add('copymessage')}, 100);
        setTimeout(function () {modalArea.classList.remove('copymessage')}, 4000);

   }

})







