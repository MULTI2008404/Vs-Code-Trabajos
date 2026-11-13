let contadorPesado = 0;

for (let i = 1; i <= 8; i++){
    let valor = Number(prompt("Ingrese el tamaño del archivo."));
    if (valor>=100){
        contadorPesado++;
    }
}

alert("Tiene:" + contadorPesado + "archivos pesados de mas de 100MB")