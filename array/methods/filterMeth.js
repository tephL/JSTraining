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

// ========================================

// declaring an array of people
const persons = [
    {name: "stephen", age: 19},
    {name: "StephenPlayz", age: 11},
    {name: "steptsu", age: 14},
];

// .filter
const legals = persons.filter((person) => {
    // T/F condition
    // true gets passed on to the new array legals
    return person.age >= 18; 
});

console.log(`legal age ppls: ${legals}`);
console.log(`unfiltered: ${persons}`);
