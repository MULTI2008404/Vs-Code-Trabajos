// ENTRADA
let categoria = Number(prompt(
  "================================\n      CENTRO MULTIMEDIA UPS\n================================\n1. Diseño gráfico\n2. Producción audiovisual\n3. Desarrollo web\n4. Realidad extendida\n5. Salir"
));

// PROCESO
switch (categoria) {
  case 1: {
    let opcion = Number(prompt(
      "Diseño gráfico\n1. Exportar imagen\n2. Exportar vector\n3. Exportar audio"
    ));
    switch (opcion) {
    
      case 1:
        alert("Exporta imagen en formato PNG");
        break;
      case 2:
        alert("Exporta vector en formato SVG");
        break;
     case 4:
        alert("Exporta audio en formato MP3");
        break;
      default:
        alert("Opción no válida");
    }
    break;
  }
  default:
    alert("Categoría no válida");
}
switch (categoria) {
  case 4: {
    let opcion = Number(prompt(
      "REALIDAD EXTENDIDA\n1. Realidad Aumentada\n2. Realidad Virtual\n3. Realidad Mixta"
    ));
    switch (opcion) {
      case 1:
        alert("Realidad Aumentada: Combina elementos virtuales con el mundo real");
        break;
      case 2:
        alert("Realidad Virtual: Crea entornos virtuales completamente inmersivos");
        break;
      case 3:
        alert("Realidad Mixta: Combina elementos virtuales y reales en tiempo real");
        break;
      default:
        alert("Opción no válida");
    }
    break;
  }
  case 2: {
    let opcion = Number(prompt(
      "Diseño gráfico\n1. Exportar imagen\n2. Exportar vector\n3. Exportar audio"
    ));
    switch (opcion) {
    
      case 1:
        alert("Exporta imagen en formato PNG");
        break;
      case 2:
        alert("Exporta vector en formato SVG");
        break;
     case 4:
        alert("Exporta audio en formato MP3");
        break;
      default:
        alert("Opción no válida");
    }
    break;
  }
  default:
    alert("Categoría no válida");
}