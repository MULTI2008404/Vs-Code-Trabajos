let nombres = [];
let duraciones = [];
let fps = [];
let fotogramas = [];

let total = 0;
let secuenciaMayor = 0;

for (let i = 0; i < 6; i++) {

    let nombre = prompt("Ingrese el nombre de la secuencia " + (i + 1));
    nombres[i] = nombre;

    let duracion;

    do {
        duracion = Number(
            prompt("Ingrese la duracion en segundos de " + nombre)
        );

        if (isNaN(duracion) || duracion <= 0) {
            alert("La duracion debe ser un numero mayor que cero.");
        }

    } while (isNaN(duracion) || duracion <= 0);

    duraciones[i] = duracion;

    let velocidad;

    do {
        velocidad = Number(
            prompt("Ingrese los FPS (24, 30 o 60) de " + nombre)
        );

        if (velocidad !== 24 && velocidad !== 30 && velocidad !== 60) {
            alert("FPS no permitido. Ingrese 24, 30 o 60.");
        }

    } while (velocidad !== 24 && velocidad !== 30 && velocidad !== 60);

    fps[i] = velocidad;

    fotogramas[i] = duracion * velocidad;

    total = total + fotogramas[i];

    if (i === 0) {
        secuenciaMayor = 0;
    } else {
        if (fotogramas[i] > fotogramas[secuenciaMayor]) {
            secuenciaMayor = i;
        }
    }
}

let promedio = total / 6;

console.log("Informe de producción");

for (let i = 0; i < 6; i++) {

    console.log("");
    console.log("Secuencia: " + nombres[i]);
    console.log("Duracion: " + duraciones[i] + " segundos");
    console.log("Velocidad: " + fps[i] + " FPS");
    console.log("Fotogramas requeridos: " + fotogramas[i]);
}

console.log("Resumen del proyecto");
console.log("Total de fotogramas: " + total);
console.log("Promedio por secuencia: " + promedio.toFixed(2));
console.log("Secuencia con mas fotogramas: " + nombres[secuenciaMayor]);
console.log("Fotogramas de la secuencia: " + fotogramas[secuenciaMayor]);

if (total > 10000) {

    let exceso = total - 10000;

    console.log("Estado: Capacidad superada");
    console.log("Fotogramas que exceden la capacidad: " + exceso);

} else {

    let restantes = 10000 - total;

    console.log("Estado: Capacidad disponible");
    console.log("Fotogramas restantes: " + restantes);

}
