// 1. El menú marca la sección que se está leyendo
const enlaces = [...document.querySelectorAll('nav a')];
const vigilar = new IntersectionObserver(entradas => entradas.forEach(e => {
  if (e.isIntersecting) enlaces.forEach(a => a.classList.toggle('activo', a.hash === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach(s => vigilar.observe(s));

// 2. Fondo de formas geométricas dibujado con canvas (imagen fija, sin movimiento)
const lienzo = document.createElement('canvas');
lienzo.className = 'fondo';
lienzo.setAttribute('aria-hidden', 'true');
document.body.prepend(lienzo);
const ctx = lienzo.getContext('2d');
const colores = ['#7c4dff', '#27e1d6', '#ff5c8a'];
const formas = Array.from({ length: 34 }, () => ({
  x: Math.random(), y: Math.random(), r: 6 + Math.random() * 26,
  a: Math.random() * 6.28, c: colores[Math.random() * 3 | 0], t: Math.random() * 3 | 0
}));

function dibujar() {
  const d = devicePixelRatio || 1;
  const w = lienzo.width = innerWidth * d;
  const h = lienzo.height = innerHeight * d;
  ctx.lineWidth = 2 * d;
  for (const f of formas) {
    ctx.save();
    ctx.translate(f.x * w, f.y * h);
    ctx.rotate(f.a);
    ctx.strokeStyle = f.c;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    const r = f.r * d;
    if (f.t === 0) ctx.arc(0, 0, r, 0, 6.283);
    else {
      const lados = f.t === 1 ? 3 : 4;
      for (let i = 0; i < lados; i++) {
        const an = i * 6.283 / lados;
        ctx[i ? 'lineTo' : 'moveTo'](Math.cos(an) * r, Math.sin(an) * r);
      }
      ctx.closePath();
    }
    ctx.stroke();
    ctx.restore();
  }
}
addEventListener('resize', dibujar);
dibujar();