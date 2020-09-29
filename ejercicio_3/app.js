
const obtenerPokemon = require("./library");

// Codigo funcion callback

function callback (pokemon){
    //nombre pokemon
    console.log("Nombre del pokemon: ", pokemon.forms[0].name);
    //habilidad
    pokemon.abilities.forEach(habilidad => 
        console.log("Sus habilidades son: ", habilidad.ability.name));
}


// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("bulbasaur", callback);
