// 1. El menú marca la sección que se está leyendo
const enlaces = [...document.querySelectorAll('nav a[href^="#"]')];
const vigilar = new IntersectionObserver(entradas => entradas.forEach(e => {
  if (e.isIntersecting) enlaces.forEach(a => a.classList.toggle('activo', a.hash === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach(s => vigilar.observe(s));

// 2. Formulario demostrativo: el navegador valida los campos, aquí no se envía ningún dato
const formulario = document.querySelector('form');
if (formulario) {
  const aviso = document.createElement('p');
  aviso.className = 'confirmacion';
  aviso.setAttribute('role', 'status');
  formulario.append(aviso);
  formulario.addEventListener('submit', e => {
    e.preventDefault();
    aviso.textContent = 'Listo: mensaje de demostración. No se envió ni se guardó ningún dato.';
    formulario.reset();
  });
}
