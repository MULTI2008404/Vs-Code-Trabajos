let Resolucion;

Resolucion = Number(prompt("Ingrese la resolucion:"));

console.log("================================");
console.log("     RESOLUCIÓN");
console.log("================================");
console.log("Resolución: " + Resolucion + " px");  
console.log("================================");

if (Resolucion <= 1280) {
    alert("Baja resolución");
    console.log("================================");
    console.log("Baja resolución");
    console.log("================================");
} else if (Resolucion <= 1920) {
    alert("HD resolución");
    console.log("================================");
    console.log("HD resolución");
    console.log("================================");
} else if (Resolucion >= 1920) {
    alert("Full HD o superior");
    console.log("================================");
    console.log("Full HD o superior");
    console.log("================================");
} else {
    alert("Resolución no válida");
    console.log("================================");
    console.log("Resolución no válida");
    console.log("================================");
}


