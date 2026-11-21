// Paisaje geométrico: todo se dibuja con rectángulos, círculos y triángulos.

const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

// Tamaño lógico del dibujo (el CSS lo adapta a la pantalla)
const ANCHO = 800;
const ALTO = 500;
const SUELO = 340; // altura donde empieza el pasto

const colores = {
  cielo1: "#f6bd60",
  cielo2: "#f7d08a",
  cielo3: "#fae3b4",
  sol: "#e76f51",
  rayo: "#f4a261",
  montanaA: "#6b7da3",
  montanaB: "#8a99ba",
  montanaC: "#5a6b93",
  nieve: "#f4f1ea",
  pasto: "#7fb069",
  colinaA: "#4f8a4b",
  colinaB: "#5f9a56",
  pared: "#f2e3c6",
  techo: "#c4452d",
  chimenea: "#9c4a2f",
  madera: "#8c5e3c",
  vidrio: "#a8dadc",
  camino: "#e9d8a6",
  tronco: "#6b4423",
  nube: "#ffffff",
};

// ---------- Figuras básicas ----------

function rectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}

function circulo(x, y, radio, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radio, 0, Math.PI * 2);
  ctx.fill();
}

// Sirve para triángulos (3 puntos) y cualquier otro polígono
function poligono(puntos, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(puntos[0][0], puntos[0][1]);
  for (let i = 1; i < puntos.length; i++) {
    ctx.lineTo(puntos[i][0], puntos[i][1]);
  }
  ctx.closePath();
  ctx.fill();
}

function linea(x1, y1, x2, y2, color, grosor) {
  ctx.strokeStyle = color;
  ctx.lineWidth = grosor;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// ---------- Elementos del paisaje ----------

function cielo() {
  rectangulo(0, 0, ANCHO, 120, colores.cielo1);
  rectangulo(0, 120, ANCHO, 110, colores.cielo2);
  rectangulo(0, 230, ANCHO, SUELO - 230, colores.cielo3);
}

function sol() {
  const cx = 620;
  const cy = 130;
  // 12 rayos triangulares
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI) / 6;
    poligono(
      [
        [cx + Math.cos(a - 0.1) * 66, cy + Math.sin(a - 0.1) * 66],
        [cx + Math.cos(a + 0.1) * 66, cy + Math.sin(a + 0.1) * 66],
        [cx + Math.cos(a) * 92, cy + Math.sin(a) * 92],
      ],
      colores.rayo
    );
  }
  circulo(cx, cy, 52, colores.sol);
}

function montanas() {
  poligono([[560, SUELO], [740, 170], [900, SUELO]], colores.montanaC);
  poligono([[300, SUELO], [500, 190], [700, SUELO]], colores.montanaB);
  poligono([[-40, SUELO], [170, 140], [380, SUELO]], colores.montanaA);

  // Nieve en las cumbres
  poligono(
    [[170, 140], [117, 190], [145, 178], [170, 196], [195, 178], [222, 190]],
    colores.nieve
  );
  poligono(
    [[740, 170], [703, 205], [722, 197], [740, 212], [758, 197], [773, 205]],
    colores.nieve
  );
}

function nube(x, y, escala) {
  circulo(x, y, 20 * escala, colores.nube);
  circulo(x + 24 * escala, y - 14 * escala, 26 * escala, colores.nube);
  circulo(x + 52 * escala, y, 20 * escala, colores.nube);
  rectangulo(x, y, 52 * escala, 20 * escala, colores.nube);
}

function dibujarNubes() {
  nube(40, 80, 1.1);
  nube(330, 160, 0.8);
  nube(520, 55, 0.9);
}

function suelo() {
  rectangulo(0, SUELO, ANCHO, ALTO - SUELO, colores.pasto);
  circulo(120, 540, 210, colores.colinaA);
  circulo(660, 520, 230, colores.colinaB);
}

function pino(x, base) {
  rectangulo(x - 7, base - 40, 14, 45, colores.tronco);
  poligono([[x, base - 165], [x - 35, base - 95], [x + 35, base - 95]], "#2f6b4f");
  poligono([[x, base - 135], [x - 45, base - 60], [x + 45, base - 60]], "#3c8a63");
  poligono([[x, base - 105], [x - 55, base - 25], [x + 55, base - 25]], "#2f6b4f");
}

function arbolRedondo(x, base) {
  rectangulo(x - 10, base - 70, 20, 70, colores.tronco);
  circulo(x, base - 90, 38, "#52b788");
  circulo(x - 30, base - 70, 28, "#52b788");
  circulo(x + 30, base - 70, 28, "#52b788");
  circulo(x - 12, base - 100, 14, "#74c69d");
  // frutos
  circulo(x - 22, base - 75, 4, "#e63946");
  circulo(x + 18, base - 95, 4, "#e63946");
  circulo(x + 34, base - 62, 4, "#e63946");
}

function casa() {
  // camino (trapecio)
  poligono([[355, 410], [395, 410], [445, ALTO], [305, ALTO]], colores.camino);

  // paredes y chimenea
  rectangulo(300, 300, 150, 110, colores.pared);
  rectangulo(410, 240, 24, 50, colores.chimenea);

  // techo (triángulo) y ventana redonda
  poligono([[280, 300], [375, 225], [470, 300]], colores.techo);
  circulo(375, 275, 12, colores.madera);
  circulo(375, 275, 8, colores.vidrio);

  // puerta
  rectangulo(355, 345, 40, 65, colores.madera);
  circulo(387, 380, 3, "#f6bd60");

  // ventanas con cruz
  [[310, 328], [406, 328]].forEach(([x, y]) => {
    rectangulo(x, y, 34, 34, colores.madera);
    rectangulo(x + 3, y + 3, 28, 28, colores.vidrio);
    linea(x + 17, y + 3, x + 17, y + 31, colores.madera, 2);
    linea(x + 3, y + 17, x + 31, y + 17, colores.madera, 2);
  });
}

const flores = [
  [80, 440, "#e63946"], [130, 470, "#f6bd60"], [200, 450, "#ffffff"],
  [250, 480, "#e63946"], [520, 455, "#f6bd60"], [600, 475, "#ffffff"],
  [660, 445, "#e63946"], [720, 470, "#f6bd60"],
];

function flor(x, y, color) {
  rectangulo(x - 1, y, 2, 16, "#386641");
  [[-5, 0], [5, 0], [0, -5], [0, 5]].forEach(([dx, dy]) => {
    circulo(x + dx, y + dy, 4, color);
  });
  circulo(x, y, 3, "#bc6c25");
}

function pajaro(x, y) {
  ctx.strokeStyle = "#3d405b";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(x - 10, y);
  ctx.lineTo(x, y + 6);
  ctx.lineTo(x + 10, y);
  ctx.stroke();
}

// ---------- Escena completa ----------

function dibujar() {
  ctx.clearRect(0, 0, ANCHO, ALTO);

  cielo();
  sol();
  montanas();
  dibujarNubes();
  suelo();

  pino(150, 400);
  casa();
  arbolRedondo(580, 410);

  flores.forEach(([x, y, color]) => flor(x, y, color));
  pajaro(250, 110);
  pajaro(285, 92);
  pajaro(310, 118);
}

// Dibujar una sola vez
dibujar();