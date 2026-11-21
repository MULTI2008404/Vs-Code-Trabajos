let nombres = [];
let visualizaciones = [];
let interacciones = [];
let tasas = [];

let totalVisualizaciones = 0;
let totalInteracciones = 0;
let sumaTasas = 0;

let altoRendimiento = 0;
let sinVisualizaciones = 0;
let publicacionesValidas = 0;
let videoMayor = -1;

for (let i = 0; i < 8; i++) {

    let nombre = prompt("Ingrese el nombre del video " + (i + 1));
    nombres[i] = nombre;

    let vistas;

    do {
        vistas = Number(
            prompt("Ingrese las visualizaciones de " + nombre)
        );

        if (!Number.isInteger(vistas) || vistas < 0) {
            alert("Ingrese una cantidad entera valida y no negativa.");
        }

    } while (!Number.isInteger(vistas) || vistas < 0);

    visualizaciones[i] = vistas;

    let cantidadInteracciones;

    do {
        cantidadInteracciones = Number(
            prompt("Ingrese las interacciones de " + nombre)
        );

        if (!Number.isInteger(cantidadInteracciones) ||
            cantidadInteracciones < 0) {
            alert("Ingrese una cantidad entera valida y no negativa.");
        }

    } while (
        !Number.isInteger(cantidadInteracciones) ||
        cantidadInteracciones < 0
    );

    interacciones[i] = cantidadInteracciones;

    totalVisualizaciones += vistas;
    totalInteracciones += cantidadInteracciones;

    if (vistas === 0) {

        tasas[i] = 0;
        sinVisualizaciones++;

    } else {

        tasas[i] = (cantidadInteracciones / vistas) * 100;

        sumaTasas += tasas[i];
        publicacionesValidas++;

        if (tasas[i] >= 10) {
            altoRendimiento++;
        }

        if (videoMayor === -1) {
            videoMayor = i;
        } else {
            if (tasas[i] > tasas[videoMayor]) {
                videoMayor = i;
            }
        }
    }
}

console.log("Reporte individual");

for (let i = 0; i < 8; i++) {

    console.log("");
    console.log("Video: " + nombres[i]);
    console.log("Visualizaciones: " + visualizaciones[i]);
    console.log("Interacciones: " + interacciones[i]);

    if (visualizaciones[i] === 0) {

        console.log("Tasa de interaccion: No calculable");
        console.log("Estado: Sin visualizaciones");

    } else {

        console.log("Tasa de interaccion: " + tasas[i].toFixed(2) + "%");

        if (tasas[i] >= 10) {
            console.log("Estado: Alto rendimiento");
        } else {
            console.log("Estado: Rendimiento normal");
        }
    }
}

console.log("Resumen de la campana");

console.log("Total de visualizaciones: " + totalVisualizaciones);
console.log("Total de interacciones: " + totalInteracciones);
console.log("Videos de alto rendimiento: " + altoRendimiento);
console.log("Videos sin visualizaciones: " + sinVisualizaciones);

if (publicacionesValidas > 0) {

    let promedioTasas = sumaTasas / publicacionesValidas;

    console.log("Promedio de tasas individuales: " +
        promedioTasas.toFixed(2) + "%");

} else {

    console.log("Promedio de tasas individuales: No calculable");
}

if (videoMayor !== -1) {

    console.log("Video con mayor tasa: " + nombres[videoMayor]);
    console.log("Mayor tasa de interaccion: " +
        tasas[videoMayor].toFixed(2) + "%");

} else {

    console.log("No hay videos con tasas calculables");
}

if (totalVisualizaciones > 0) {

    let tasaGlobal = (totalInteracciones / totalVisualizaciones) * 100;

    console.log("Tasa global de la campana: " +
        tasaGlobal.toFixed(2) + "%");

} else {

    console.log("Tasa global: No se puede calcular porque no existen visualizaciones");
}
