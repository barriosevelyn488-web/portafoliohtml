/* ==========================================================================
   MÓDULO: MOTION DESIGN ENGINE (GSAP 3 + SCROLLTRIGGER + LENIS SMOOTH SCROLL)
   v8.0 — Full-Viewport Editorial Choreography & 3D Floating Icons
   ========================================================================== */

export function iniciarExperienciaInmersiva() {
  iniciarLenisSmoothScroll();
  iniciarCoreografiaHeroGSAP();
  iniciarScrollTriggerSeccionesGSAP();
  iniciarParallax3DCubesHero();
  iniciarToggleFotoSobreMi();
  iniciarLaserScrollProgress();
  iniciarCanvasNodos();
  iniciarTerminalStreamingOMS();
}

/**
 * 0. Lenis Smooth Scroll sincronizado con GSAP & ScrollTrigger
 */
function iniciarLenisSmoothScroll() {
  if (typeof window.Lenis !== 'function' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const lenis = new window.Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95
  });

  window.__lenis__ = lenis;

  if (window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    lenis.on('scroll', window.ScrollTrigger.update);
    window.gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    window.gsap.ticker.lagSmoothing(0);
  } else {
    const rafLoop = (time) => {
      lenis.raf(time);
      requestAnimationFrame(rafLoop);
    };
    requestAnimationFrame(rafLoop);
  }
}

/**
 * 1. Coreografía Exacta de la Sección 1 con GSAP Timeline (0.00s -> 1.75s)
 * Beat 1: Entra "Portafolio" horizontal con motion-blur
 * Beat 2: Se abre por en medio; recuadro pequeño crece a rectángulo y expande su fondo a TODA la pantalla (100vw x 100vh)
 * Beat 3: El fondo expandido desaparece; el recuadro de la foto se encoge y se oculta DETRÁS de Evelyn; "Portafolio" queda detrás de ella
 * Beat 4: 6 Iconos 3D coloridos flotan alrededor con profundidad Z y levitación continua
 */
function iniciarCoreografiaHeroGSAP() {
  const stage = document.getElementById('heroSplitArena');
  if (!stage) return;

  const expandBg = stage.querySelector('.hero-stage-expand-bg');
  const frameShrink = stage.querySelector('.hero-portrait-frame-shrink');
  const wordLeft = stage.querySelector('.word-left');
  const wordRight = stage.querySelector('.word-right');
  const portrait = stage.querySelector('.hero-portrait-freestanding');
  const cubes = stage.querySelectorAll('.hero-3d-cube');
  const metaTop = stage.querySelector('.hero-stage-top-meta');
  const cornerTags = stage.querySelector('.hero-stage-corner-tags');
  const baseline = stage.querySelector('.hero-stage-baseline');
  const btnRebobinar = document.getElementById('btnRebobinarIntro');

  if (!window.gsap) return;
  const gsap = window.gsap;

  const ejecutarTimeline = () => {
    gsap.killTweensOf([expandBg, frameShrink, wordLeft, wordRight, portrait, cubes, metaTop, cornerTags, baseline]);

    // Estado inicial limpio
    gsap.set(wordLeft, { x: -120, opacity: 0, filter: 'blur(14px)', scaleX: 1.15 });
    gsap.set(wordRight, { x: 120, opacity: 0, filter: 'blur(14px)', scaleX: 1.15 });
    gsap.set(expandBg, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0, borderRadius: '28px' });
    gsap.set(frameShrink, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0, borderRadius: '26px' });
    gsap.set(portrait, { scale: 0.22, y: -35, opacity: 0, filter: 'blur(8px) drop-shadow(0 22px 44px rgba(4, 17, 43, 0.28))' });
    gsap.set(cubes, { scale: 0.25, opacity: 0, rotationX: 28, rotationY: -35, y: 24 });
    gsap.set([metaTop, cornerTags, baseline], { opacity: 0, y: 12 });

    const tl = gsap.timeline();

    // Beat 1 (0.00s - 0.42s): Entra la palabra "Portafolio" rápida y nítida
    tl.to([wordLeft, wordRight], {
      x: 0,
      scaleX: 1,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.44,
      ease: 'expo.out'
    }, 0)

      // Beat 2A (0.36s): Se abre "Portafolio" a la mitad & nace el recuadro con el retrato
      .to(wordLeft, { x: -85, duration: 0.42, ease: 'power3.inOut' }, 0.36)
      .to(wordRight, { x: 85, duration: 0.42, ease: 'power3.inOut' }, 0.36)

      .to(frameShrink, {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        ease: 'expo.out'
      }, 0.38)

      .to(portrait, {
        scale: 0.86,
        y: -14,
        opacity: 1,
        filter: 'blur(0px) drop-shadow(0 22px 44px rgba(4, 17, 43, 0.28))',
        duration: 0.48,
        ease: 'expo.out'
      }, 0.42)

      // Beat 2B (0.50s - 1.05s): El fondo se expande a TODA la pantalla (scale 28 covers 100vw x 100vh) y desaparece
      .to(expandBg, {
        scale: 28,
        opacity: 0.85,
        borderRadius: '0px',
        duration: 0.62,
        ease: 'expo.inOut'
      }, 0.46)
      .to(expandBg, {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.out'
      }, 0.95)

      // Beat 3 (0.85s - 1.28s): Recuadro de la foto se encoge y oculta detrás; foto toma protagonismo; "Portafolio" cierra detrás de ella
      .to(frameShrink, {
        scale: 0,
        opacity: 0,
        duration: 0.38,
        ease: 'power3.in'
      }, 0.85)
      .to(portrait, {
        scale: 1,
        y: 0,
        duration: 0.45,
        ease: 'expo.out'
      }, 0.88)
      .to([wordLeft, wordRight], {
        x: 0,
        duration: 0.46,
        ease: 'expo.out'
      }, 0.88)

      // Beat 4 (1.08s - 1.65s): Aparecen los 6 Iconos 3D flotando + etiquetas limpias
      .to(cubes, {
        scale: 1,
        opacity: 1,
        rotationX: 14,
        rotationY: -16,
        y: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: 'back.out(1.65)',
        onComplete: () => {
          // Levitación continua suave en 3D para cada cubo
          cubes.forEach((cube, idx) => {
            gsap.to(cube, {
              y: idx % 2 === 0 ? -12 : 10,
              rotationZ: idx % 2 === 0 ? 3 : -3,
              duration: 2.2 + (idx % 3) * 0.45,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut'
            });
          });
        }
      }, 1.08)
      .to([metaTop, cornerTags, baseline], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out'
      }, 1.15);

    return tl;
  };

  ejecutarTimeline();

  if (btnRebobinar) {
    btnRebobinar.addEventListener('click', () => {
      if (window.__lenis__) {
        window.__lenis__.scrollTo(0, { duration: 0.8, onComplete: () => ejecutarTimeline() });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => ejecutarTimeline(), 350);
      }
    });
  }
}

/**
 * 2. ScrollTrigger Transiciones Fluidas Entre Secciones Full-Screen
 * Al salir arriba, cada sección se encoge y repliega hacia una esquina alterna;
 * la siguiente emerge suavemente desde el ángulo opuesto.
 */
function iniciarScrollTriggerSeccionesGSAP() {
  if (!window.gsap || !window.ScrollTrigger || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.lui-section').forEach((s) => s.classList.add('is-revealed'));
    return;
  }

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  const secciones = Array.from(document.querySelectorAll('.lui-section'));

  secciones.forEach((sec, idx) => {
    const inner = sec.querySelectorAll(':scope > *:not(.lui-bg-title)');
    if (!inner.length) return;

    const dirX = idx % 2 === 0 ? -95 : 95;
    const esUltima = idx === secciones.length - 1;
    const esTrayectoria = sec.id === 'trayectoria';

    // Marcar .is-revealed en cuanto entra la sección
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 85%',
      onEnter: () => sec.classList.add('is-revealed'),
      onEnterBack: () => sec.classList.add('is-revealed')
    });

    if (idx === 0) {
      // Sección 1 (Hero 100vh): permanece nítida al inicio y al hacer scroll se repliega hacia la esquina superior izquierda
      gsap.fromTo(
        inner,
        { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1 },
        {
          x: -95,
          y: -45,
          scale: 0.84,
          rotation: -1.6,
          opacity: 0.08,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: sec,
            start: 'bottom 78%',
            end: 'bottom top',
            scrub: 0.75
          }
        }
      );
      return;
    }

    // Secciones intermedias y final: una sola línea de tiempo continua (Cero colisión de propiedades)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sec,
        start: 'top bottom',
        end: esUltima ? 'top 25%' : 'bottom top',
        scrub: 0.8
      }
    });

    // Fase de entrada (0% -> 30%)
    tl.fromTo(
      inner,
      {
        x: 0,
        y: esTrayectoria ? -48 : 65,
        scale: 0.92,
        rotation: 0,
        opacity: 0.1
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: esUltima ? 1 : 0.3,
        ease: 'none'
      }
    );

    if (!esUltima) {
      // Meseta de lectura limpia (30% -> 68%)
      tl.to(inner, { duration: 0.38 });

      // Fase de salida hacia esquina alterna (68% -> 100%)
      tl.to(inner, {
        x: dirX,
        y: -40,
        scale: 0.85,
        rotation: idx % 2 === 0 ? -1.4 : 1.4,
        opacity: 0.08,
        duration: 0.32,
        ease: 'none'
      });
    }
  });
}

/**
 * 3. Parallax Magnético 3D sobre los 6 Iconos Flotantes al mover el cursor
 */
function iniciarParallax3DCubesHero() {
  const stage = document.getElementById('heroSplitArena');
  if (!stage || window.matchMedia('(pointer: coarse)').matches || !window.gsap) return;

  const gsap = window.gsap;
  const cubes = stage.querySelectorAll('.hero-3d-cube[data-depth]');
  if (!cubes.length) return;

  const setters = Array.from(cubes).map((cube) => ({
    cube,
    depth: parseFloat(cube.getAttribute('data-depth') || '0.04'),
    setX: gsap.quickTo(cube, 'x', { duration: 0.5, ease: 'power3' }),
    setRY: gsap.quickTo(cube, 'rotationY', { duration: 0.5, ease: 'power3' }),
    setRX: gsap.quickTo(cube, 'rotationX', { duration: 0.5, ease: 'power3' })
  }));

  stage.addEventListener(
    'mousemove',
    (e) => {
      const rect = stage.getBoundingClientRect();
      const xNorm = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const yNorm = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      setters.forEach(({ depth, setX, setRY, setRX }) => {
        setX(xNorm * depth * 450);
        setRY(-16 + xNorm * 14);
        setRX(14 - yNorm * 12);
      });
    },
    { passive: true }
  );

  stage.addEventListener('mouseleave', () => {
    setters.forEach(({ setX, setRY, setRX }) => {
      setX(0);
      setRY(-16);
      setRX(14);
    });
  });
}

/**
 * 4. Alternador de retrato profesional en Sobre Mí (Traje GitHub / Pelo lacio)
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

  const totalNodos = ancho < 768 ? 14 : 26;
  const nodos = [];

  for (let i = 0; i < totalNodos; i += 1) {
    nodos.push({
      x: Math.random() * ancho,
      y: Math.random() * alto,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radio: Math.random() * 1.8 + 1,
      baseAlpha: Math.random() * 0.25 + 0.15
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
        nodo.x -= (dxRaton / distRaton) * factor * 1.2;
        nodo.y -= (dyRaton / distRaton) * factor * 1.2;

        ctx.beginPath();
        ctx.moveTo(nodo.x, nodo.y);
        ctx.lineTo(raton.x, raton.y);
        ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${factor * 0.3})`;
        ctx.lineWidth = 0.85;
        ctx.stroke();
      }

      for (let j = i + 1; j < nodos.length; j += 1) {
        const otro = nodos[j];
        const dx = otro.x - nodo.x;
        const dy = otro.y - nodo.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 105) {
          const alphaLinea = (1 - dist / 105) * 0.18;
          ctx.beginPath();
          ctx.moveTo(nodo.x, nodo.y);
          ctx.lineTo(otro.x, otro.y);
          ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${alphaLinea})`;
          ctx.lineWidth = 0.65;
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
