
let nombres = [];
let calificaciones = [];

let suma = 0;
let aprobadas = 0;
let promedio = 0;
let mejorPropuesta = 0;

// Registro de las seis propuestas
for (let i = 0; i < 6; i++) {

    nombres[i] = prompt("Ingrese el nombre de la propuesta " + (i + 1) + ":");

    let nota;

    do {
        nota = parseFloat(prompt("Ingrese la calificación (1-10):"));

        if (isNaN(nota) || nota < 1 || nota > 10) {
            alert("Error: ingrese una nota entre 1 y 10.");
        }

    } while (isNaN(nota) || nota < 1 || nota > 10);

    calificaciones[i] = nota;

    suma = suma + nota;

    if (nota >= 8) {
        aprobadas++;
    }
}

// Calcular promedio
promedio = suma / 6;

// Buscar la propuesta mejor valorada
mejorPropuesta = 0;

for (let i = 1; i < 6; i++) {

    if (calificaciones[i] > calificaciones[mejorPropuesta]) {
        mejorPropuesta = i;
    }
}

// Mostrar reporte
console.log("Reporte de evaluación");

for (let i = 0; i < 6; i++) {
    console.log(nombres[i] + ": " + calificaciones[i] + "/10");
}

console.log("Propuestas con nota de 8 o superior: " + aprobadas);
console.log("Promedio general: " + promedio.toFixed(2));
console.log("Mejor propuesta: " + nombres[mejorPropuesta]);
console.log("Puntuación más alta: " + calificaciones[mejorPropuesta]);

// Recomendación final
if (aprobadas >= 4) {
    console.log("Recomendación: Campaña lista para presentación.");
} else {
    console.log("Recomendación: Se recomienda revisar la campaña.");
}
