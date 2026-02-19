const letters = ['a', 'c', 'v', 'b', 'h', 'a'];
letters.sort();
console.log(letters); 

const nums = [5, 6, 4, 3, 8, 8, 6 ,2, 10, 1];
// nums.sort(); --> this method turns int as a string
nums.sort((a, b) => a - b);
console.log(nums); 

let a = {
    name: 'Stephen',
    sex: 'M',
    age: 19 
}

let b = {
    name: 'Suvi',
    sex: 'F',
    age: 18 
}

let c = {
    name: 'Monchichi',
    sex: 'M',
    age: 5 
}

let d = {
    name: 'Melo',
    sex: 'F',
    age: 6
}

let e = {
    name: 'Bnoy',
    sex: 'F',
    age: 2 
}

const people = [a, b, c, d, e];

people.sort((a, b) => b.age - a.age); // for ascending order
people.sort((a, b) => b.age - a.age); // for descending order
console.log('people in descending age order:');
console.log(people);

console.log('people sorted by their name:');
people.sort((a, b) => b.name.localeCompare(a.name)); // sorting with Str, we use localeCompare() instead of ~ - ~ 
console.log(people);