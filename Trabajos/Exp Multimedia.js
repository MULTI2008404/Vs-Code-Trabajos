let edad = Number(prompt("Ingrese su edad:"));

console.log("================================");
console.log("     EDAD DEL USUARIO");
console.log("================================");
console.log("Edad: " + edad + " años");
console.log("================================");

if (edad >= 18) {
    alert("Usted es mayor de edad.");
    console.log("================================");
    console.log("Usted es mayor de edad.");
    console.log("================================");
} else {
    alert("Acceso denegado. Debe ser mayor de edad para continuar.");
    console.log("================================");
    console.log("Acceso denegado. Debe ser mayor de edad para continuar.");
    console.log("================================");
}
