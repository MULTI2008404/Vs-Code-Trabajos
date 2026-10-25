let opcion = Number(prompt("Ingrese una opción (1-4): \n1. Photoshop \n2. Illustrator \n3. Blender \n4. Figma"));
switch (opcion) {
    case 1:
        alert("Opción 1: Photoshop---> Editor de imágenes y diseño gráfico");
        break;
    case 2:
        alert("Opción 2: Illustrator---> Editor de ilustraciones vectoriales");
        break;
    case 3:
        alert("Opción 3: Blender---> Software de modelado 3D");
        break;
    case 4:
        alert("Opción 4: Figma---> Editor de diseño para equipos de producto");
        break;
    default:
        alert("Opción no válida");
}