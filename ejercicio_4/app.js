
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon 
//y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("wartortle").then(pokemon => {
    console.log("Nombre del pokemon:", pokemon.forms[0].name);
    pokemon.abilities.forEach(habilidad => console.log("Su habilidad es:", habilidad.ability.name));
});
