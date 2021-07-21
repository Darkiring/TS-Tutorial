enum role {
  estudiante,
  profesor,
}
let persona = {
  nombre: "Rodrigo",
  edad: 34,
  direccion: {
    calle: "Arcoiris",
    comuna: "Brisas Del Eden",
  },
  cursos: ["Flutter", "Patrones de diseño", "SQL"],
  role: role.estudiante,
};

console.log(persona);
