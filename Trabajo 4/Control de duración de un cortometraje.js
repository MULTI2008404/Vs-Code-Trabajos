let nombres = [];
let duraciones = [];

let total = 0;
let promedio = 0;
let reduccion = 0;
let escenasSuperiores = 0;

// Registrar las cinco escenas
for (let i = 0; i < 5; i++) {

    nombres[i] = prompt("Ingrese el nombre de la escena " + (i + 1) + ":");

    let duracion;

    do {
        duracion = Number(prompt("Ingrese la duración en segundos:"));

        if (isNaN(duracion) || duracion <= 0) {
            alert("Error: la duración debe ser mayor que cero.");
        }

    } while (isNaN(duracion) || duracion <= 0);

    duraciones[i] = duracion;

    total = total + duracion;
}

// Calcular el promedio
promedio = total / 5;

// Buscar escenas que superan el promedio
console.log("Escenas que superan el promedio");

for (let i = 0; i < 5; i++) {

    if (duraciones[i] > promedio) {

        console.log(nombres[i] + " - " + duraciones[i] + " segundos");

        escenasSuperiores++;
    }
}

// Mostrar resumen
console.log("Reporte del cortometraje");

console.log("Duración total: " + total + " segundos");

console.log("Duración promedio: " + promedio.toFixed(2) + " segundos");

console.log("Escenas que superan el promedio: " + escenasSuperiores);

// Comprobar el límite de producción
if (total <= 180) {

    console.log("ESTADO: El cortometraje cumple con el límite de producción.");

} else {

    reduccion = total - 180;

    console.log("Estado: El cortometraje supera el límite.");

    console.log("Se deben reducir " + reduccion + " segundos durante la edición.");
}
