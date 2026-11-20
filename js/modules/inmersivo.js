/* ==========================================================================
   MÓDULO: EXPERIENCIA CINÉTICA & MOTION GRAPHICS (inmersivo.js)
   Inspirado en Portafolio Editorial Behance 2026 — Orientado a Programación
   ========================================================================== */

export function iniciarExperienciaInmersiva() {
  iniciarPortadaCineticaBehance();
  iniciarSelectorRetratoPanelIzquierdo();
  iniciarLaserScrollProgress();
  iniciarCanvasNodos();
  iniciarTilt3DFisico();
  iniciarTerminalStreamingOMS();
}

/**
 * 0. Portada Cinética Editorial (Motion-Blur Wordmark + Retrato Estudio B&W + 4 Tarjetas 3D de Lenguajes)
 */
function iniciarPortadaCineticaBehance() {
  const overlay = document.getElementById('introTechOverlay');
  const stage = document.getElementById('alCoverStage');
  const btnDesplegar = document.getElementById('btnDesplegarPortafolio');
  const btnSaltar = document.getElementById('btnSaltarIntro');
  const btnRebobinar = document.getElementById('btnRebobinarIntro');
  const btnTogglePhoto = document.getElementById('btnToggleCoverPhoto');
  const coverPortrait = document.getElementById('alCoverPortraitImg');

  if (!overlay) return;

  document.body.classList.add('intro-active');
  let cerrando = false;

  const cerrarPortada = (seccionDestino = null) => {
    if (cerrando || overlay.classList.contains('intro-hidden')) return;
    cerrando = true;

    overlay.classList.add('is-unfolding');
    document.body.classList.remove('intro-active');

    if (seccionDestino) {
      const botonTab = document.querySelector(`.nav-pill-btn[data-tab-target="${seccionDestino}"]`);
      if (botonTab) botonTab.click();
    }

    setTimeout(() => {
      overlay.classList.add('intro-hidden');
      overlay.style.display = 'none';
      cerrando = false;
    }, 850);
  };

  const reabrirPortada = () => {
    overlay.style.display = 'flex';
    // Reiniciar animaciones de caracteres y tarjetas
    const chars = overlay.querySelectorAll('.al-char, .al-float-card, .al-portrait-img');
    chars.forEach((el) => {
      el.style.animation = 'none';
      void el.offsetHeight;
      el.style.animation = '';
    });

    void overlay.offsetHeight;
    overlay.classList.remove('intro-hidden', 'is-unfolding');
    document.body.classList.add('intro-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    cerrando = false;
  };

  if (btnDesplegar) {
    btnDesplegar.addEventListener('click', () => cerrarPortada());
  }
  if (btnSaltar) {
    btnSaltar.addEventListener('click', () => cerrarPortada());
  }
  if (btnRebobinar) {
    btnRebobinar.addEventListener('click', reabrirPortada);
  }

  // Clic en cualquiera de las 4 tarjetas 3D de lenguajes abre el portafolio en esa sección
  const tarjetasLenguajes = overlay.querySelectorAll('.al-float-card[data-goto-section]');
  tarjetasLenguajes.forEach((card) => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-goto-section');
      cerrarPortada(target);
    });
  });

  // Alternador de Retrato Editorial en la Portada
  const modosRetrato = [
    { src: 'img/evelyn-editorial-yo-bw.png', label: 'Retrato: Estudio B&W' },
    { src: 'img/evelyn-editorial-hat-bw.png', label: 'Retrato: Sombrero B&W' },
    { src: 'img/yo.png', label: 'Retrato: Estudio Color' }
  ];
  let indiceRetrato = 0;

  if (btnTogglePhoto && coverPortrait) {
    btnTogglePhoto.addEventListener('click', (e) => {
      e.stopPropagation();
      indiceRetrato = (indiceRetrato + 1) % modosRetrato.length;
      coverPortrait.src = modosRetrato[indiceRetrato].src;
      btnTogglePhoto.querySelector('span').textContent = modosRetrato[indiceRetrato].label;
    });
  }

  // Entrar haciendo scroll con la rueda del mouse (igual que una portada web interactiva)
  overlay.addEventListener(
    'wheel',
    (e) => {
      if (e.deltaY > 18 && !cerrando) {
        cerrarPortada();
      }
    },
    { passive: true }
  );

  // Soporte swipe hacia arriba en pantallas táctiles
  let touchStartY = null;
  overlay.addEventListener(
    'touchstart',
    (e) => {
      if (e.touches.length === 1) touchStartY = e.touches[0].clientY;
    },
    { passive: true }
  );
  overlay.addEventListener(
    'touchend',
    (e) => {
      if (touchStartY !== null && e.changedTouches.length === 1) {
        const dy = touchStartY - e.changedTouches[0].clientY;
        if (dy > 45) cerrarPortada();
      }
      touchStartY = null;
    },
    { passive: true }
  );

  // Teclado: Escape / Enter / Space para entrar
  window.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('intro-hidden')) {
      if (e.key === 'Escape' || e.key === 'Enter') {
        cerrarPortada();
      }
    }
  });

  // Parallax Multicapa 3D en tiempo real sobre las 4 tarjetas, la tipografía gigante y el retrato
  if (stage && !window.matchMedia('(pointer: coarse)').matches) {
    const capas = stage.querySelectorAll('[data-depth]');
    overlay.addEventListener(
      'mousemove',
      (e) => {
        if (cerrando) return;
        const xNorm = (e.clientX / window.innerWidth - 0.5) * 2;
        const yNorm = (e.clientY / window.innerHeight - 0.5) * 2;

        capas.forEach((capa) => {
          const depth = parseFloat(capa.getAttribute('data-depth') || '0.02');
          const moveX = (xNorm * depth * 520).toFixed(2);
          const moveY = (yNorm * depth * 380).toFixed(2);
          capa.style.translate = `${moveX}px ${moveY}px`;
        });
      },
      { passive: true }
    );
  }
}

/**
 * 0.5 Selector de Estilo de Retrato en el Panel Izquierdo Fijo
 */
function iniciarSelectorRetratoPanelIzquierdo() {
  const btnSwitch = document.getElementById('btnSwitchLeftPortrait');
  const mainImg = document.getElementById('mainPortraitImg');
  if (!btnSwitch || !mainImg) return;

  const variantes = [
    { src: 'img/evelyn-editorial-yo-bw.png', bw: true, text: '✦ Estudio B&W' },
    { src: 'img/evelyn-azul-sin-fondo.png', bw: false, text: '✦ Original Color' },
    { src: 'img/evelyn-editorial-hat-bw.png', bw: true, text: '✦ Sombrero B&W' },
    { src: 'img/yo.png', bw: false, text: '✦ Estudio Color' }
  ];
  let idx = 0;

  btnSwitch.addEventListener('click', () => {
    idx = (idx + 1) % variantes.length;
    mainImg.src = variantes[idx].src;
    mainImg.classList.toggle('is-editorial-bw', variantes[idx].bw);
    btnSwitch.querySelector('span').textContent = variantes[idx].text;
  });
}

/**
 * 1. Barra Láser Superior de Descubrimiento (Scroll Progress)
 */
function iniciarLaserScrollProgress() {
  const barraLaser = document.getElementById('scrollLaserProgress');
  if (!barraLaser) return;

  const actualizarProgreso = () => {
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    if (alturaTotal <= 0) return;
    const porcentaje = (window.scrollY / alturaTotal) * 100;
    barraLaser.style.width = `${Math.min(100, Math.max(0, porcentaje))}%`;
  };

  window.addEventListener('scroll', actualizarProgreso, { passive: true });
  actualizarProgreso();
}

/**
 * 2. Canvas Interactivo de Red de Datos y Nodos Flotantes (60 FPS)
 */
function iniciarCanvasNodos() {
  const canvas = document.getElementById('ambientNetworkCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let ancho = (canvas.width = window.innerWidth);
  let alto = (canvas.height = window.innerHeight);

  const esTemaOscuro = () => document.documentElement.getAttribute('data-theme') === 'dark';

  const totalNodos = ancho < 768 ? 22 : 45;
  const nodos = [];

  for (let i = 0; i < totalNodos; i += 1) {
    nodos.push({
      x: Math.random() * ancho,
      y: Math.random() * alto,
      vx: (Math.random() - 0.5) * 0.65,
      vy: (Math.random() - 0.5) * 0.65,
      radio: Math.random() * 2 + 1.2,
      baseAlpha: Math.random() * 0.4 + 0.3
    });
  }

  const raton = { x: -2000, y: -2000, radioInteraccion: 140 };

  window.addEventListener(
    'mousemove',
    (evento) => {
      raton.x = evento.clientX;
      raton.y = evento.clientY;
    },
    { passive: true }
  );

  window.addEventListener(
    'resize',
    () => {
      ancho = canvas.width = window.innerWidth;
      alto = canvas.height = window.innerHeight;
    },
    { passive: true }
  );

  let frameId = null;

  const animarNodos = () => {
    ctx.clearRect(0, 0, ancho, alto);

    const oscuro = esTemaOscuro();
    const colorR = oscuro ? 56 : 37;
    const colorG = oscuro ? 189 : 99;
    const colorB = oscuro ? 248 : 235;

    for (let i = 0; i < nodos.length; i += 1) {
      const nodo = nodos[i];

      nodo.x += nodo.vx;
      nodo.y += nodo.vy;

      if (nodo.x < 0 || nodo.x > ancho) nodo.vx *= -1;
      if (nodo.y < 0 || nodo.y > alto) nodo.vy *= -1;

      const dxRaton = raton.x - nodo.x;
      const dyRaton = raton.y - nodo.y;
      const distRaton = Math.sqrt(dxRaton * dxRaton + dyRaton * dyRaton);

      if (distRaton < raton.radioInteraccion) {
        const factor = (raton.radioInteraccion - distRaton) / raton.radioInteraccion;
        nodo.x -= (dxRaton / distRaton) * factor * 1.8;
        nodo.y -= (dyRaton / distRaton) * factor * 1.8;

        ctx.beginPath();
        ctx.moveTo(nodo.x, nodo.y);
        ctx.lineTo(raton.x, raton.y);
        ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${factor * 0.45})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (let j = i + 1; j < nodos.length; j += 1) {
        const otro = nodos[j];
        const dx = otro.x - nodo.x;
        const dy = otro.y - nodo.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          const alphaLinea = (1 - dist / 115) * 0.28;
          ctx.beginPath();
          ctx.moveTo(nodo.x, nodo.y);
          ctx.lineTo(otro.x, otro.y);
          ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${alphaLinea})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(nodo.x, nodo.y, nodo.radio, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${nodo.baseAlpha})`;
      ctx.fill();
    }

    frameId = requestAnimationFrame(animarNodos);
  };

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (frameId) cancelAnimationFrame(frameId);
    } else {
      frameId = requestAnimationFrame(animarNodos);
    }
  });

  frameId = requestAnimationFrame(animarNodos);
}

/**
 * 3. Efecto 3D Tilt Físico en Tarjetas (Perspectiva y Profundidad)
 */
function iniciarTilt3DFisico() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const selectorTarjetas =
    '.interactive-hover-card, .project-card, .hero-card-showcase, .oms-showcase-card, .circle-skill-card, .al-index-card';

  document.addEventListener('mousemove', (evento) => {
    const tarjeta = evento.target.closest(selectorTarjetas);
    if (!tarjeta) return;

    const rect = tarjeta.getBoundingClientRect();
    const x = (evento.clientX - rect.left) / rect.width - 0.5;
    const y = (evento.clientY - rect.top) / rect.height - 0.5;

    const rotarY = (x * 8).toFixed(2);
    const rotarX = (y * -8).toFixed(2);

    tarjeta.style.transform = `perspective(1000px) rotateX(${rotarX}deg) rotateY(${rotarY}deg) translateY(-4px)`;
  });

  document.addEventListener('mouseout', (evento) => {
    const tarjeta = evento.target.closest(selectorTarjetas);
    if (tarjeta && !tarjeta.contains(evento.relatedTarget)) {
      tarjeta.style.transform = '';
    }
  });
}

/**
 * 4. Terminal Streaming en Vivo para la Consola OMS
 */
function iniciarTerminalStreamingOMS() {
  const botonesConsola = document.querySelectorAll('[data-oms-view]');
  const salidaConsola = document.getElementById('omsConsoleOutput');
  if (!botonesConsola.length || !salidaConsola) return;

  let temporizadorTyping = null;

  const escribirTextoStreaming = (textoCompleto) => {
    if (temporizadorTyping) clearInterval(temporizadorTyping);

    salidaConsola.textContent = '';
    let indice = 0;
    const paso = Math.max(3, Math.floor(textoCompleto.length / 35));

    temporizadorTyping = setInterval(() => {
      indice += paso;
      if (indice >= textoCompleto.length) {
        salidaConsola.textContent = textoCompleto;
        clearInterval(temporizadorTyping);
        temporizadorTyping = null;
      } else {
        salidaConsola.textContent = textoCompleto.slice(0, indice) + ' ▌';
      }
    }, 14);
  };

  botonesConsola.forEach((boton) => {
    boton.addEventListener('click', () => {
      setTimeout(() => {
        const textoOriginal = salidaConsola.textContent.replace(' ▌', '');
        escribirTextoStreaming(textoOriginal);
      }, 20);
    });
  });
}
