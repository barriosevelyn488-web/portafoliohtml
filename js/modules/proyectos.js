import { abrirLightboxImagen } from './modales.js';

export function obtenerIconoTecnologiaSVG(nombre) {
  const clave = nombre.toLowerCase().trim();

  if (clave.includes('node')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z"/></svg>`;
  }
  if (clave.includes('express')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 17l6-10m0 10l-6-10m16 10l-6-10m0 10l6-10"/></svg>`;
  }
  if (clave.includes('postgres')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="6" rx="8" ry="3"></ellipse><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"></path><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"></path></svg>`;
  }
  if (clave.includes('mysql')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17a9 9 0 0 1 18 0"></path><path d="M7 17v-4a5 5 0 0 1 10 0v4"></path><circle cx="12" cy="9" r="1.5"></circle></svg>`;
  }
  if (clave.includes('typescript')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M3 3h18v18H3V3zm8.2 8.7V10H6v1.7h1.6v6.9h1.9v-6.9h1.7zm3.1 5.4c.7.4 1.5.6 2.3.6.8 0 1.3-.3 1.3-.8 0-.5-.4-.7-1.4-1.1-1.5-.5-2.5-1.2-2.5-2.5 0-1.5 1.2-2.6 3.1-2.6.9 0 1.7.2 2.4.6l-.6 1.5c-.6-.3-1.2-.5-1.8-.5-.7 0-1.2.3-1.2.8 0 .5.4.7 1.4 1.1 1.6.5 2.5 1.2 2.5 2.5 0 1.6-1.3 2.6-3.3 2.6-1.1 0-2.1-.3-2.9-.8l.7-1.4z"/></svg>`;
  }
  if (clave.includes('javascript') || clave.includes('es6')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M3 3h18v18H3V3zm13.7 13.9c.8 0 1.4-.4 1.7-.9l1.4.9c-.6 1-1.6 1.7-3.1 1.7-2.3 0-3.6-1.5-3.6-3.7 0-2.4 1.5-3.8 3.7-3.8 1.8 0 2.9 1 3.2 2.1l-1.5.7c-.2-.6-.7-1.1-1.7-1.1-1.2 0-2 .8-2 2.2 0 1.4.7 2.2 1.9 2.2zm-6.2.7c0 .8-.5 1.2-1.3 1.2-.7 0-1.2-.4-1.5-.9l-1.3.8c.6 1 1.5 1.6 2.8 1.6 1.7 0 2.8-.9 2.8-2.6v-6.9H8v1.5h1.5v5.3z"/></svg>`;
  }
  if (clave.includes('python')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M11.9 2c-3.4 0-5.4 1.5-5.4 4.4v2.2h5.4v.7H4.3C2 9.3 1 11.2 1 14.1c0 3 1.5 4.9 4.4 4.9h1.6v-2.3c0-1.8 1.6-3.3 3.5-3.3h5.3c1.6 0 2.9-1.3 2.9-2.9V6.4c0-2.7-2.1-4.4-6.8-4.4zm-2.4 1.8c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zm2.6 18.2c3.4 0 5.4-1.5 5.4-4.4v-2.2h-5.4v-.7h7.6c2.3 0 3.3-1.9 3.3-4.8 0-3-1.5-4.9-4.4-4.9h-1.6v2.3c0 1.8-1.6 3.3-3.5 3.3H10c-1.6 0-2.9 1.3-2.9 2.9v4.1c0 2.7 2.1 4.4 6.8 4.4zm2.4-1.8c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z"/></svg>`;
  }
  if (clave.includes('flutter') || clave.includes('dart')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M14.3 2.5L3.5 13.3l3.3 3.3L20.9 2.5h-6.6zm0 10.4l-4.9 4.9 4.9 4.9h6.6l-8.2-8.2 1.6-1.6z"/></svg>`;
  }
  if (clave.includes('docker')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M22.5 11.5c-.3-.2-1.7-.3-2.6.4-.3.2-.5.5-.7.9-.9-.5-2.2-.4-2.8-.2-.5-1.5-1.9-2.6-3.6-2.6h-.3V8.5h3V6h-3V3.5h-2.5V6H8V3.5H5.5V6H3V8.5h7v1.5H3c-.6 0-1 .4-1 1 0 4.1 3.2 7.5 7.3 7.8 1.4.1 2.8-.2 4-.8 2.2-1.1 3.7-3.2 4.1-5.7.9-.1 2.3-.4 2.8-1.5.2-.4.4-.8.4-1.3-.1.6-.6 1.7-1.1 2z"/></svg>`;
  }
  if (clave.includes('linux')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2C9.5 2 8 3.8 8 6.5v4c-.8.5-1.5 1.5-1.5 2.5 0 1.5.7 2.5 1.5 3-.5 1-1.5 1.8-3 2-.5.1-.9.5-.8 1 .1.5.5.9 1 .8 2.5-.3 4-1.8 4.5-3.3.8.3 1.6.5 2.3.5s1.5-.2 2.3-.5c.5 1.5 2 3 4.5 3.3.5.1.9-.3 1-.8.1-.5-.3-.9-.8-1-1.5-.2-2.5-1-3-2 .8-.5 1.5-1.5 1.5-3 0-1-.7-2-1.5-2.5v-4C16 3.8 14.5 2 12 2z"/></svg>`;
  }
  if (clave.includes('git')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M21.7 10.7l-8.4-8.4c-.4-.4-1.1-.4-1.5 0l-1.9 1.9 2.4 2.4c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.3 2.3c.5-.2 1.1-.1 1.5.3.6.6.6 1.6 0 2.2s-1.6.6-2.2 0c-.4-.4-.5-1-.3-1.5l-2.2-2.2v5.1c.2.1.3.3.4.4.6.6.6 1.6 0 2.2s-1.6.6-2.2 0-1.6-.6 0-2.2c.4-.4 1-.5 1.5-.3V8.8c-.5-.2-1-.7-1.2-1.2L9.5 10l-7.2 7.2c-.4.4-.4 1.1 0 1.5l8.4 8.4c.4.4 1.1.4 1.5 0l9.5-9.5c.4-.4.4-1.1 0-1.5z"/></svg>`;
  }
  if (clave.includes('firebase') || clave.includes('supabase')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`;
  }
  if (clave.includes('html') || clave.includes('css')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
  }
  if (clave.includes('redis')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8-2.8 1.6L9.2 5.8 12 4.2zM5.2 8.6l5.8 3.2v6.6l-5.8-3.2V8.6zm7.8 9.8v-6.6l5.8-3.2v6.6l-5.8 3.2z"/></svg>`;
  }
  if (clave.includes('websocket')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12a8 8 0 0 1 16 0"></path><path d="M7 12a5 5 0 0 1 10 0"></path><line x1="12" y1="12" x2="12" y2="21"></line></svg>`;
  }
  return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle></svg>`;
}

function crearTarjetaProyectoHTML(proyecto) {
  const categoriasTag = Array.isArray(proyecto.category)
    ? proyecto.category.join(' · ').toUpperCase()
    : 'SOFTWARE';
  const stackCorto = proyecto.techStack.slice(0, 3).join(' · ');

  return `
    <article class="project-card carousel-project-card" data-project-id="${proyecto.id}">
      <div class="project-cover-wrapper"
           data-lightbox-src="${proyecto.image}"
           data-lightbox-title="${proyecto.title}"
           title="Clic para ampliar imagen del proyecto"
           role="button"
           tabindex="0"
           aria-label="Ampliar captura de ${proyecto.title}">
        <span class="carousel-card-badge">${categoriasTag}</span>
        <img src="${proyecto.image}" alt="Captura o arquitectura de ${proyecto.title}" class="project-cover-img" loading="lazy">
      </div>

      <div class="carousel-card-footer">
        <h3 class="carousel-card-title">${proyecto.title}</h3>
        <span class="carousel-card-stack">${stackCorto}</span>
        <button type="button" class="carousel-summary-btn" data-explore-id="${proyecto.id}">
          <span>Ver resumen</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </article>
  `;
}

export function renderizarProyectos(listaProyectos, contenedorGrid) {
  if (!contenedorGrid) return;
  contenedorGrid.innerHTML = listaProyectos.map(crearTarjetaProyectoHTML).join('');
}

export function iniciarProyectos(todosLosProyectos, alSeleccionarProyecto) {
  const contenedorGrid = document.getElementById('projectsGrid');
  const botonesFiltro = document.querySelectorAll('.filter-btn');

  if (!contenedorGrid) return;

  renderizarProyectos(todosLosProyectos, contenedorGrid);

  // Filtros de categoría: Todos, APIs & Backend, Frontend & Web, Mobile
  botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
      const categoriaElegida = boton.getAttribute('data-filter') || 'all';

      botonesFiltro.forEach((b) => b.classList.remove('active'));
      boton.classList.add('active');

      const proyectosFiltrados =
        categoriaElegida === 'all'
          ? todosLosProyectos
          : todosLosProyectos.filter((proyecto) =>
              Array.isArray(proyecto.category) && proyecto.category.includes(categoriaElegida)
            );

      renderizarProyectos(proyectosFiltrados, contenedorGrid);
    });
  });

  // Delegación de eventos para Lightbox y modal de detalles
  contenedorGrid.addEventListener('click', (evento) => {
    // 1. Clic en miniatura de imagen -> Visor Lightbox
    const disparadorImagen = evento.target.closest('[data-lightbox-src]');
    if (disparadorImagen) {
      evento.preventDefault();
      const url = disparadorImagen.getAttribute('data-lightbox-src');
      const titulo = disparadorImagen.getAttribute('data-lightbox-title') || 'Captura del proyecto';
      abrirLightboxImagen(url, titulo);
      return;
    }

    // 2. Clic en botón "Detalles" -> Modal técnico
    const botonExplorar = evento.target.closest('[data-explore-id]');
    if (botonExplorar) {
      const idProyecto = botonExplorar.getAttribute('data-explore-id');
      const proyectoEncontrado = todosLosProyectos.find((p) => p.id === idProyecto);

      if (proyectoEncontrado && typeof alSeleccionarProyecto === 'function') {
        alSeleccionarProyecto(proyectoEncontrado);
      }
    }
  });

  // Accesibilidad por teclado para miniaturas de imagen (Enter / Espacio)
  contenedorGrid.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter' || evento.key === ' ') {
      const disparadorImagen = evento.target.closest('[data-lightbox-src]');
      if (disparadorImagen) {
        evento.preventDefault();
        const url = disparadorImagen.getAttribute('data-lightbox-src');
        const titulo = disparadorImagen.getAttribute('data-lightbox-title') || 'Captura del proyecto';
        abrirLightboxImagen(url, titulo);
      }
    }
  });

  iniciarConsolaOMS();
  iniciarControlesCarrusel(contenedorGrid);
  iniciarEnlacesStackAProyectos();
}

function iniciarControlesCarrusel(contenedorGrid) {
  const btnPrev = document.getElementById('carouselPrevBtn');
  const btnNext = document.getElementById('carouselNextBtn');
  if (!contenedorGrid) return;

  const pasoScroll = () => Math.min(380, contenedorGrid.clientWidth * 0.85);

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      contenedorGrid.scrollBy({ left: -pasoScroll(), behavior: 'smooth' });
    });
  }
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      contenedorGrid.scrollBy({ left: pasoScroll(), behavior: 'smooth' });
    });
  }

  // Controles del Carrusel de Stack Tecnológico (01-10)
  const stackTrack = document.getElementById('stackCarouselTrack');
  const stackPrev = document.getElementById('stackPrevBtn');
  const stackNext = document.getElementById('stackNextBtn');
  if (stackTrack) {
    const pasoStack = () => Math.min(300, stackTrack.clientWidth * 0.8);
    if (stackPrev) {
      stackPrev.addEventListener('click', () => {
        stackTrack.scrollBy({ left: -pasoStack(), behavior: 'smooth' });
      });
    }
    if (stackNext) {
      stackNext.addEventListener('click', () => {
        stackTrack.scrollBy({ left: pasoStack(), behavior: 'smooth' });
      });
    }
  }
}

function iniciarEnlacesStackAProyectos() {
  const tarjetasStack = document.querySelectorAll('[data-goto-projects]');
  const seccionProyectos = document.getElementById('proyectos');
  if (!tarjetasStack.length || !seccionProyectos) return;

  const irYFiltrar = (categoria) => {
    const btnFiltro = document.querySelector(`.filter-btn[data-filter="${categoria}"]`);
    if (btnFiltro) btnFiltro.click();
    if (window.__lenis__ && typeof window.__lenis__.scrollTo === 'function') {
      window.__lenis__.scrollTo(seccionProyectos, { duration: 1.15 });
    } else {
      seccionProyectos.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  tarjetasStack.forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
      const cat = tarjeta.getAttribute('data-goto-projects') || 'all';
      irYFiltrar(cat);
    });
    tarjeta.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const cat = tarjeta.getAttribute('data-goto-projects') || 'all';
        irYFiltrar(cat);
      }
    });
  });

  // Toggle desplegable para Consola OMS en vivo
  const btnOmsToggle = document.getElementById('btnToggleOmsConsole');
  const panelOms = document.getElementById('omsCollapsiblePanel');
  if (btnOmsToggle && panelOms) {
    btnOmsToggle.addEventListener('click', () => {
      const estaOculto = panelOms.hasAttribute('hidden');
      if (estaOculto) {
        panelOms.removeAttribute('hidden');
        btnOmsToggle.setAttribute('aria-expanded', 'true');
        btnOmsToggle.classList.add('is-open');
      } else {
        panelOms.setAttribute('hidden', '');
        btnOmsToggle.setAttribute('aria-expanded', 'false');
        btnOmsToggle.classList.remove('is-open');
      }
    });
  }
}

function iniciarConsolaOMS() {
  const botonesConsola = document.querySelectorAll('[data-oms-view]');
  const salidaConsola = document.getElementById('omsConsoleOutput');
  if (!botonesConsola.length || !salidaConsola) return;

  const vistasOMS = {
    realtime: `Flujo Backend OMS: Creación y notificación de orden en tiempo real
POST /api/orders  -->  Middleware de Validación y Manejo Centralizado de Errores
  ├─ 1. Validación de estructura y stock en PostgreSQL (Base normalizada 3NF)
  ├─ 2. Registro de transacción atómica en tablas de órdenes
  └─ 3. Publicación de evento en Redis y emisión bidireccional por WebSockets

Respuesta emitida en tiempo real:
{
  "order_id": "OMS-2026-0842",
  "status": "CONFIRMED",
  "channel": "orders_realtime_ws",
  "database": "PostgreSQL 3NF (Normalizada)",
  "error_handler": "CentralizedMiddleware"
}`,
    postgres: `Configuración de Plataforma PostgreSQL en Docker
Servicios en ejecución (docker compose ps):
  - postgres-db         (Puerto interno 5432 · Volumen persistente)
  - prometheus          (Recolección de métricas internas)
  - postgres-exporter   (Métricas de actividad, conexiones y locks)
  - node-exporter       (Uso de CPU, memoria RAM, disco y red)

Paneles monitoreados en Grafana:
  [Estado PostgreSQL: ACTIVO]  [Conexiones activas: 14]  [Bloqueos: 0]`,
    backups: `Automatización de Respaldos y Seguridad en Servidor Linux
1. Seguridad de Red:
   - Acceso SSH por llave pública y firewall UFW configurado
   - Puertos de monitoreo restringidos a red privada / VPN

2. Respaldo Diario Automático (crontab 02:00 AM):
   $ /opt/postgres-platform/scripts/backup_postgres.sh
   -> Ejecuta pg_dump dentro del contenedor PostgreSQL
   -> Comprime en .sql.gz y genera huella de verificación .sha256`
  };

  botonesConsola.forEach((boton) => {
    boton.addEventListener('click', () => {
      const claveVista = boton.getAttribute('data-oms-view');
      botonesConsola.forEach((b) => b.classList.remove('active'));
      boton.classList.add('active');

      if (vistasOMS[claveVista]) {
        salidaConsola.textContent = vistasOMS[claveVista];
      }
    });
  });
}
