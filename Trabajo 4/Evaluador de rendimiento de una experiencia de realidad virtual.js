let nombres = [];
let poligonos = [];
let fps = [];
let estados = [];

let optimizadas = 0;
let sumaFPS = 0;
let excesoPoligonos = 0;
let fpsInsuficientes = 0;
let ambosProblemas = 0;

let escenaMenor = 0;

for (let i = 0; i < 7; i++) {

    let nombre = prompt("Ingrese el nombre de la escena " + (i + 1));
    nombres[i] = nombre;

    let cantidadPoligonos;

    do {
        cantidadPoligonos = Number(
            prompt("Ingrese la cantidad de poligonos de " + nombre)
        );

        if (!Number.isInteger(cantidadPoligonos) ||
            cantidadPoligonos < 0) {
            alert("Ingrese una cantidad entera y no negativa.");
        }

    } while (
        !Number.isInteger(cantidadPoligonos) ||
        cantidadPoligonos < 0
    );

    poligonos[i] = cantidadPoligonos;

    let velocidadFPS;

    do {
        velocidadFPS = Number(
            prompt("Ingrese los FPS de " + nombre)
        );

        if (isNaN(velocidadFPS) || velocidadFPS < 0) {
            alert("Ingrese una cantidad valida de FPS.");
        }

    } while (isNaN(velocidadFPS) || velocidadFPS < 0);

    fps[i] = velocidadFPS;

    sumaFPS = sumaFPS + velocidadFPS;

    if (i === 0) {
        escenaMenor = 0;
    } else {
        if (fps[i] < fps[escenaMenor]) {
            escenaMenor = i;
        }
    }

    if (cantidadPoligonos <= 15000 && velocidadFPS >= 72) {

        estados[i] = "Optimizada";
        optimizadas++;

    } else if (cantidadPoligonos > 15000 && velocidadFPS < 72) {

        estados[i] = "Ambos problemas";
        ambosProblemas++;

    } else if (cantidadPoligonos > 15000) {

        estados[i] = "Exceso de poligonos";
        excesoPoligonos++;

    } else {

        estados[i] = "FPS insuficientes";
        fpsInsuficientes++;

    }
}

let promedioFPS = sumaFPS / 7;

console.log("Reporte de escenas");

for (let i = 0; i < 7; i++) {

    console.log("-----------------------------");
    console.log("Escena: " + nombres[i]);
    console.log("Poligonos: " + poligonos[i]);
    console.log("FPS: " + fps[i]);
    console.log("Clasificacion: " + estados[i]);

    if (poligonos[i] > 15000) {
        console.log("Recomendacion: Reducir la cantidad de poligonos.");
    }

    if (fps[i] < 72) {
        console.log("Recomendacion: Mejorar el rendimiento de FPS.");
    }

    if (estados[i] === "Optimizada") {
        console.log("La escena cumple todos los criterios.");
    }
}

console.log("Resumen del proyecto");

console.log("Escenas optimizadas: " + optimizadas);
console.log("Escenas con exceso de poligonos: " + excesoPoligonos);
console.log("Escenas con FPS insuficientes: " + fpsInsuficientes);
console.log("Escenas con ambos problemas: " + ambosProblemas);

console.log("Promedio de FPS: " + promedioFPS.toFixed(2));

console.log("Escena con menor rendimiento: " + nombres[escenaMenor]);
console.log("FPS mas bajos: " + fps[escenaMenor]);

if (optimizadas === 7) {
    console.log("Proyecto apto para prueba de usuario");
} else {
    console.log("Proyecto no apto para prueba de usuario");
    console.log("Se deben corregir las escenas que presentan problemas.");
}
