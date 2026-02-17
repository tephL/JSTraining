/*  PROMISE
 *
 *      - 
 *
 *  1. Walk dog
 *  2. Clean kitchen
 *  3. Take out the trash
 *
 */


function walkDog(callback){
    setTimeout(() => {
        console.log("you walked the dog");
        callback();
    }, 1500);
}

function cleanKitchen(callback){
    setTimeout(() => {
        console.log("you cleaned kitchen");
        callback();
    }, 2500);
}

function takeOutTrash(callback){
    setTimeout(() => {
        console.log("you took out trash");
        callback();
    }, 500);
}


// callback hell method

/*
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("finished!!");
        })
    })
})
*/


/*  PROMISE Implementation
 *      - this allows you to reject or resolve a function giving you a status update whether to continue the method chain
 *      - you could define what the Promise status would depend on
 *
 *      new Promise((resolve, reject) => { _code to run_})
 */

function p_walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you walked dog");
        }, 1500);
    });
}

function p_cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const dirtyKitchen = true;

            if(dirtyKitchen){
                reject("cant leave or continue if the kicthen is dirty");
            } else{
                resolve("you cleaned kitchen");
            }

            
        }, 2500);
    });
}

function p_takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you took out trash");
        }, 500);
    });
}


/*  METHOD CHAINING 
 *      .then() - and value as the parameter
 *      .catch() - for catching the rejected promise
 */
p_walkDog().then(value => { console.log(value); return p_cleanKitchen() })
            .then(value => { console.log(value); return p_takeOutTrash() })
            .then(value => { console.log(value); console.log("done all with method chaining !"); })
            .catch(reject => console.warn(reject) );

