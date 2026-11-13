let participantes = Number(prompt("Ingrese la cantidad de usuarios que paticiparon: "));

console.log("Participantes: " + participantes);

let nointeraccion = 0;
let baja = 0;
let media = 0;
let alta = 0;

for (let i = 1; i <= participantes; i++){
    let interacciones = Number(prompt("Ingrese la cantidad de interacciones: "))

    if (nointeraccion == 0){
        nointeraccion++
    }
    else if (interacciones >= 1 && interacciones <= 5){
        baja++
    }
    else if (interacciones >= 6 && interacciones <= 10){
        media++
    }
    else {
        alta++
    }
}
        
console.log("Sin interacciones "+ nointeraccion)
console.log("Baja "+ baja)
console.log("Media "+ media)
console.log("Alta "+ alta)