// spread operator - an array and string property that iterates through every 
//                   index by simply putting '...' before the variable/objects name
//                   ...ArrName | ...String

const name = 'Stephen';
let nameLetters = [...name]; //iterates throught every index of str

console.log(nameLetters.join('-'));

const foods = ['Crinkles', 'Brownies', 'Apple'];
console.log(...foods); //iterates throught every index of the foods array