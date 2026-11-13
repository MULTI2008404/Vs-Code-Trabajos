let calificaciones = [];
let suma = 0;
let satisfechos = 0;

for (let i = 0; i < 5; i++) {

  let nota;

  do {
    nota = Number(
      prompt(`Calificación ${i + 1} (1-10)`)
    );
  } while (!Number.isFinite(nota) ||
           nota < 1 || nota > 10);

  calificaciones.push(nota);
  suma += nota;

  if (nota >= 8) {
    satisfechos++;
  }
}

let promedio = suma / calificaciones.length;
let evaluacion;

if (promedio >= 9) {
  evaluacion = "Excelente";
} else if (promedio >= 7) {
  evaluacion = "Buena";
} else {
  evaluacion = "Debe mejorar";
}

console.log("Calificaciones:", calificaciones);
console.log("Promedio:", promedio);
console.log("Satisfechos:", satisfechos);
console.log("Evaluación:", evaluacion);