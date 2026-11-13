let ancho;
let alto;

ancho = Number(prompt("Ingrese el ancho de la composición en píxeles:"));

alto = Number(prompt("Ingrese el alto de la composición en píxeles:"));

let area = ancho * alto;

console.log("================================");
console.log("     Resolución de la composición");
console.log("================================");
console.log("Ancho: " + ancho + " px");
console.log("Alto: " + alto + " px");
console.log("Área: " + area + " px²");