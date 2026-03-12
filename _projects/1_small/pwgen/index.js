function generatePassword(length, includeUpper, includeLower, includeNumbers, includeSymbols){

    const uppercaseLetters = "ABBCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}|:";

    let passCombo = "";
    let randomPassword = "";

    passCombo += includeUpper ? uppercaseLetters : "";
    passCombo += includeLower ? lowercaseLetters : "";
    passCombo += includeNumbers ? numbers : "";
    passCombo += includeSymbols ? symbols : "";

    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * passCombo.length);
        randomPassword += passCombo[randomIndex];
    }

    console.log(randomPassword);
    return randomPassword;
}

/*
const length = 24;
const includeUpper = true;
const includeLower = true;
const includeNumbers = true;
const includeSymbols = true;

generatePassword(length, includeUpper, includeLower, includeNumbers, includeSymbols);
*/

//for html
function randomPass(){
    const resultPassword = document.getElementById("resultPassword");
    const length = document.getElementById("length").value;

    if(length){
        let password = generatePassword(length, true, true, true, true);
        resultPassword.textContent = password;
    } else{
        let password = generatePassword(8, true, true, true, true);
        resultPassword.textContent = password;
    }
    
}