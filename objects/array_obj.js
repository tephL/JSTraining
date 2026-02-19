let a = {
    name: 'Stephen',
    sex: 'M',
    age: 19,
    username: 'tephL',
    password: 12282006
}

const accounts = [a];

let b = {
    name: 'Suvi',
    age: 18,
    sex: 'F',
    username: 'babydoll',
    password: 012008
}

accounts.push(b);

/*
for(const account in accounts){
    console.log(accounts[account]);
}
*/

accounts.forEach(element => {console.log(element.name);});

let accountNames = accounts.map(element => element.name);

let femaleAccounts = accounts.filter(element => element.sex === 'F');

console.log(accountNames);
console.log(femaleAccounts);