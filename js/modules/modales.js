function mostrarModal(elementoModal) {
  if (!elementoModal) return;
  elementoModal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

export function cerrarModales() {
  const modales = document.querySelectorAll('.modal-backdrop');
  modales.forEach((modal) => {
    modal.setAttribute('hidden', '');
  });
  document.body.style.overflow = '';
}

export function abrirModalProyecto(proyecto) {
  const modalProyecto = document.getElementById('architectureModal');
  const cuerpoModal = document.getElementById('archModalBody');

  if (!modalProyecto || !cuerpoModal) return;

  const botonesEnlacesHTML = proyecto.links
    .map((enlace) => {
      const claseBoton = enlace.primary ? 'lui-btn-primary' : 'lui-btn-secondary';
      return `
        <a href="${enlace.url}" target="_blank" rel="noopener noreferrer" class="lui-btn lui-btn-sm ${claseBoton}">
          <span>${enlace.label}</span>
        </a>
      `;
    })
    .join('');

  const imagenBannerHTML = proyecto.image
    ? `<div class="modal-project-banner">
         <img src="${proyecto.image}" alt="Ilustración de ${proyecto.title}" class="modal-project-banner-img" />
       </div>`
    : '';

  const puntosClaveHTML = proyecto.highlights
    .map((punto) => `<li>${punto}</li>`)
    .join('');

  cuerpoModal.innerHTML = `
    ${imagenBannerHTML}
    <span class="modal-badge">${proyecto.role} · ${proyecto.status}</span>
    <h3 id="modalTitle" class="modal-title">${proyecto.title}</h3>
    <p class="modal-subtitle">${proyecto.summary}</p>

    <div class="modal-grid">
      <div class="modal-panel">
        <h4>Estructura del Proyecto</h4>
        <p style="font-size: 0.86rem; color: var(--muted); margin-bottom: 10px;">
          ${proyecto.architecture.pattern}
        </p>
        <pre class="modal-code">${proyecto.architecture.diagram}</pre>
      </div>
      <div class="modal-panel">
        <h4>Detalle Técnico (${proyecto.codePreview.method})</h4>
        <p style="font-size: 0.84rem; color: var(--muted); margin-bottom: 10px;">
          ${proyecto.architecture.security}
        </p>
        <pre class="modal-code">${proyecto.architecture.sampleEndpoint}</pre>
      </div>
    </div>

    <div class="modal-panel" style="margin-bottom: 18px;">
      <h4>Aspectos Principales</h4>
      <ul class="modal-list">${puntosClaveHTML}</ul>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
      ${botonesEnlacesHTML}
    </div>
  `;

  mostrarModal(modalProyecto);
}

export function iniciarModales() {
  const modalProyecto = document.getElementById('architectureModal');
  const modalCV = document.getElementById('cvModal');
  const botonAbrirCV = document.getElementById('openCvModalBtn');
  const botonCerrarProyecto = document.getElementById('closeArchModalBtn');
  const botonCerrarCV = document.getElementById('closeCvModalBtn');

  if (botonAbrirCV) {
    botonAbrirCV.addEventListener('click', () => mostrarModal(modalCV));
  }

  if (botonCerrarProyecto) {
    botonCerrarProyecto.addEventListener('click', cerrarModales);
  }

  if (botonCerrarCV) {
    botonCerrarCV.addEventListener('click', cerrarModales);
  }

  [modalProyecto, modalCV].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener('click', (evento) => {
      if (evento.target === modal) {
        cerrarModales();
      }
    });
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
      cerrarModales();
    }
  });
}
