// .map() is an array method that returns a new array 
// with callback function application for each elements

// declaring an array to be duplicated 
const names = ['stephen', 'rYan', '    luigisu']; 

let formattedNames = names.map(nameFormatter); // .map()
console.log(formattedNames);

// function to be used as a callback
function nameFormatter(element){
    let firstLetter = element.trim().charAt(0).toUpperCase();
    let precedeLetters = element.trim().slice(1, element.length).toLowerCase();
    return  firstLetter + precedeLetters;
}