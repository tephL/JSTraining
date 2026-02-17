// CALLBACK HELL
//  - an old pattern to handle async functions
//  - where youd see a pyramid like code that nests callbacks

// made async with setTimeout to simulate delays

function eat(){
    setTimeout(() => {
        console.log("im eating");
    }, 3000);
}

function drink(){
    setTimeout(() => {
        console.log("im drinking");
    }, 1000);

    // console.log("im drinking");
}

function cooking(){
    setTimeout(() => {
        console.log("im cooking");
    }, 3000);

    // console.log("im cooking");
}

function washDishes(){
    setTimeout(() => {
        console.log("im washing the dishes");
    }, 4000);

    //console.log("im washing the dishes");
}

// this approach is synchronous which means all of it executes at the same times

/*
cooking();
eat();
drink();
washDishes();
console.log("done all food routine");
*/



// ASYNCHRONOUS - which means that code must execute imperatively, we'll have to use callbacks for the functions, but this is still callback hell

function eat(callback){
    setTimeout(() => {
        console.log("done eating");
        callback();
    }, 3000);
}

function drink(callback){
    setTimeout(() => {
        console.log("done drinking");
        callback();
    }, 1000);
}

function cooking(callback){
    setTimeout(() => {
        console.log("done cooking");
        callback();
    }, 3000);
}

function washDishes(callback){
    setTimeout(() => {
        console.log("done washing the dishes");
        callback();
    }, 4000);
}

// we execute it with arrow functions (or anonymous...)

cooking(() => {
    eat(() => {
        drink(() => {
            washDishes(() => {
                console.log("every task completed !");
            })
        })
    })
})
