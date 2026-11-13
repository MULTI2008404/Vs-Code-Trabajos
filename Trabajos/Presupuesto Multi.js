let proyecto;
let horas;
let costo;
let recursos;

proyecto = prompt("Ingrese el nombre de su proyecto:");
horas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas:"));
costo = parseFloat(prompt("Ingrese el costo por hora:"));
recursos = parseFloat(prompt("Ingrese la cantidad de recursos necesarios:"));

let presupuesto = horas * costo;
let total = presupuesto - recursos;

console.log("================================");
console.log("     PRESUPUESTO DEL PROYECTO");
console.log("================================");
console.log(""  );
console.log("Proyecto: " + proyecto);  
console.log("Horas trabajadas: " + horas);
console.log("Costo por hora: $" + costo.toFixed(2));
console.log("");
console.log("Presupuesto total: $" + presupuesto.toFixed(2));
console.log("Recursos: $" + recursos.toFixed(2));
console.log("");
console.log("total: $" + total.toFixed(2));