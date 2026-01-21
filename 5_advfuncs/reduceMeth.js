// .reduce() = an array method that turns an 
//             array into ONE value depending on 
//             the return condition of the callback function

const grades = [88, 98, 76, 78, 85, 89, 92];

let sum = grades.reduce(getSum);
console.log(sum);

let min = grades.reduce(getMin);
console.log(min);

function getSum(accumulator, element){
    // 0 + 88 = 88 (becomes the next acummulator)
    // 88 + 98 = 186 (becomes the next accumulator)
    console.log(`${accumulator} + ${element}`);
    return accumulator + element;
}

function getMin(accumulator, element){  
    // 88 ? e 
    // 88 > 98 ? false
    console.log(`${accumulator} > ${element}`);
    return accumulator > element ? element : accumulator; 
}