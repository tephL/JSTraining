//  .forEach() is an array method for array iteration without
//  the use of traditional for() loop 

const num = [1, 2, 3, 4, 5]; //array to iterate through

let sum = 0;
num.forEach(sumGetter); //forEach
console.log(sum); 

let find = 6; 
let findStatus = false;
num.forEach(numFinder); //forEach
console.log(findStatus);

// callback function executed per element of array
function sumGetter(element){
    sum += element;
}

function numFinder(element){
    if(element == find){
        console.log(element);
        findStatus = true;
    }
    console.log(element);
}