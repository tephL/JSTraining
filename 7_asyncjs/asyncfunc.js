/* async - a type of function that runs fucntions within it asynchronously
 *  
 * await - an object that waits for the promise value within a function
 *       - could only be used within an async function
 *
 * structure
 *
 *      async function xxx(){ 
 *          const x = await function();
 *          console.log(x);
 *      }
 */       

function takeABath(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookBath = true; // decides if reject or resolve

            if(tookBath){
                resolve("you took a bath (3s)");
            } else{
                reject("u didnt take a bath... boo (3s)");
            }
        }, 3000);
    });

}


function brushTeeth(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const brushed = true; // decides if reject or resolve

            if(brushed){
                resolve("you brushed your teeth (2s)");
            } else{
                reject("u didnt brush ur teeth... boo (2s)");
            }
        }, 2000);
    });

}


function eatBreakfast(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ateBreakfast = true; // decides if reject or resolve

            if(ateBreakfast){
                resolve("you ate nomnom (1s)");
            } else{
                reject("u didnt eat... boo (1s)");
            }
        }, 1000);
    });

}


// original way of doing it (method chaining)
// takeABath().then((value) => {console.log(value)});


// with async function

async function doRoutine(){
    
    const takeABathResult = await takeABath();
    console.log(takeABathResult);
    

    const eatBreakfastResult = await eatBreakfast();
    console.log(eatBreakfastResult);


    const brushTeethResult = await brushTeeth();
    console.log(brushTeethResult);

}

doRoutine();
