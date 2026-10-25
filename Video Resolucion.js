let opcion = Number(prompt("Elija opcion de salida de archivo: \n1. 720p \n2. 1080p \n3. 1440p \n4. 4K"));

switch (opcion) {

    case 1:
        alert("Opción 1: 720p ---> 1440 x 720");
        break;
    case 2:
        alert("Opción 2: 1080p ---> 1920 x 1080");
        break;
    case 3:
        alert("Opción 3: 1440p ---> 2560 x 1440");
        break;
    case 4:
        alert("Opción 4: 4K ---> 3840 x 2160");
        break;
    default:
        alert("Opción no válida");
}