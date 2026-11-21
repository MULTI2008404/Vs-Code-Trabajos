let nombres = [];
let puntuaciones = [];

let suma = 0;
let ganador = 0;
let expertos = 0;
let superiores = 0;

for (let i = 0; i < 8; i++) {

    let nombre = prompt("Ingrese el nombre del jugador " + (i + 1));
    nombres[i] = nombre;

    let puntuacion;

    do {
        puntuacion = Number(
            prompt("Ingrese la puntuacion de " + nombre)
        );

        if (isNaN(puntuacion) || puntuacion < 0) {
            alert("Ingrese una puntuacion valida.");
        }

    } while (isNaN(puntuacion) || puntuacion < 0);

    puntuaciones[i] = puntuacion;

    suma = suma + puntuacion;

    if (i === 0) {
        ganador = 0;
    } else {
        if (puntuaciones[i] > puntuaciones[ganador]) {
            ganador = i;
        }
    }

    if (puntuaciones[i] >= 1000) {
        expertos++;
    }
}

let promedio = suma / 8;

console.log("Ranking de jugadores");

for (let i = 0; i < 8; i++) {

    let categoria;

    if (puntuaciones[i] < 500) {
        categoria = "Principiante";
    } else if (puntuaciones[i] < 1000) {
        categoria = "Intermedio";
    } else {
        categoria = "Experto";
    }

    console.log(nombres[i] + " - " +
        puntuaciones[i] + " puntos - " + categoria);

    if (puntuaciones[i] > promedio) {
        superiores++;
    }
}

let porcentaje = (expertos * 100) / 8;

console.log("Resultados generales");
console.log("Ganador: " + nombres[ganador]);
console.log("Puntuacion del ganador: " + puntuaciones[ganador]);
console.log("Promedio general: " + promedio.toFixed(2));
console.log("Jugadores que superaron el promedio: " + superiores);
console.log("Porcentaje de expertos: " + porcentaje + "%");
