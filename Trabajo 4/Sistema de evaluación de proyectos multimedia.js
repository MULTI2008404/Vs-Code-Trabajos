let nombres = [];
let diseno = [];
let funcionalidad = [];
let innovacion = [];
let finales = [];
let categorias = [];

let sumaFinal = 0;
let sumaDiseno = 0;
let sumaFuncionalidad = 0;
let sumaInnovacion = 0;

let aprobados = 0;
let mayorNota = -1;
let ganador = "";

for (let i = 0; i < 8; i++) {
    console.log(`PROYECTO ${i + 1}`);

    let nombre = prompt("Ingrese el nombre del proyecto:");
    nombres[i] = nombre;

    let notaDiseno;
    do {
        notaDiseno = Number(prompt("Nota de Diseño visual (0 a 10):"));
    } while (isNaN(notaDiseno) || notaDiseno < 0 || notaDiseno > 10);

    diseno[i] = notaDiseno;

    let notaFuncionalidad;
    do {
        notaFuncionalidad = Number(prompt("Nota de Funcionalidad (0 a 10):"));
    } while (isNaN(notaFuncionalidad) || notaFuncionalidad < 0 || notaFuncionalidad > 10);

    funcionalidad[i] = notaFuncionalidad;

    let notaInnovacion;
    do {
        notaInnovacion = Number(prompt("Nota de Innovación (0 a 10):"));
    } while (isNaN(notaInnovacion) || notaInnovacion < 0 || notaInnovacion > 10);

    innovacion[i] = notaInnovacion;

    finales[i] =
        diseno[i] * 0.30 +
        funcionalidad[i] * 0.40 +
        innovacion[i] * 0.30;

    sumaFinal += finales[i];
    sumaDiseno += diseno[i];
    sumaFuncionalidad += funcionalidad[i];
    sumaInnovacion += innovacion[i];

    if (finales[i] >= 8) {
        aprobados++;
    }

    if (finales[i] > mayorNota) {
        mayorNota = finales[i];
        ganador = nombres[i];
    }

    if (finales[i] >= 9) {
        categorias[i] = "Sobresaliente";
    } else if (finales[i] >= 8) {
        categorias[i] = "Destacado";
    } else if (finales[i] >= 7) {
        categorias[i] = "Satisfactorio";
    } else {
        categorias[i] = "En desarrollo";
    }
}

let promedioGeneral = sumaFinal / 8;
let promedioDiseno = sumaDiseno / 8;
let promedioFuncionalidad = sumaFuncionalidad / 8;
let promedioInnovacion = sumaInnovacion / 8;

let promedioMenor = Math.min(
    promedioDiseno,
    promedioFuncionalidad,
    promedioInnovacion
);

console.log("Reporte de la feria");

for (let i = 0; i < 8; i++) {
    console.log("Proyecto:", nombres[i]);
    console.log("Diseño visual:", diseno[i]);
    console.log("Funcionalidad:", funcionalidad[i]);
    console.log("Innovación:", innovacion[i]);
    console.log("Calificación final:", finales[i].toFixed(2));
    console.log("Categoría:", categorias[i]);

    if (finales[i] > promedioGeneral) {
        console.log("Superó el promedio general.");
    } else {
        console.log("No superó el promedio general.");
    }

    console.log("");
}

console.log("Ganador:", ganador);
console.log("Calificación del ganador:", mayorNota.toFixed(2));
console.log("Proyectos con nota igual o superior a 8:", aprobados);
console.log("Promedio general:", promedioGeneral.toFixed(2));

console.log("Promedio por criterio");
console.log("Diseño visual:", promedioDiseno.toFixed(2));
console.log("Funcionalidad:", promedioFuncionalidad.toFixed(2));
console.log("Innovación:", promedioInnovacion.toFixed(2));

console.log("Área o áreas con menor promedio:");

if (promedioDiseno === promedioMenor) {
    console.log("Diseño visual");
}

if (promedioFuncionalidad === promedioMenor) {
    console.log("Funcionalidad");
}

if (promedioInnovacion === promedioMenor) {
    console.log("Innovación");
}

console.log("Promedio más bajo:", promedioMenor.toFixed(2));
