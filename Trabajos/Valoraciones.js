let usuarios = Number(prompt("Cuantos usuarios valorarán la app: "));

console.log("Numero de usuarios: "+ usuarios)

let suma = 0;

for(let i = 1; i <= usuarios; i++){
    let valoración = Number(prompt("Ingrese una valoracion (1-5): "))
    suma=suma+valoración
    console.log("Usuario " + i + " Valoración: "+ valoración)
}

let promedio = suma/usuarios;

console.log("Promedio: "+ promedio)

if(promedio >= 4)
    console.log(" Excelente")
else if (promedio >=3){
    console.log(" Aceptable")}
else
    console.log("Debe mejorar")

    
