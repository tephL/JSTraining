/*  fetch(url, {method})
 *      - a tool to get data via a url
 *  
 *  process:
 *      * fetch 
 *          - returns a response obj
 *          - response has properties that could be used but for it to be really
 *            useful, we have to jsonify it
 *
 *      * response.json()
 *          - converts the original response object but now as a jsonified one for
 *            better usability
 *          - access its property using dot (ex: .name)
 *          - assigning this to a variable allows better readability
 */


/* POKEAPI example using .then()

fetch("https://pokeapi.co/api/v2/pokemon/torchic")
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.log(error));

*/


// async - await method

export async function getPokemon(name){
    
    try{

        // 1. the main fetch
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        // 1.2. confirming the fetch succession
        if(!response.ok){ throw new Error("cant get it"); }

        // 2. jsonifying the response
        const dataInJson = await response.json();

        // 3. accessing the json object for use
        let weight = dataInJson.weight;
        return {
            "weight":dataInJson.weight,
            "name":name,
            "status": true
        };

    } catch(error){

        return {
            "name":name,
            "status": false
        };

    } 

}


