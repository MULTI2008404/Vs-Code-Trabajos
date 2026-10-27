function calcularArea(ancho, alto) {
  return ancho * alto;
}
let ancho = Number(prompt("Ingrese el ancho: "));
let alto = Number(prompt("Ingrese el alto: "));
let area;

area=calcularArea(alto,ancho);
alert("El area es: "+ area)