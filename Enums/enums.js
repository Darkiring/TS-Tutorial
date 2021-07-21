var role;
(function (role) {
    role[role["estudiante"] = 0] = "estudiante";
    role[role["profesor"] = 1] = "profesor";
})(role || (role = {}));
var persona = {
    nombre: "Rodrigo",
    edad: 34,
    direccion: {
        calle: "Arcoiris",
        comuna: "Brisas Del Eden"
    },
    cursos: ["Flutter", "Patrones de diseño", "SQL"],
    role: role.estudiante
};
console.log(persona);
