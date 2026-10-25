let proyecto;

proyecto = prompt("Ingrese el nombre de su proyecto multimedia:");

let duracion;
let FPS;

fotogramas = Number(prompt("Ingrese el total de fotogramas:"));

FPS = Number(prompt("Ingrese tasa de fotogramas (FPS):"));

let fotogramas = fotogramas * FPS;

console.log("================================");
console.log("     PROYECTO MULTIMEDIA");
console.log("================================");
console.log("Proyecto: " + proyecto);
console.log("================================");
console.log("     Fotogramas de una película");
console.log("================================");
console.log("Duración: " + duracion + " segundos");
console.log("Tasa de fotogramas: " + FPS + " FPS");
console.log("Total de fotogramas: " + fotogramas)
