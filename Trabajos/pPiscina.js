let edad;
let estatura;

edad = Number(prompt("Ingrese su edad:"));
estatura = Number(prompt("Ingrese su estatura en metros:"));


if (edad >= 15 && estatura >= 1.5) {
    alert("Eres mayor de edad y tienes la estatura requerida.");
} else {
    alert("No cumples con los requisitos.");
}   