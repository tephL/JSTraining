/*
 *  JSON - Javascript Object Notation
 *
 *  JSON.stringify();
 *      - converts json object to string Object
 *
 *  JSON.parse()
 *      - converts string to json object
 *
 */

function stringifyEx(){
    let account1 = {"name":"Stephen", "password":"tephl1228", "age":19, "fav":["crinkles", "brownies"]}

    let result = JSON.stringify(account1);
    console.log("--json to string");
    console.log("json: " + account1)
    console.log("string: " + result)
}

function parseEx(){
    let account1 = `{"name":"Stephen", "password":"tephl1228", "age":19, "fav":["crinkles", "brownies"]}`;

    let result = JSON.parse(account1);
    console.log("--string to json");
    console.log("string: " + account1)
    console.log("json: " + result)
}


stringifyEx();
parseEx();
