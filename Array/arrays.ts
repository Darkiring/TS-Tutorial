let personaData = {
    nombre: 'Rodrigo',
    edad: 34,
    direccion: {
        calle: 'Arcoiris',
        comuna: 'Brisas Del Eden'
    },
    cursos: ['Flutter', 'Patrones de diseño', 'SQL']
};

{ 
    /*
        The array type can be:
        any[] can contain = [123, 1.23, -12, 'Hey', true] 
        number[] can only contain = [123, 1.23, -12]
        string[] can only contain = ['Hey', 'wasup']
        boolean[] can only contain =  [true, false]
    */ 
}
let hobbies: string[]; 
hobbies = ['Futbol', 'Hola', 'Lo demas'];

hobbies.map(value => {
    console.log(value.toUpperCase());
});
console.log(hobbies);
