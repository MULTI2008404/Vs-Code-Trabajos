let compra;
let targeta;
let descuento;

compra = Number(prompt("Ingrese el monto de la compra:"));
targeta = prompt("¿Cuenta con targeta de descuento? (si/no):");

if (compra >= 60 || targeta.toLowerCase() === "si") {
    descuento = compra * 0.15;
    let total = compra - descuento;
    console.log("Se aplicará un descuento del 15%. Total a pagar: " + total);
}

console.log("================================");
console.log("     DESCUENTO EN COMPRA");
console.log("================================");
console.log("Monto de la compra: " + compra);
console.log("¿Tiene targeta de descuento?: " + targeta);
console.log("Descuento aplicado: " + descuento);
console.log("Total a pagar: " + (compra - descuento));
console.log("================================");
console.log("¡Gracias por su compra!");
console.log("================================");