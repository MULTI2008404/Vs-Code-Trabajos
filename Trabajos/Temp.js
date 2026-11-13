let temperaturaGrados;

temperaturaGrados = Number(prompt("Ingrese la temperatura en grados:"));

if (temperaturaGrados <= 10) {
    alert("Muy frío");
} else if (temperaturaGrados <= 20) {
    alert("Frío");
} else if (temperaturaGrados <= 30) {
    alert("Cálido");
} else {
    alert("Caluroso");
}

console.log("================================");
console.log("     TEMPERATURA");
console.log("================================");
console.log("Temperatura: " + temperaturaGrados + " °C");  

