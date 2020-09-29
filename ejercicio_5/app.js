const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function callback(persona) {
    persona.results.forEach(datos => {

        console.log("Genero:", datos.gender,
        "\nNombre y Apellido:", datos.name.first, datos.name.last,
        "\nDirección:", datos.location.street.name, ", Altura:", datos.location.street.number,
        ", Ciudad:", datos.location.city,
        ", Estado:", datos.location.state,
        ", Pais:", datos.location.country, 
        ", Codigo postal: ", datos.location.postcode,     
        "\nEmail:", datos.email,
        "\nUsuario:", datos.login.username,
        "\nPassword:", datos.login.password);
    })
}
// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una 
//función que recibe el objeto persona extraido
obtenerPersonaFake(callback);