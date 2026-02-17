import { getPokemon } from './api.js';



// --- DOM ---


// event delegation for input container
const input = document.getElementById("input");
const input_content = document.getElementById("input_content");

input.addEventListener("click", event => {

    let evid = event.target.id; // alias for elements's id detection
    
    if(evid == "input_submit"){
        let pokemonName = input_content.value;
        input_content.value = '';
        renderPokemonDetails(pokemonName);
    }

});



// rendering pokemon details through local API
const output_weight = document.getElementById("output_weight");

async function renderPokemonDetails(name){

    // loading display while waiting for response
    output_weight.textContent = '...';
    const pokemon = await getPokemon(name);
    
    if(!pokemon.status){
        // special condition for suvi
        if(pokemon.name == "suvi"){
            output_weight.textContent = `suvi is stephen's baby`;
            return;
        }
        output_weight.textContent = `${pokemon.name} isnt a pokemon!`;
        console.log("error");
        return;
    }

    output_weight.textContent = `${pokemon.name} is ${pokemon.weight}kg`;
    console.log(pokemon.weight);

}
