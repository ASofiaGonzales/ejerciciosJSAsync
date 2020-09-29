
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve 
//la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(persona => {
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
});
