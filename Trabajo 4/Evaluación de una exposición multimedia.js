let nombres = [];
let visitantes = [];
let calificaciones = [];

let totalVisitantes = 0;
let sumaCalificaciones = 0;
let experienciaMayor = 0;
let exitosas = 0;

for (let i = 0; i < 5; i++) {

    let nombre = prompt("Ingrese el nombre de la experiencia " + (i + 1));
    nombres[i] = nombre;

    let cantidadVisitantes;

    do {
        cantidadVisitantes = Number(
            prompt("Ingrese la cantidad de visitantes de " + nombre)
        );

        if (isNaN(cantidadVisitantes) ||
            cantidadVisitantes < 0 ||
            !Number.isInteger(cantidadVisitantes)) {
            alert("Ingrese una cantidad entera valida de visitantes.");
        }

    } while (
        isNaN(cantidadVisitantes) ||
        cantidadVisitantes < 0 ||
        !Number.isInteger(cantidadVisitantes)
    );

    visitantes[i] = cantidadVisitantes;

    let calificacion;

    do {
        calificacion = Number(
            prompt("Ingrese la calificacion de " + nombre + " (1 a 10)")
        );

        if (isNaN(calificacion) ||
            calificacion < 1 ||
            calificacion > 10) {
            alert("Ingrese una calificacion entre 1 y 10.");
        }

    } while (
        isNaN(calificacion) ||
        calificacion < 1 ||
        calificacion > 10
    );

    calificaciones[i] = calificacion;

    totalVisitantes = totalVisitantes + cantidadVisitantes;
    sumaCalificaciones = sumaCalificaciones + calificacion;

    if (i === 0) {
        experienciaMayor = 0;
    } else {
        if (visitantes[i] > visitantes[experienciaMayor]) {
            experienciaMayor = i;
        }
    }

    if (cantidadVisitantes >= 100 && calificacion >= 8) {
        exitosas++;
    }
}

let promedio = sumaCalificaciones / 5;
let porcentaje = (exitosas * 100) / 5;

console.log("Reporte individual");

for (let i = 0; i < 5; i++) {

    console.log("");
    console.log("Experiencia: " + nombres[i]);
    console.log("Visitantes: " + visitantes[i]);
    console.log("Calificacion: " + calificaciones[i]);

    if (visitantes[i] >= 100 && calificaciones[i] >= 8) {
        console.log("Estado: EXITOSA");
    } else {
        console.log("Estado: NO EXITOSA");
    }
}

console.log("Resumen general");
console.log("Experiencia con mas visitantes: " + nombres[experienciaMayor]);
console.log("Cantidad de visitantes: " + visitantes[experienciaMayor]);
console.log("Total de visitantes: " + totalVisitantes);
console.log("Promedio de calificaciones: " + promedio.toFixed(2));
console.log("Experiencias exitosas: " + exitosas);
console.log("Porcentaje de experiencias exitosas: " + porcentaje + "%");

if (porcentaje >= 60) {
    console.log("Recomendacion: La exposicion tiene buena aceptacion.");
} else {
    console.log("Recomendacion: Se recomienda mejorar las experiencias.");
}
