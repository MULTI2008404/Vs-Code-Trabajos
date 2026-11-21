let nombres = [];
let duraciones = [];

let total = 0;
let sonidosLargos = 0;
let efectoMayor = 0;

// Registro de los ocho efectos
for (let i = 0; i < 8; i++) {

    nombres[i] = prompt("Ingrese el nombre del efecto " + (i + 1) + ":");

    let duracion;

    do {
        duracion = Number(prompt("Ingrese la duración en segundos:"));

        if (isNaN(duracion) || duracion <= 0) {
            alert("Error: la duración debe ser mayor que cero.");
        }

    } while (isNaN(duracion) || duracion <= 0);

    duraciones[i] = duracion;

    total = total + duracion;

    if (duracion > 15) {
        sonidosLargos++;
    }
}

// Buscar el efecto de mayor duración
efectoMayor = 0;

for (let i = 1; i < 8; i++) {

    if (duraciones[i] > duraciones[efectoMayor]) {
        efectoMayor = i;
    }
}

// Mostrar los efectos y su clasificación
console.log("Biblioteca de Sonidos");

for (let i = 0; i < 8; i++) {

    if (duraciones[i] < 5) {

        console.log(nombres[i] + " - " + duraciones[i] + " segundos - CORTO");

    } else if (duraciones[i] <= 15) {

        console.log(nombres[i] + " - " + duraciones[i] + " segundos - MEDIANO");

    } else {

        console.log(nombres[i] + " - " + duraciones[i] + " segundos - LARGO");

    }
}

// Mostrar resumen estadístico
console.log("");

console.log("Resumen estadístico");

console.log("Duración total: " + total.toFixed(2) + " segundos");

console.log("Efectos superiores a 15 segundos: " + sonidosLargos);

console.log("Efecto más largo: " + nombres[efectoMayor]);

console.log("Duración del efecto más largo: " + duraciones[efectoMayor] + " segundos");
