let opcion = prompt("Elija opcion de salida de archivo: \n jpg \n png \n mp3 \n mp4");

opcion = opcion.trim().toLowerCase();

switch (opcion) {

    case "jpg":
        alert("Opción 1: jpg ---> Formato de imagen comprimida");
        break;
    case "png":
        alert("Opción 2: png ---> Formato de imagen portable");
        break;
    case "mp3":
        alert("Opción 3: mp3 ---> Formato de audio comprimido");
        break;
    case "mp4":
        alert("Opción 4: mp4 ---> Formato de video comprimido");
        break;
    default:
        alert("Opción no válida");
}