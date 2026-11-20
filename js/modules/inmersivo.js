/* ==========================================================================
   MÓDULO: EXPERIENCIA CINÉTICA & INTERACTIVIDAD EDITORIAL (v6.0)
   1. Entrada cinética ("SOFTWARE" se abre en medio -> foto + iconos detrás)
   2. Alternador de foto profesional en Sobre mí (Traje GitHub / Pelo lacio)
   3. Barra láser scroll + Red sutil de nodos + Tilt 3D + Terminal streaming OMS
   ========================================================================== */

export function iniciarExperienciaInmersiva() {
  iniciarReplayHero();
  iniciarParallaxChipsHero();
  iniciarToggleFotoSobreMi();
  iniciarLaserScrollProgress();
  iniciarCanvasNodos();
  iniciarTilt3DFisico();
  iniciarTerminalStreamingOMS();
}

/**
 * 0. Replay de la animación de entrada ("SOFTWARE se abre por en medio")
 */
function iniciarReplayHero() {
  const btnRebobinar = document.getElementById('btnRebobinarIntro');
  const wordRow = document.querySelector('.hero-split-word-row');
  if (!btnRebobinar || !wordRow) return;

  btnRebobinar.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      wordRow.classList.add('is-replaying');
      void wordRow.offsetHeight;
      wordRow.classList.remove('is-replaying');
    }, 320);
  });
}

/**
 * 0.2 Parallax sutil en los 6 iconos de lenguajes detrás de la foto Hero
 */
function iniciarParallaxChipsHero() {
  const arena = document.getElementById('heroSplitArena');
  if (!arena || window.matchMedia('(pointer: coarse)').matches) return;

  const chips = arena.querySelectorAll('.hero-lang-chip[data-depth]');
  if (!chips.length) return;

  arena.addEventListener(
    'mousemove',
    (e) => {
      const rect = arena.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      chips.forEach((chip) => {
        const depth = parseFloat(chip.getAttribute('data-depth') || '0.04');
        const tx = (x * depth * 420).toFixed(2);
        const ty = (y * depth * 320).toFixed(2);
        chip.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    },
    { passive: true }
  );

  arena.addEventListener('mouseleave', () => {
    chips.forEach((chip) => {
      chip.style.transform = '';
    });
  });
}

/**
 * 0.5 Alternador de retrato profesional en Sobre Mí (Traje GitHub / Pelo lacio)
 */
function iniciarToggleFotoSobreMi() {
  const btn = document.getElementById('btnToggleAboutPhoto');
  const img = document.getElementById('aboutPortraitImg');
  if (!btn || !img) return;

  const fotos = [
    { src: 'img/evelyn-traje-github.jpg', label: '✦ Alternar foto' },
    { src: 'img/evelyn-pelo-planchado.jpg', label: '✦ Volver a traje' }
  ];
  let idx = 0;

  btn.addEventListener('click', () => {
    idx = (idx + 1) % fotos.length;
    img.src = fotos[idx].src;
    const span = btn.querySelector('span');
    if (span) span.textContent = fotos[idx].label;
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
 * 2. Canvas Interactivo Sutil de Red de Nodos Tech (60 FPS)
 */
function iniciarCanvasNodos() {
  const canvas = document.getElementById('ambientNetworkCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let ancho = (canvas.width = window.innerWidth);
  let alto = (canvas.height = window.innerHeight);

  const esTemaOscuro = () => document.documentElement.getAttribute('data-theme') === 'dark';

  const totalNodos = ancho < 768 ? 16 : 30;
  const nodos = [];

  for (let i = 0; i < totalNodos; i += 1) {
    nodos.push({
      x: Math.random() * ancho,
      y: Math.random() * alto,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radio: Math.random() * 1.8 + 1.1,
      baseAlpha: Math.random() * 0.3 + 0.2
    });
  }

  const raton = { x: -2000, y: -2000, radioInteraccion: 130 };

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
    const colorR = oscuro ? 56 : 2;
    const colorG = oscuro ? 189 : 132;
    const colorB = oscuro ? 248 : 199;

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
        nodo.x -= (dxRaton / distRaton) * factor * 1.4;
        nodo.y -= (dyRaton / distRaton) * factor * 1.4;

        ctx.beginPath();
        ctx.moveTo(nodo.x, nodo.y);
        ctx.lineTo(raton.x, raton.y);
        ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${factor * 0.35})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      for (let j = i + 1; j < nodos.length; j += 1) {
        const otro = nodos[j];
        const dx = otro.x - nodo.x;
        const dy = otro.y - nodo.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const alphaLinea = (1 - dist / 110) * 0.22;
          ctx.beginPath();
          ctx.moveTo(nodo.x, nodo.y);
          ctx.lineTo(otro.x, otro.y);
          ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${alphaLinea})`;
          ctx.lineWidth = 0.7;
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
 * 3. Efecto 3D Tilt Físico sutil en Tarjetas (Desktop)
 */
function iniciarTilt3DFisico() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const selectorTarjetas =
    '.interactive-hover-card, .carousel-project-card, .oms-showcase-card, .stack-index-card';

  document.addEventListener('mousemove', (evento) => {
    const tarjeta = evento.target.closest(selectorTarjetas);
    if (!tarjeta) return;

    const rect = tarjeta.getBoundingClientRect();
    const x = (evento.clientX - rect.left) / rect.width - 0.5;
    const y = (evento.clientY - rect.top) / rect.height - 0.5;

    const rotarY = (x * 6).toFixed(2);
    const rotarX = (y * -6).toFixed(2);

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
