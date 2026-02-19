/*
 *  fetch() 
 *      - returns a [response (json)] object from a json file within the relative file path
 *  
 *  response OBJ 
 *      - returns a [value, values] object which are the json contents
 *
 *  value/values
 *      - the json object/s itself or rather the data that's useful on which you could now access
 *      - values returns multiple elements of array on which you could use the:
 *          * values.forEach( value )
 *  
 *  - make use of method chaining to do this process proceduraly
 */

fetch("baker.json")
    .then(response => response.json())
    .then(value => {
        console.log("1 baker");
        console.log(value) 
    });


fetch("bakers.json")
    .then(response => response.json())
    .then(values => {
        console.log("all bakers");
        console.log(values);
        console.log("using forEach");
        values.forEach(value => { console.log(value) })
        values.forEach(value => {
            console.log(value.name + " is " + value.age + " years old.");
        });
    });
