/* ==========================================================================
   MÓDULO: EXPERIENCIA INMERSIVA Y ANIMACIONES TECH (inmersivo.js)
   Ecosistema interactivo para perfil de desarrollo de software
   ========================================================================== */

export function iniciarExperienciaInmersiva() {
  iniciarLaserScrollProgress();
  iniciarCanvasNodos();
  iniciarTilt3DFisico();
  iniciarTerminalStreamingOMS();
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

  // Cantidad adaptativa según tamaño de pantalla
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

    // Actualizar y dibujar nodos
    for (let i = 0; i < nodos.length; i += 1) {
      const nodo = nodos[i];

      nodo.x += nodo.vx;
      nodo.y += nodo.vy;

      // Rebote suave en bordes de pantalla
      if (nodo.x < 0 || nodo.x > ancho) nodo.vx *= -1;
      if (nodo.y < 0 || nodo.y > alto) nodo.vy *= -1;

      // Interacción con ratón (repulsión suave)
      const dxRaton = raton.x - nodo.x;
      const dyRaton = raton.y - nodo.y;
      const distRaton = Math.sqrt(dxRaton * dxRaton + dyRaton * dyRaton);

      if (distRaton < raton.radioInteraccion) {
        const factor = (raton.radioInteraccion - distRaton) / raton.radioInteraccion;
        nodo.x -= (dxRaton / distRaton) * factor * 1.8;
        nodo.y -= (dyRaton / distRaton) * factor * 1.8;

        // Línea hacia el cursor
        ctx.beginPath();
        ctx.moveTo(nodo.x, nodo.y);
        ctx.lineTo(raton.x, raton.y);
        ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${factor * 0.45})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Conexión entre nodos cercanos (Red neuronal / Red de servidores)
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

      // Dibujar punto del nodo
      ctx.beginPath();
      ctx.arc(nodo.x, nodo.y, nodo.radio, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${nodo.baseAlpha})`;
      ctx.fill();
    }

    frameId = requestAnimationFrame(animarNodos);
  };

  // Pausar si la pestaña se oculta para ahorrar recursos
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
  // Solo en dispositivos con puntero fino (mouse/trackpad, no táctil)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const selectorTarjetas =
    '.interactive-hover-card, .project-card, .hero-card-showcase, .oms-showcase-card, .circle-skill-card';

  document.addEventListener('mousemove', (evento) => {
    const tarjeta = evento.target.closest(selectorTarjetas);
    if (!tarjeta) return;

    const rect = tarjeta.getBoundingClientRect();
    const x = (evento.clientX - rect.left) / rect.width - 0.5;
    const y = (evento.clientY - rect.top) / rect.height - 0.5;

    // Calcular inclinación tridimensional suave
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
      // Pequeño retardo para dejar que proyectos.js cargue el texto base
      setTimeout(() => {
        const textoOriginal = salidaConsola.textContent.replace(' ▌', '');
        escribirTextoStreaming(textoOriginal);
      }, 20);
    });
  });
}
