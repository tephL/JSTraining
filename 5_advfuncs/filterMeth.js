// .filter() is an array method that returns a new array of elements that have passed 
// in the callback function by having a bool status of true

let usernames = ['1234', '12345678', '23466fdv', 'stephensopogi', 'pogiako'];

moreThanEight = usernames.filter(withNums); 
console.log(`Valid passwords: ${moreThanEight.join(' | ')}`);


// the callback function that determines the condition of 
// what to return to the new string
function withNums(element){
    return element.length >= 8;
}