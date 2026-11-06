export function iniciarMenuMovil() {
  const botonMenu = document.getElementById('mobileMenuBtn');
  const menuNavegacion = document.getElementById('navLinks');

  if (!botonMenu || !menuNavegacion) return;

  botonMenu.addEventListener('click', () => {
    const estaAbierto = menuNavegacion.classList.toggle('is-open');
    botonMenu.setAttribute('aria-expanded', String(estaAbierto));
  });
}

export function iniciarPestanas() {
  const botonesNavegacion = document.querySelectorAll('[data-tab-target]');
  const barraTransicion = document.getElementById('sectionTransitionBar');
  const menuNavegacion = document.getElementById('navLinks');
  const botonMenu = document.getElementById('mobileMenuBtn');

  const marcarBotonActivo = (idDestino) => {
    botonesNavegacion.forEach((boton) => {
      if (boton.classList.contains('nav-pill-btn')) {
        const coincide = boton.getAttribute('data-tab-target') === idDestino;
        boton.classList.toggle('active', coincide);
      }
    });
  };

  botonesNavegacion.forEach((boton) => {
    boton.addEventListener('click', (evento) => {
      evento.preventDefault();
      const idDestino = boton.getAttribute('data-tab-target');
      if (!idDestino) return;

      const seccion = document.getElementById(idDestino);
      if (seccion) {
        seccion.classList.add('is-revealed');
        if (barraTransicion) {
          barraTransicion.classList.add('is-animating');
          setTimeout(() => {
            barraTransicion.classList.remove('is-animating');
          }, 380);
        }
        marcarBotonActivo(idDestino);
        seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (menuNavegacion && botonMenu) {
        menuNavegacion.classList.remove('is-open');
        botonMenu.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const secciones = document.querySelectorAll('.lui-section');
  if ('IntersectionObserver' in window && secciones.length) {
    const observadorRevelado = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observadorMenu = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting && entrada.target.id) {
            marcarBotonActivo(entrada.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-80px 0px -45% 0px' }
    );

    secciones.forEach((sec) => {
      observadorRevelado.observe(sec);
      observadorMenu.observe(sec);
    });
  } else {
    secciones.forEach((sec) => sec.classList.add('is-revealed'));
  }
}

export function iniciarTypewriter() {
  const elementoTexto = document.getElementById('typewriterRole');
  if (!elementoTexto) return;

  const frases = [
    'Técnica en Desarrollo de Software',
    'Desarrolladora Backend & Full-Stack',
    'Node.js · PostgreSQL · MySQL · SOLID',
    'Liderazgo Ágil de Equipos (Scrum)'
  ];

  let indiceFrase = 0;
  let indiceCaracter = 0;
  let borrando = false;

  const escribirPaso = () => {
    const fraseActual = frases[indiceFrase];

    if (!borrando) {
      indiceCaracter += 1;
      elementoTexto.textContent = fraseActual.slice(0, indiceCaracter);
      if (indiceCaracter === fraseActual.length) {
        borrando = true;
        setTimeout(escribirPaso, 2100);
        return;
      }
      setTimeout(escribirPaso, 55);
    } else {
      indiceCaracter -= 1;
      elementoTexto.textContent = fraseActual.slice(0, indiceCaracter);
      if (indiceCaracter === 0) {
        borrando = false;
        indiceFrase = (indiceFrase + 1) % frases.length;
        setTimeout(escribirPaso, 320);
        return;
      }
      setTimeout(escribirPaso, 28);
    }
  };

  escribirPaso();
}

export function iniciarParallaxHero() {
  const panelIzquierdo = document.getElementById('leftShowcasePanel');
  const imagenRetrato = document.getElementById('mainPortraitImg');
  const haloRetrato = document.querySelector('.cutout-halo-ring');
  const orbeLuz = document.querySelector('.bg-glow-orb');
  const matricesPuntos = document.querySelectorAll('.bg-dots-matrix');

  if (panelIzquierdo) {
    panelIzquierdo.addEventListener('mousemove', (evento) => {
      const rect = panelIzquierdo.getBoundingClientRect();
      const x = (evento.clientX - rect.left) / rect.width - 0.5;
      const y = (evento.clientY - rect.top) / rect.height - 0.5;

      if (imagenRetrato) {
        imagenRetrato.style.transform = `translate3d(${x * -12}px, ${y * -8}px, 0) scale(1.06)`;
      }
      if (haloRetrato) {
        haloRetrato.style.transform = `translate(calc(-50% + ${x * 22}px), calc(-50% + ${y * 18}px)) scale(1.08)`;
      }
      if (orbeLuz) {
        orbeLuz.style.transform = `translate(calc(-50% + ${x * 30}px), calc(-50% + ${y * 24}px))`;
      }
      matricesPuntos.forEach((matriz, idx) => {
        const factor = idx === 0 ? 18 : -16;
        matriz.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });

    panelIzquierdo.addEventListener('mouseleave', () => {
      if (imagenRetrato) {
        imagenRetrato.style.transform = 'translate3d(0, 0, 0) scale(1.04)';
      }
      if (haloRetrato) {
        haloRetrato.style.transform = 'translate(-50%, -50%) scale(1)';
      }
      if (orbeLuz) {
        orbeLuz.style.transform = 'translate(-50%, -50%)';
      }
      matricesPuntos.forEach((matriz) => {
        matriz.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  document.addEventListener('mousemove', (evento) => {
    const tarjeta = evento.target.closest('.neo-card, .hero-card-showcase, .project-card, .oms-showcase-card');
    if (!tarjeta) return;
    const rect = tarjeta.getBoundingClientRect();
    tarjeta.style.setProperty('--mouse-x', `${evento.clientX - rect.left}px`);
    tarjeta.style.setProperty('--mouse-y', `${evento.clientY - rect.top}px`);
  });
}

export function iniciarAcordeonResumen() {
  const cabeceras = document.querySelectorAll('.lui-accordion-header');
  cabeceras.forEach((boton) => {
    boton.addEventListener('click', () => {
      const item = boton.closest('.lui-accordion-item');
      const icono = boton.querySelector('.acc-toggle-icon');
      if (!item) return;

      const abierto = item.classList.toggle('is-open');
      if (icono) {
        icono.textContent = abierto ? '−' : '+';
      }
    });
  });
}

export function iniciarAnimacionesScroll() {
  iniciarTypewriter();
  iniciarParallaxHero();
  iniciarAcordeonResumen();
}

export async function actualizarMetricasGitHub(usuario) {
  const contadorRepos = document.getElementById('ghRepoCount');
  if (!contadorRepos) return;

  try {
    const respuesta = await fetch(`https://api.github.com/users/${usuario}`);
    if (!respuesta.ok) return;

    const datos = await respuesta.json();
    if (typeof datos.public_repos === 'number' && datos.public_repos > 0) {
      contadorRepos.textContent = `${datos.public_repos}+`;
    }
  } catch {
    contadorRepos.textContent = '61+';
  }
}
