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
      const claseBoton = enlace.primary ? 'lui-btn-primary' : 'lui-btn-secondary';
      return `
        <a href="${enlace.url}" target="_blank" rel="noopener noreferrer" class="lui-btn lui-btn-sm ${claseBoton}">
          <span>${enlace.label}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      `;
    })
    .join('');

  const imagenBannerHTML = proyecto.image
    ? `<div class="modal-project-banner" data-lightbox-src="${proyecto.image}" data-lightbox-title="${proyecto.title}" title="Haz clic para ver la imagen en grande" style="cursor: zoom-in;">
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
