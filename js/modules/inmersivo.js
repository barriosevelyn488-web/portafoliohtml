/* ==========================================================================
   MÓDULO: MOTION DESIGN ENGINE (GSAP 3 + SCROLLTRIGGER + CURSOR SPARKLE v9.0)
   - Ritmo pausado y cinematográfico en Sección 1 (4 fotos saliendo una por una)
   - Scroll natural 100% fluido (sin trabas, visible en cualquier parte)
   - Destello luminoso fluido siguiendo al mouse por toda la página
   ========================================================================== */

export function iniciarExperienciaInmersiva() {
  iniciarDestelloCursor();
  iniciarCoreografiaHeroGSAP();
  iniciarParallaxFotosHero();
  iniciarScrollTriggerSeccionesGSAP();
  iniciarAnimacionStackCascada();
  iniciarLaserScrollProgress();
  iniciarCanvasNodos();
  iniciarTerminalStreamingOMS();
}

/**
 * 0. Destello Luminoso y Estela Fluida al Mover el Mouse (#cursorSparkleCanvas)
 */
function iniciarDestelloCursor() {
  const canvas = document.getElementById('cursorSparkleCanvas');
  if (!canvas || window.matchMedia('(pointer: coarse)').matches) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }, { passive: true });

  const particulas = [];
  let cursor = { x: -200, y: -200, lastX: -200, lastY: -200 };
  const paleta = ['#38bdf8', '#7dd3fc', '#0ea5e9', '#bae6fd', '#ffffff'];

  window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;

    const dx = cursor.x - cursor.lastX;
    const dy = cursor.y - cursor.lastY;
    const dist = Math.hypot(dx, dy);

    if (dist > 4) {
      const cantidad = dist > 26 ? 3 : 2;
      for (let i = 0; i < cantidad; i += 1) {
        particulas.push({
          x: cursor.x + (Math.random() - 0.5) * 10,
          y: cursor.y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.1 + dx * 0.04,
          vy: (Math.random() - 0.5) * 1.1 + dy * 0.04 + 0.15,
          size: Math.random() * 3.4 + 1.8,
          alpha: 0.9,
          decay: Math.random() * 0.022 + 0.02,
          color: paleta[Math.floor(Math.random() * paleta.length)],
          isStar: Math.random() > 0.65
        });
      }
      cursor.lastX = cursor.x;
      cursor.lastY = cursor.y;
    }
  }, { passive: true });

  const render = () => {
    ctx.clearRect(0, 0, w, h);

    // Halo sutil de seguimiento directo bajo el cursor
    if (cursor.x > 0 && cursor.y > 0) {
      const glow = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, 38);
      glow.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
      glow.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, 38, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = particulas.length - 1; i >= 0; i -= 1) {
      const p = particulas[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;
      p.size *= 0.965;

      if (p.alpha <= 0.02 || p.size <= 0.4) {
        particulas.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 10;

      if (p.isStar) {
        // Destello en cruz de 4 puntas
        ctx.translate(p.x, p.y);
        ctx.beginPath();
        const r = p.size * 1.6;
        ctx.moveTo(0, -r);
        ctx.quadraticCurveTo(0, 0, r, 0);
        ctx.quadraticCurveTo(0, 0, 0, r);
        ctx.quadraticCurveTo(0, 0, -r, 0);
        ctx.quadraticCurveTo(0, 0, 0, -r);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
}

/**
 * 1. Coreografía Pausada y Elegante de Sección 1 (~3.4 segundos totales)
 * 1) Entra "Portafolio" suave
 * 2) Se abre a la mitad; cuadrito expande la foto y el fondo llena toda la pantalla
 * 3) Fondo desaparece; recuadro de la foto se encoge y oculta DETRÁS; "Portafolio" detrás de Evelyn
 * 4) Aparecen las 4 FOTOS UNA POR UNA con tiempo (IA, BD, Backend, API REST) y quedan flotando
 */
function iniciarCoreografiaHeroGSAP() {
  const stage = document.getElementById('heroSplitArena');
  if (!stage) return;

  const expandBg = stage.querySelector('.hero-stage-expand-bg');
  const frameShrink = stage.querySelector('.hero-portrait-frame-shrink');
  const wordLeft = stage.querySelector('.word-left');
  const wordRight = stage.querySelector('.word-right');
  const portrait = stage.querySelector('.hero-portrait-freestanding');
  const photos = stage.querySelectorAll('.hero-photo-spot');
  const metaTop = stage.querySelector('.hero-stage-top-meta');
  const cornerTags = stage.querySelector('.hero-stage-corner-tags');
  const baseline = stage.querySelector('.hero-stage-baseline');
  const btnRebobinar = document.getElementById('btnRebobinarIntro');

  if (!window.gsap) return;
  const gsap = window.gsap;

  const ejecutarTimeline = () => {
    gsap.killTweensOf([expandBg, frameShrink, wordLeft, wordRight, portrait, photos, metaTop, cornerTags, baseline]);

    gsap.set(wordLeft, { x: -130, opacity: 0, filter: 'blur(16px)', scaleX: 1.15 });
    gsap.set(wordRight, { x: 130, opacity: 0, filter: 'blur(16px)', scaleX: 1.15 });
    gsap.set(expandBg, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0, borderRadius: '28px' });
    gsap.set(frameShrink, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0, borderRadius: '26px' });
    gsap.set(portrait, { scale: 0.22, y: -32, opacity: 0, filter: 'blur(8px) drop-shadow(0 22px 44px rgba(4, 17, 43, 0.28))' });
    gsap.set(photos, { scale: 0.08, opacity: 0, y: 24 });
    gsap.set([metaTop, cornerTags, baseline], { opacity: 0, y: 14 });

    const tl = gsap.timeline();

    // Beat 1 (0.00s - 0.72s): Entra "Portafolio" elegante
    tl.to([wordLeft, wordRight], {
      x: 0,
      scaleX: 1,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.72,
      ease: 'expo.out'
    }, 0)

      // Beat 2A (0.65s - 1.35s): "Portafolio" se abre en el medio y nace el cuadrito con Evelyn
      .to(wordLeft, { x: -95, duration: 0.68, ease: 'power3.inOut' }, 0.62)
      .to(wordRight, { x: 95, duration: 0.68, ease: 'power3.inOut' }, 0.62)
      .to(frameShrink, { scale: 1, opacity: 1, duration: 0.65, ease: 'expo.out' }, 0.68)
      .to(portrait, {
        scale: 0.88,
        y: -14,
        opacity: 1,
        filter: 'blur(0px) drop-shadow(0 22px 44px rgba(4, 17, 43, 0.28))',
        duration: 0.72,
        ease: 'expo.out'
      }, 0.72)

      // Beat 2B (0.82s - 1.55s): El fondo luminoso se expande a toda la pantalla y se disuelve limpio
      .to(expandBg, {
        scale: 30,
        opacity: 0.85,
        borderRadius: '0px',
        duration: 0.78,
        ease: 'expo.inOut'
      }, 0.78)
      .to(expandBg, {
        opacity: 0,
        duration: 0.45,
        ease: 'power2.out'
      }, 1.38)

      // Beat 3 (1.42s - 2.15s): El recuadro celeste detrás de Evelyn se encoge y oculta; "Portafolio" cierra detrás de ella
      .to(frameShrink, { scale: 0, opacity: 0, duration: 0.58, ease: 'power3.in' }, 1.42)
      .to(portrait, { scale: 1, y: 0, duration: 0.68, ease: 'expo.out' }, 1.48)
      .to([wordLeft, wordRight], { x: 0, duration: 0.72, ease: 'expo.out' }, 1.48)

      // Aparecen encabezados "Evelyn Barrios" y pie de portada
      .to([metaTop, cornerTags, baseline], {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power2.out'
      }, 1.75)

      // Beat 4 (2.08s - 3.30s): LAS 4 FOTOS APARECEN UNA POR UNA CON TIEMPO Y QUEDAN FLOTANDO
      .to(photos, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.58,
        stagger: 0.28,
        ease: 'back.out(1.38)',
        onComplete: () => {
          photos.forEach((foto, idx) => {
            gsap.to(foto, {
              y: idx % 2 === 0 ? -9 : 9,
              rotation: idx % 2 === 0 ? 1.1 : -1.1,
              duration: 2.8 + (idx % 2) * 0.6,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut'
            });
          });
        }
      }, 2.05);

    return tl;
  };

  ejecutarTimeline();

  if (btnRebobinar) {
    btnRebobinar.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => ejecutarTimeline(), 380);
    });
  }
}

/**
 * 2. Parallax Magnético Suave en las 4 Fotos Flotantes
 */
function iniciarParallaxFotosHero() {
  const stage = document.getElementById('heroSplitArena');
  if (!stage || window.matchMedia('(pointer: coarse)').matches || !window.gsap) return;

  const gsap = window.gsap;
  const photos = stage.querySelectorAll('.hero-photo-spot[data-depth]');
  if (!photos.length) return;

  const setters = Array.from(photos).map((foto) => ({
    depth: parseFloat(foto.getAttribute('data-depth') || '0.03'),
    setX: gsap.quickTo(foto, 'x', { duration: 0.6, ease: 'power3' })
  }));

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const xNorm = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    setters.forEach(({ depth, setX }) => {
      setX(xNorm * depth * 420);
    });
  }, { passive: true });

  stage.addEventListener('mouseleave', () => {
    setters.forEach(({ setX }) => setX(0));
  });
}

/**
 * 3. ScrollTrigger Transiciones Fluidas No-Bloqueantes (Visible en cualquier lugar del scroll)
 */
function iniciarScrollTriggerSeccionesGSAP() {
  const secciones = Array.from(document.querySelectorAll('.lui-section'));
  if (!window.gsap || !window.ScrollTrigger || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    secciones.forEach((s) => s.classList.add('is-revealed'));
    return;
  }

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  secciones.forEach((sec, idx) => {
    const inner = sec.querySelectorAll(':scope > *:not(.lui-bg-title)');
    if (!inner.length) return;

    ScrollTrigger.create({
      trigger: sec,
      start: 'top 88%',
      onEnter: () => sec.classList.add('is-revealed'),
      onEnterBack: () => sec.classList.add('is-revealed')
    });

    if (idx === 0) {
      // Transición fluida Página 1 -> Página 2 (Hero se repliega suavemente mientras Sobre Mí sube)
      gsap.fromTo(
        inner,
        { scale: 1, y: 0, x: 0, opacity: 1 },
        {
          scale: 0.9,
          x: -60,
          y: -40,
          opacity: 0.25,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: sec,
            start: 'bottom 85%',
            end: 'bottom top',
            scrub: 0.7
          }
        }
      );
      return;
    }

    const esTrayectoria = sec.id === 'trayectoria';

    // Entrada fluida de cada sección — siempre legible en cualquier punto
    gsap.fromTo(
      inner,
      {
        y: esTrayectoria ? -36 : 48,
        scale: 0.96,
        opacity: 0
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sec,
          start: 'top 84%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}

/**
 * 4. Stack Tecnológico: Tarjetas emergiendo de abajo hacia arriba e iconos resurgiendo
 * de arriba hacia abajo (idéntico a la secuencia de CONTENIDO 01-04 de Behance)
 */
function iniciarAnimacionStackCascada() {
  const stackSec = document.getElementById('stack');
  if (!stackSec || !window.gsap || !window.ScrollTrigger) return;

  const gsap = window.gsap;
  const tarjetas = stackSec.querySelectorAll('.stack-index-card');
  const logos3D = stackSec.querySelectorAll('.stack-original-3d-logo');
  if (!tarjetas.length) return;

  gsap.set(tarjetas, { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0.2 });
  gsap.set(logos3D, { xPercent: -50, y: -70, scale: 0.65, rotationX: 12, rotationY: -14, rotationZ: -6, opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#stack',
      start: 'top 78%',
      toggleActions: 'play none none reverse'
    }
  });

  tl.to(tarjetas, {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    duration: 0.72,
    stagger: 0.16,
    ease: 'expo.out'
  }, 0)
    .to(logos3D, {
      xPercent: -50,
      y: 0,
      scale: 1,
      rotationX: 12,
      rotationY: -14,
      rotationZ: -6,
      opacity: 1,
      duration: 0.75,
      stagger: 0.16,
      ease: 'back.out(1.25)'
    }, 0.12);
}

/**
 * 5. Barra Láser Superior de Descubrimiento (Scroll Progress)
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
 * 6. Canvas Interactivo Sutil de Red de Nodos Tech (60 FPS)
 */
function iniciarCanvasNodos() {
  const canvas = document.getElementById('ambientNetworkCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let ancho = (canvas.width = window.innerWidth);
  let alto = (canvas.height = window.innerHeight);

  const esTemaOscuro = () => document.documentElement.getAttribute('data-theme') === 'dark';

  const totalNodos = ancho < 768 ? 14 : 24;
  const nodos = [];

  for (let i = 0; i < totalNodos; i += 1) {
    nodos.push({
      x: Math.random() * ancho,
      y: Math.random() * alto,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      radio: Math.random() * 1.8 + 1,
      baseAlpha: Math.random() * 0.24 + 0.14
    });
  }

  const raton = { x: -2000, y: -2000, radioInteraccion: 120 };

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
        nodo.x -= (dxRaton / distRaton) * factor * 1.1;
        nodo.y -= (dyRaton / distRaton) * factor * 1.1;
      }

      for (let j = i + 1; j < nodos.length; j += 1) {
        const otro = nodos[j];
        const dx = otro.x - nodo.x;
        const dy = otro.y - nodo.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          const alphaLinea = (1 - dist / 100) * 0.16;
          ctx.beginPath();
          ctx.moveTo(nodo.x, nodo.y);
          ctx.lineTo(otro.x, otro.y);
          ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${alphaLinea})`;
          ctx.lineWidth = 0.6;
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
 * 7. Terminal Streaming en Vivo para la Consola OMS
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
