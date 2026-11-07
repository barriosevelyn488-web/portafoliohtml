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

export function abrirLightboxImagen(urlImagen, titulo = 'Captura de pantalla del proyecto') {
  const modalLightbox = document.getElementById('imageLightboxModal');
  const imagenObjetivo = document.getElementById('lightboxTargetImg');
  const captionLightbox = document.getElementById('lightboxCaption');

  if (!modalLightbox || !imagenObjetivo) return;

  imagenObjetivo.src = urlImagen;
  imagenObjetivo.alt = titulo;

  if (captionLightbox) {
    captionLightbox.textContent = titulo;
  }

  mostrarModal(modalLightbox);
}

export function abrirModalProyecto(proyecto) {
  const modalProyecto = document.getElementById('architectureModal');
  const cuerpoModal = document.getElementById('archModalBody');

  if (!modalProyecto || !cuerpoModal) return;

  const botonesEnlacesHTML = proyecto.links
    .map((enlace) => {
      const claseBoton = enlace.primary ? 'modal-action-btn primary' : 'modal-action-btn secondary';
      const labelLower = (enlace.label || '').toLowerCase();
      const urlLower = (enlace.url || '').toLowerCase();

      // Icono contextual: GitHub, API o Web/App
      let iconoSVG = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      `;

      if (labelLower.includes('git') || urlLower.includes('github')) {
        iconoSVG = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        `;
      } else if (labelLower.includes('api') || labelLower.includes('postman') || labelLower.includes('backend')) {
        iconoSVG = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        `;
      }

      return `
        <a href="${enlace.url}" target="_blank" rel="noopener noreferrer" class="${claseBoton}">
          ${iconoSVG}
          <span>${enlace.label}</span>
        </a>
      `;
    })
    .join('');

  const imagenBannerHTML = proyecto.image
    ? `<div class="modal-project-banner" data-lightbox-src="${proyecto.image}" data-lightbox-title="${proyecto.title}" title="Haz clic para ver la captura ampliada en pantalla completa" style="cursor: zoom-in;">
         <img src="${proyecto.image}" alt="Vista previa de ${proyecto.title}" class="modal-project-banner-img" />
         <span class="banner-zoom-indicator">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
             <circle cx="11" cy="11" r="8"></circle>
             <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
             <line x1="11" y1="8" x2="11" y2="14"></line>
             <line x1="8" y1="11" x2="14" y2="11"></line>
           </svg>
           Ampliar captura
         </span>
       </div>`
    : '';

  const puntosClaveHTML = proyecto.highlights
    .map((punto) => `<li>${punto}</li>`)
    .join('');

  cuerpoModal.innerHTML = `
    ${imagenBannerHTML}
    <div class="modal-header-meta">
      <span class="modal-badge">${proyecto.role}</span>
      <span class="modal-status-pill">${proyecto.status}</span>
    </div>
    <h3 id="modalTitle" class="modal-title">${proyecto.title}</h3>
    <p class="modal-subtitle">${proyecto.summary}</p>

    <!-- Botones de Acción dentro del modal (App, API, GitHub) -->
    <div class="modal-actions-container">
      <div class="modal-actions-heading">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>Enlaces y Recursos del Proyecto</span>
      </div>
      <div class="modal-actions-grid">
        ${botonesEnlacesHTML}
      </div>
    </div>

    <!-- Estructura Técnica y Código -->
    <div class="modal-grid">
      <div class="modal-panel">
        <div class="modal-panel-header">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <h4>Estructura del Proyecto</h4>
        </div>
        <p class="modal-panel-desc">${proyecto.architecture.pattern}</p>
        <pre class="modal-code">${proyecto.architecture.diagram}</pre>
      </div>

      <div class="modal-panel">
        <div class="modal-panel-header">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          </svg>
          <h4>Detalle Técnico (${proyecto.codePreview.method})</h4>
        </div>
        <p class="modal-panel-desc">${proyecto.architecture.security}</p>
        <pre class="modal-code">${proyecto.architecture.sampleEndpoint}</pre>
      </div>
    </div>

    <div class="modal-panel modal-panel-highlights">
      <div class="modal-panel-header">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <h4>Aspectos Principales &amp; Logros Técnicos</h4>
      </div>
      <ul class="modal-list">${puntosClaveHTML}</ul>
    </div>
  `;

  const bannerEnModal = cuerpoModal.querySelector('.modal-project-banner');
  if (bannerEnModal) {
    bannerEnModal.addEventListener('click', () => {
      abrirLightboxImagen(proyecto.image, proyecto.title);
    });
  }

  mostrarModal(modalProyecto);
}

export function iniciarModales() {
  const modalProyecto = document.getElementById('architectureModal');
  const modalCV = document.getElementById('cvModal');
  const modalLightbox = document.getElementById('imageLightboxModal');

  const botonAbrirCV = document.getElementById('openCvModalBtn');
  const botonAbrirCVMovil = document.getElementById('drawerCvBtn');
  const botonCerrarProyecto = document.getElementById('closeArchModalBtn');
  const botonCerrarCV = document.getElementById('closeCvModalBtn');
  const botonCerrarLightbox = document.getElementById('closeLightboxBtn');

  if (botonAbrirCV) {
    botonAbrirCV.addEventListener('click', () => mostrarModal(modalCV));
  }

  if (botonAbrirCVMovil) {
    botonAbrirCVMovil.addEventListener('click', () => {
      if (typeof window.__cerrarMenuMovilDrawer__ === 'function') {
        window.__cerrarMenuMovilDrawer__();
      }
      mostrarModal(modalCV);
    });
  }

  if (botonCerrarProyecto) {
    botonCerrarProyecto.addEventListener('click', cerrarModales);
  }

  if (botonCerrarCV) {
    botonCerrarCV.addEventListener('click', cerrarModales);
  }

  if (botonCerrarLightbox) {
    botonCerrarLightbox.addEventListener('click', cerrarModales);
  }

  [modalProyecto, modalCV, modalLightbox].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener('click', (evento) => {
      // Cierra si se hace clic directamente en el fondo/backdrop
      if (evento.target === modal || evento.target.classList.contains('lightbox-backdrop-target')) {
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
