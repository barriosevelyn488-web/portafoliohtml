function crearTarjetaProyectoHTML(proyecto) {
  const listaPuntosHTML = proyecto.highlights
    .map((punto) => `<li>${punto}</li>`)
    .join('');

  const tecnologiasHTML = proyecto.techStack
    .map((tecnologia, indice) => {
      const claseDestacada = indice < 3 ? 'highlight' : '';
      return `<span class="tech-tag ${claseDestacada}">${tecnologia}</span>`;
    })
    .join('');

  const enlacesHTML = proyecto.links
    .map((enlace) => {
      const clasePrincipal = enlace.primary ? 'live-link' : '';
      return `
        <a href="${enlace.url}" target="_blank" rel="noopener noreferrer"
           class="project-action-link ${clasePrincipal}">
          <span>${enlace.label}</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      `;
    })
    .join('');

  return `
    <article class="project-showcase-card ${proyecto.featured ? 'featured-project' : ''}">
      <div class="project-cover-wrapper">
        <img src="${proyecto.image}" alt="Vista representativa de ${proyecto.title}" class="project-cover-image" loading="lazy">
        <div class="project-cover-badges">
          <span class="project-role-badge">${proyecto.role}</span>
          <span class="project-status-badge">${proyecto.status}</span>
        </div>
      </div>

      <div class="project-card-body">
        <div class="project-tech-summary-bar">
          <code>${proyecto.codePreview.method}</code>
          <span>${proyecto.codePreview.detail}</span>
        </div>

        <h3>${proyecto.title}</h3>
        <p class="project-card-summary">${proyecto.summary}</p>

        <ul class="project-highlights-list">
          ${listaPuntosHTML}
        </ul>

        <div class="tech-badges">
          ${tecnologiasHTML}
        </div>

        <div class="project-card-footer">
          <div class="project-links-row">
            ${enlacesHTML}
          </div>
          <button type="button" class="project-explore-btn" data-explore-id="${proyecto.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>Ver estructura técnica y detalles</span>
          </button>
        </div>
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

  botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
      const categoriaElegida = boton.getAttribute('data-filter') || 'all';

      botonesFiltro.forEach((b) => b.classList.remove('active'));
      boton.classList.add('active');

      const proyectosFiltrados =
        categoriaElegida === 'all'
          ? todosLosProyectos
          : todosLosProyectos.filter((proyecto) =>
              proyecto.category.includes(categoriaElegida)
            );

      renderizarProyectos(proyectosFiltrados, contenedorGrid);
    });
  });

  contenedorGrid.addEventListener('click', (evento) => {
    const botonExplorar = evento.target.closest('[data-explore-id]');
    if (!botonExplorar) return;

    const idProyecto = botonExplorar.getAttribute('data-explore-id');
    const proyectoEncontrado = todosLosProyectos.find((p) => p.id === idProyecto);

    if (proyectoEncontrado && typeof alSeleccionarProyecto === 'function') {
      alSeleccionarProyecto(proyectoEncontrado);
    }
  });

  iniciarConsolaOMS();
}

function iniciarConsolaOMS() {
  const botonesConsola = document.querySelectorAll('[data-oms-view]');
  const salidaConsola = document.getElementById('omsConsoleOutput');
  if (!botonesConsola.length || !salidaConsola) return;

  const vistasOMS = {
    realtime: `Flujo Backend OMS: Creación y notificación de orden en tiempo real
POST /api/orders  -->  Middleware de Validación y Manejo de Errores
  ├─ 1. Validación de estructura y stock en PostgreSQL (Base normalizada)
  ├─ 2. Registro de transacción en tablas de órdenes
  └─ 3. Publicación de evento en Redis y emisión por WebSocket

Respuesta emitida en tiempo real:
{
  "order_id": "OMS-2026-0842",
  "status": "CONFIRMED",
  "channel": "websocket_realtime",
  "database": "PostgreSQL (Normalizada)",
  "error_handler": "CentralizedMiddleware"
}`,
    postgres: `Configuración de Plataforma PostgreSQL en Docker (Softplus)
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
