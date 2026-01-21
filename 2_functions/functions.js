// FUNCTIONS
// 3 different ways
// all could have parameters by adding args inside ()

// normal way of making a function
function sayHello(){
    console.log('Hello');
}
sayHello();

// making a function expression
const sayHi = function(){console.log('Hi! I am from a function expression')}
sayHi();

// an arrow function
// for one time use only so that we dont occupy any function name
// cant be used for 'this' keyword in constructors
const sayYo = () => {console.log('yo, i am the arrow function.');
                     console.log('im so cool');
                    };    
sayYo();