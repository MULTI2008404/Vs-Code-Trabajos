let aprobados = 0;
let reprobados = 0;

for(let i = 1; i <= 5; i++){
    let nota = Number(prompt("Ingresa la nota del estudiante "+ i + " De 0 a 10: "));
    if(nota >= 7){
        aprobados++
        console.log("Estudiante "+ i + " Aprobado")}
    else{
        reprobados++
        console.log("Estudiante "+ i + " Reprobado")}
}

console.log("Total de aprobados: "+ aprobados)
console.log("Total de reprobados: "+ reprobados)
