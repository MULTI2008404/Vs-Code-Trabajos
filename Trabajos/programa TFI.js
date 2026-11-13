let pixeles;
let PPI;

pixeles = Number(prompt("Ingrese el ancho de la imagen en píxeles:"));

PPI = Number(prompt("Ingrese la densidad de píxeles (PPI):"));

let pulgadas = pixeles / PPI;

console.log("================================");
console.log("     Resolución de la imagen");
console.log("================================");
console.log("Ancho: " + pixeles + " px");
console.log("Densidad: " + PPI + " PPI");
console.log("Tamaño en pulgadas: " + pulgadas + " pulgadas");