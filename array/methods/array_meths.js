let fruits = [];

fruits.push('apple');
fruits.push('kiwi');
fruits.push('strawberry');
fruits.push('banana');
fruits.push('mango');

console.log(fruits);

let remove_index = 0;

fruits.splice(remove_index, 1); // from index, remove # of elements
fruits[0] = 'CHOCO';

console.log(fruits);

