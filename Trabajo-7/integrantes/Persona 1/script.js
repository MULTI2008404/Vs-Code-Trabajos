(() => {
  'use strict';

  const RW = 718, RH = 441;
  const lienzo = document.getElementById('lab-lienzo');
  const ctx = lienzo.getContext('2d');
  const ESC = lienzo.width / RW;
  const TAU = Math.PI * 2;
  const FUENTE = 'Montserrat, "Segoe UI", Arial, sans-serif';

  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ICONOS = {
    paleta: svg('<circle cx="13.5" cy="6.5" r="1" fill="currentColor"/><circle cx="17.5" cy="10.5" r="1" fill="currentColor"/><circle cx="8.5" cy="7.5" r="1" fill="currentColor"/><circle cx="6.5" cy="12.5" r="1" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.56-2.5 5.56-5.55C22 6.01 17.46 2 12 2z"/>'),
    mezclar: svg('<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.97a4 4 0 0 0 3.3-1.7l5.45-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.97a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.04a4 4 0 0 1-3.3-1.8l-.36-.45"/>'),
    descargar: svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>'),
    flecha: svg('<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>')
  };

  const PALETAS = {
    fria: {
      fondo: ['#031038', '#16379f', '#3f2fc8'],
      brillo: '60,190,255',
      planeta: ['#2bf5ff', '#2f7cf2', '#7b3df0'],
      barra: ['#7c4dff', '#a65cf2'],
      formas: [['#27e6ff', '#1f8fe6'], ['#3c5df0', '#6b40ee'], ['#a45cff', '#6b46f0'], ['#22cdf5', '#2a78e8']],
      luna: ['#7b4dff', '#b46cff'],
      luz: '#ffffff'
    },
    calida: {
      fondo: ['#4a0b33', '#8e1f3d', '#e65f3a'],
      brillo: '255,170,80',
      planeta: ['#ffc23d', '#ff6a4d', '#d63f8c'],
      barra: ['#ff8a4a', '#ff6a4d'],
      formas: [['#ff8a4a', '#ff5a5a'], ['#ffb03c', '#ff7a3c'], ['#ff6b6b', '#e8456f'], ['#ffb292', '#ff8068']],
      luna: ['#ff9a3c', '#ff5a5a'],
      luz: '#ffe8d2'
    }
  };

  const estado = { paleta: 'fria', semilla: 2026 };
  let composicion;
    let tiempo = 0; // segundos desde que carga la página
  const giro = o => o.rot + Math.sin(tiempo * 0.6 + o.rx) * 0.06; 

  /* ---------- Azar con semilla ---------- */
  function azarConSemilla(s) {
    let a = s >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* ---------- Composición (posiciones y tamaños) ---------- */
  function componer(semilla) {
    const azar = azarConSemilla(semilla);
    const r = (a, b) => a + azar() * (b - a);
    const elige = lista => lista[Math.floor(azar() * lista.length)];
    const g = () => Math.floor(azar() * 4);
    const tri = (x, base, w, h, giros) => ({ tipo: 'triangulo', x, y: base - h, w, h, o: elige(giros), g: g() });

    const huecos = [421, 556, 648].sort(() => azar() - 0.5);
    const planeta = { x: r(350, 420), y: r(274, 296), r: r(108, 122) };
    const orbita = (rx, ry, rot) => ({ cx: planeta.x + r(-8, 8), cy: planeta.y + r(-8, 8), rx, ry, rot });
    const orbitas = [
      orbita(r(215, 245), r(55, 80), r(-0.5, -0.3)),
      orbita(r(165, 195), r(80, 105), r(-0.95, -0.7)),
      orbita(r(205, 230), r(60, 85), r(0.2, 0.4))
    ];
    const punteada = { cx: planeta.x, cy: planeta.y, rx: r(165, 185), ry: r(120, 140), rot: r(-0.5, 0.5), desde: r(2.9, 3.3), hasta: r(-0.5, 0.3) };

    const wT = r(80, 96), hT = r(90, 108);
    const formas = [
      { tipo: 'esfera', x: huecos[0], y: r(72, 96), r: r(38, 50), g: g() },
      tri(huecos[1] - wT / 2, r(135, 155), wT, hT, [0, 1, 2, 3]),
      { tipo: 'puntos', x: huecos[2] - 35, y: r(55, 110), c: 6, f: 4, gx: 14, gy: 12.5 },
      { tipo: 'rayas', x: r(30, 42), y: r(186, 212) },
      { tipo: 'pilar', x: r(115, 155), y: r(200, 225), w: r(32, 40), h: r(110, 145), g: g() },
      tri(r(20, 38), r(330, 350), r(62, 80), r(66, 84), [0, 1]),
      { tipo: 'semicirculo', x: r(70, 115), y: r(446, 456), r: r(72, 85) },
      { tipo: 'pilar', x: r(662, 680), y: r(196, 216), w: r(30, 34), h: r(112, 160), g: g() },
      tri(r(520, 540), r(400, 410), r(60, 70), r(62, 72), [0, 1]),
      { tipo: 'puntos', x: r(612, 626), y: r(380, 386), c: 5, f: 3, gx: 15, gy: 13 }
    ];
    if (azar() > 0.45) formas.push({ tipo: 'cuadro', x: r(168, 184), y: r(160, 186), l: 33 });
    if (azar() > 0.3) formas.push({ tipo: 'pilar', x: r(636, 650), y: r(236, 260), w: r(15, 20), h: r(105, 125), g: g() });

    const cuerpos = [
      { o: 0, t: r(-0.25, 0.25), r: r(8, 11), tipo: 'luz' },
      { o: 0, t: Math.PI + r(-0.25, 0.25), r: r(8, 11), tipo: 'luz' },
      { o: elige([1, 2]), t: r(0, TAU), r: r(13, 18), tipo: 'luna' }
    ];
    if (azar() > 0.45) cuerpos.push({ o: elige([1, 2]), t: r(0, TAU), r: r(7, 13), tipo: 'luz' });

    const brillos = [0, 1].map(() => ({ x: r(100, 650), y: r(60, 400), r: r(180, 300) }));
    return { planeta, orbitas, punteada, formas, cuerpos, brillos };
  }

  /* ---------- Utilidades de dibujo ---------- */
  function lineal(x0, y0, x1, y1, colores) {
    const gr = ctx.createLinearGradient(x0, y0, x1, y1);
    colores.forEach((c, i) => gr.addColorStop(i / (colores.length - 1), c));
    return gr;
  }

  function enOrbita(o, t) {
    const px = o.rx * Math.cos(t), py = o.ry * Math.sin(t);
    return {
      x: o.cx + px * Math.cos(giro(o)) - py * Math.sin(giro(o)),
      y: o.cy + px * Math.sin(giro(o)) + py * Math.cos(giro(o))
    };
  }

  const FORMAS = {
    esfera(f, P) {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, TAU);
      ctx.fillStyle = lineal(f.x - f.r, f.y - f.r, f.x + f.r, f.y + f.r, P.formas[f.g]);
      ctx.fill();
    },
    triangulo(f, P) {
      const { x, y, w, h } = f;
      const p = [
        [[x + w, y], [x + w, y + h], [x, y + h]],
        [[x, y], [x, y + h], [x + w, y + h]],
        [[x, y], [x + w, y], [x + w, y + h]],
        [[x, y], [x + w, y], [x, y + h]]
      ][f.o];
      ctx.beginPath();
      ctx.moveTo(...p[0]);
      ctx.lineTo(...p[1]);
      ctx.lineTo(...p[2]);
      ctx.closePath();
      ctx.fillStyle = lineal(x, y, x + w, y + h, P.formas[f.g]);
      ctx.fill();
    },
    pilar(f, P) {
      const dy = Math.sin(tiempo * 1.2 + f.x) * 8;
      ctx.fillStyle = lineal(f.x, f.y + dy, f.x, f.y + dy + f.h, P.formas[f.g]);
      ctx.fillRect(f.x, f.y + dy, f.w, f.h);
    },
    semicirculo(f, P) {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, TAU);
      ctx.fillStyle = lineal(f.x - f.r, f.y - f.r, f.x + f.r, f.y, P.luna);
      ctx.fill();
    },
    puntos(f) {
      ctx.fillStyle = 'rgba(255,255,255,.92)';
      for (let i = 0; i < f.c; i++) {
        for (let j = 0; j < f.f; j++) {
          ctx.beginPath();
          ctx.arc(f.x + i * f.gx, f.y + j * f.gy, 1.9, 0, TAU);
          ctx.fill();
        }
      }
    },
    rayas(f) {
      ctx.strokeStyle = 'rgba(255,255,255,.92)';
      ctx.lineWidth = 1.8;
      ctx.lineCap = 'round';
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(f.x + i * 16, f.y + 37);
        ctx.lineTo(f.x + i * 16 + 34, f.y);
        ctx.stroke();
      }
    },
    cuadro(f) {
      ctx.strokeStyle = 'rgba(255,255,255,.9)';
      ctx.lineWidth = 1.6;
      ctx.strokeRect(f.x, f.y, f.l, f.l);
    }
  };

  function fondo(P, brillos) {
    ctx.fillStyle = lineal(0, 0, RW, RH, P.fondo);
    ctx.fillRect(0, 0, RW, RH);
    brillos.forEach(b => {
      const gr = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      gr.addColorStop(0, `rgba(${P.brillo},.28)`);
      gr.addColorStop(1, `rgba(${P.brillo},0)`);
      ctx.fillStyle = gr;
      ctx.fillRect(0, 0, RW, RH);
    });
  }

  function orbitaPunteada(o) {
    ctx.save();
    ctx.setLineDash([0.1, 7]);
    ctx.lineDashOffset = -tiempo * 8;
    ctx.lineCap = 'round';
    ctx.lineWidth = 2.4;
    ctx.strokeStyle = 'rgba(255,255,255,.85)';
    ctx.beginPath();
    ctx.ellipse(o.cx, o.cy, o.rx, o.ry, giro(o), o.desde, o.hasta, true);
    ctx.stroke();
    ctx.restore();
  }

  function planeta(p, P) {
    ctx.save();
    ctx.shadowColor = `rgba(${P.brillo},.55)`;
    ctx.shadowBlur = 28 * ESC;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, TAU);
    ctx.fillStyle = lineal(p.x - p.r * 0.8, p.y - p.r * 0.9, p.x + p.r * 0.8, p.y + p.r * 0.9, P.planeta);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, TAU);
    ctx.clip();
    const luz = ctx.createRadialGradient(p.x - p.r * 0.4, p.y - p.r * 0.45, p.r * 0.05, p.x, p.y, p.r * 1.1);
    luz.addColorStop(0, 'rgba(255,255,255,.28)');
    luz.addColorStop(0.55, 'rgba(255,255,255,0)');
    luz.addColorStop(1, 'rgba(10,0,60,.22)');
    ctx.fillStyle = luz;
    ctx.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
    ctx.restore();
  }

  function orbitas(lista) {
    ctx.strokeStyle = 'rgba(255,255,255,.85)';
    ctx.lineWidth = 1.2;
    lista.forEach(o => {
      ctx.beginPath();
      ctx.ellipse(o.cx, o.cy, o.rx, o.ry, giro(o), 0, TAU);
      ctx.stroke();
    });
  }

  function cuerpos(c, P) {
    c.cuerpos.forEach(b => {
    const pos = enOrbita(c.orbitas[b.o], b.t + tiempo * (b.o === 1 ? -1 : 1) * (0.3 + b.r / 40));
      ctx.save();
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, b.r, 0, TAU);
      if (b.tipo === 'luna') {
        ctx.fillStyle = lineal(pos.x - b.r, pos.y - b.r, pos.x + b.r, pos.y + b.r, P.luna);
      } else {
        ctx.fillStyle = P.luz;
        ctx.shadowColor = 'rgba(255,255,255,.9)';
        ctx.shadowBlur = 10 * ESC;
      }
      ctx.fill();
      ctx.restore();
    });
  }

  function tamanoParaAncho(texto, peso, ancho, base) {
    ctx.font = `${peso} ${base}px ${FUENTE}`;
    return (base * ancho) / ctx.measureText(texto).width;
  }

  function titulo(P) {
    ctx.fillStyle = lineal(54, 34, 54, 147, P.barra);
    ctx.fillRect(54, 34, 14, 113);

    ctx.fillStyle = '#fff';
    ctx.textBaseline = 'alphabetic';
    const grande = tamanoParaAncho('DIGITAL', 800, 208, 50);
    ctx.font = `800 ${grande}px ${FUENTE}`;
    ctx.fillText('ÓRBITA', 93, 74);
    ctx.fillText('DIGITAL', 93, 118);

    const chico = tamanoParaAncho('Geometría en movimiento', 400, 274, 22);
    ctx.font = `400 ${chico}px ${FUENTE}`;
    ctx.fillText('Geometría en movimiento', 93, 146);
  }

  /* ---------- Dibujo completo ---------- */
  function dibujar() {
    const P = PALETAS[estado.paleta];
    const c = composicion;
    ctx.setTransform(ESC, 0, 0, ESC, 0, 0);
    fondo(P, c.brillos);
    c.formas.forEach(f => FORMAS[f.tipo](f, P));
    orbitaPunteada(c.punteada);
    planeta(c.planeta, P);
    orbitas(c.orbitas);
    cuerpos(c, P);
    titulo(P);
  }

  /* ---------- Controles ---------- */
  document.querySelectorAll('#laboratorio [data-icono]').forEach(el => {
    el.insertAdjacentHTML('afterbegin', ICONOS[el.dataset.icono]);
  });

  const botonesPaleta = document.querySelectorAll('#laboratorio [data-paleta]');
  const marcarPaleta = () => botonesPaleta.forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.paleta === estado.paleta));
  });

  botonesPaleta.forEach(b => b.addEventListener('click', () => {
    estado.paleta = b.dataset.paleta;
    marcarPaleta();
    dibujar();
  }));

  document.getElementById('lab-generar').addEventListener('click', () => {
    estado.semilla = Math.floor(Math.random() * 1e9);
    composicion = componer(estado.semilla);
    dibujar();
  });

  document.getElementById('lab-guardar').addEventListener('click', () => {
    lienzo.toBlob(blob => {
      const enlace = document.createElement('a');
      enlace.href = URL.createObjectURL(blob);
      enlace.download = `orbita-digital-${estado.paleta}-${estado.semilla}.png`;
      enlace.click();
      setTimeout(() => URL.revokeObjectURL(enlace.href), 1000);
    }, 'image/png');
  });

  /* ---------- Inicio ---------- */
  composicion = componer(estado.semilla);
  marcarPaleta();
  dibujar();
    const sinMovimiento = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let animacion = 0;

  function bucle(ms) {
    tiempo = ms / 1000;
    dibujar();
    animacion = requestAnimationFrame(bucle);
  }

  if (!sinMovimiento) {
    new IntersectionObserver(([e]) => {
      cancelAnimationFrame(animacion);
      if (e.isIntersecting) animacion = requestAnimationFrame(bucle);
    }).observe(lienzo);
  }

  if (document.fonts) {
    Promise.all([document.fonts.load('800 50px Montserrat'), document.fonts.load('400 22px Montserrat')])
      .then(dibujar)
      .catch(() => {});
  }
})();