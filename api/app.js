const obtenerPersonaje = require("./library"); //llamando a library.js

//utilizaion de promise para traer la informacion de los heroes
obtenerPersonaje(3).then(personaje => {
    console.log("Nombre del personaje: " + personaje.name);
    console.log("Su genero es: " + personaje.gender);
    console.log("Tiene una altura de: " + personaje.height + " cm");
    console.log("Pesa: " + personaje.mass + " kg");
    console.log("Su cumpleaños es el: " + personaje.birth_year);   
});