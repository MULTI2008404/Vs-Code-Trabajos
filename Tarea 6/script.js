// 1. El menú marca la sección que se está leyendo
const enlaces = [...document.querySelectorAll('nav a:not(.logo)')];
const vigilar = new IntersectionObserver(entradas => entradas.forEach(e => {
  if (e.isIntersecting) enlaces.forEach(a => a.classList.toggle('activo', a.hash === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach(s => vigilar.observe(s));

// 2. Mosaico de formas geométricas dibujado con canvas al final de la portada (imagen fija)
const portada = document.querySelector('header');
const lienzo = document.createElement('canvas');
lienzo.className = 'mosaico';
lienzo.setAttribute('aria-hidden', 'true');
portada.append(lienzo);
const ctx = lienzo.getContext('2d');
const colores = ['#ff6b2c', '#ffc83d', '#2f6df6', '#eef4fa'];
const teselas = Array.from({ length: 80 }, () => ({
  f: Math.random() * 5 | 0, g: Math.random() * 4 | 0, c: colores[Math.random() * 4 | 0]
}));

function dibujar() {
  const d = devicePixelRatio || 1;
  const lado = 96 * d;
  const w = lienzo.width = portada.clientWidth * d;
  lienzo.height = 2 * lado;
  const cols = Math.ceil(w / lado);
  for (let i = 0; i < cols * 2; i++) {
    const t = teselas[i % teselas.length];
    const s = lado / 2;
    ctx.save();
    ctx.translate((i % cols) * lado + s, Math.floor(i / cols) * lado + s);
    ctx.rotate(t.g * Math.PI / 2);
    ctx.fillStyle = t.c;
    ctx.beginPath();
    if (t.f === 0) { ctx.moveTo(-s, -s); ctx.arc(-s, -s, lado, 0, Math.PI / 2); }
    else if (t.f === 1) ctx.arc(0, 0, s, 0, Math.PI);
    else if (t.f === 2) ctx.arc(0, 0, s * 0.8, 0, 6.283);
    else if (t.f === 3) ctx.rect(-s * 0.7, -s * 0.7, s * 1.4, s * 1.4);
    else ctx.arc(0, 0, s * 0.3, 0, 6.283);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}
addEventListener('resize', dibujar);
dibujar();