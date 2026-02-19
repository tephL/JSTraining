
// 1. switch variable values
let a = 1;
let b = 2;

[a, b] = [b, a];  


// 2. switch the index of an array
const foods = ['crinkles', 'brownies', 'cinnamonroll'];

[foods[0], foods[2]] = [foods[2], foods[0]];


// 3. assign array elements as a variable
const [first, second, ...remaining] = foods;
const [...allColors] = foods;  // could use rest parameters to get remaining

console.log(first);
console.log(second);
console.log(remaining);

console.log(allColors);


// 4. extract values and turn it into variables from objects
let baker1 = {
    name: 'Stephen',
    race: 'Asian',
    age: 19,
    sex: 'M',
    fav_food: first,
}

let baker2 = {
    name: 'tephL',
    race: 'Gamer',
    age: 15,
    sex: 'M',
}

const bakers = [baker1, baker2];

bakers.forEach(element => {
    // declare key name to extract from the object inside brackets
    let {name, race, fav_food='none'} = element;
    //add ~ key = '' ~ for a default value in cases where key for that object doesnt exist
    console.log(name + ' is ' + race);
    console.log(fav_food + ' is his fav food');
});


//  extract object key:values with a function
//  just like a normal one but declaeing destructuring in the function's parameters
function displayBakerInfo({name, age, sex}){
    console.log(`${name} is a ${sex}, and is ${age} years old`);
}

displayBakerInfo(baker1);