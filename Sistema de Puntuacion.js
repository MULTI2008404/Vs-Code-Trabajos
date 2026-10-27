let rondas = Number(prompt("Ingrese numero de rondas: "));
let total = 0;
let promedio = 0;
let maximo = 0;

for (let i = 1 ; i <= rondas ; i++){
    let puntuacion = Number(prompt("Ingresa la puntuacion de la ronda "+ i + " (0-100)" ));
    total += puntuacion
    console.log("Ronda "+ i + ": " + puntuacion)
    if (puntuacion >= 0 && puntuacion <= 49){
        console.log("Bajo rendimiento")
    }
    else if (puntuacion >= 50 && puntuacion <= 79){
        console.log("Buen rendimiento")
    }
    else if (puntuacion >= 80 && puntuacion <= 99){
        console.log("Excelente")
    }
    else if (puntuacion == 100){
        console.log("Puntuación Perfecta")
    }
    if (puntuacion > maximo){
        maximo = puntuacion
    }
    
}

promedio = total / rondas;       

console.log("Resultados finales: ")
console.log("Puntuacion total: ", total)
console.log("Promedio: ", promedio)
console.log("Mejor puntuacion: ", maximo)
