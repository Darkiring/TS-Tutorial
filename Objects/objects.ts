let persona: {
    // Con asinacion de tipos
    // Si se retira esto lo hara por inferencia
    nombre: string,
    edad: number,
    direccion: {
        calle: string,
        comuna: string
    }
} = {
    nombre: 'Rodrigo',
    edad: 34,
    direccion: {
        calle: 'Arcoiris',
        comuna: 'Brisas Del Eden'
    }
};

persona.nombre;
persona.edad;

console.log(persona);
