// function func1(callback){
//     setTimeout(() => {console.log(1); callback()}, 3000);
// }

// function func2(){
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
// }

// func1(func2);

function makeCoffee(callback){
    setTimeout(() => {console.log('coffee is done now');callback()}, 3000);
}

function makeBread(callback){
    setTimeout(() => {console.log('bread done'), callback()}, 1000);
}

function eatBF(){
    console.log('eating breakfast now');
}

// this approach is called: Callback Hell

makeCoffee(makeBread(eatBF));

// or 
/*
 * makeCoffee(() => {
 *  makeBread(() => {
 *      eatBF();
 *  });
 * });
 */


