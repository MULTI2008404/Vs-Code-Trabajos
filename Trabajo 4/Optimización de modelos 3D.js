let nombres = [];
let poligonos = [];

let total = 0;
let modeloMayor = 0;
let necesitanOptimizacion = 0;

for (let i = 0; i < 6; i++) {

    let nombre = prompt("Ingrese el nombre del modelo " + (i + 1));
    nombres[i] = nombre;

    let cantidad;

    do {
        cantidad = Number(
            prompt("Ingrese la cantidad de poligonos de " + nombre)
        );

        if (isNaN(cantidad) || cantidad < 0) {
            alert("Ingrese una cantidad valida.");
        }

    } while (isNaN(cantidad) || cantidad < 0);

    poligonos[i] = cantidad;

    total = total + cantidad;

    if (i === 0) {
        modeloMayor = 0;
    } else {
        if (poligonos[i] > poligonos[modeloMayor]) {
            modeloMayor = i;
        }
    }

    if (poligonos[i] > 10000) {
        necesitanOptimizacion++;
    }
}

let promedio = total / 6;

console.log("Reporte de optimización");

for (let i = 0; i < 6; i++) {

    console.log("----------------------------");
    console.log("Modelo: " + nombres[i]);
    console.log("Poligonos actuales: " + poligonos[i]);

    if (poligonos[i] > 10000) {

        let reduccion = poligonos[i] - 10000;

        console.log("Estado: Necesita optimizacion");
        console.log("Debe reducir: " + reduccion + " poligonos");

    } else {

        console.log("Estado: Dentro del limite recomendado");
        console.log("Reduccion necesaria: 0 poligonos");

    }
}

console.log("Resumen del proyecto");
console.log("Total de poligonos: " + total);
console.log("Promedio por modelo: " + promedio.toFixed(2));
console.log("Modelos que necesitan optimizacion: " + necesitanOptimizacion);
console.log("Modelo mas complejo: " + nombres[modeloMayor]);
console.log("Cantidad de poligonos: " + poligonos[modeloMayor]);
