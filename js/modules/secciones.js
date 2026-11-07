/**
 * ==========================================================================
 * MÓDULO: CARGADOR DE SECCIONES HTML MODULARES (js/modules/secciones.js)
 * Permite que index.html sea un shell limpio, modular y liviano.
 * Carga e inyecta asíncronamente en paralelo los componentes desde /sections/
 * ==========================================================================
 */

export async function cargarSeccionesModulares() {
  const versionBust = Date.now();
  const componentes = [
    { id: 'sec-sobre-mi', url: `sections/sobre-mi.html?t=${versionBust}` },
    { id: 'sec-proyectos', url: `sections/proyectos.html?t=${versionBust}` },
    { id: 'sec-habilidades', url: `sections/habilidades.html?t=${versionBust}` },
    { id: 'sec-trayectoria', url: `sections/trayectoria.html?t=${versionBust}` },
    { id: 'sec-contacto', url: `sections/contacto.html?t=${versionBust}` },
    { id: 'sec-modales', url: `sections/modales.html?t=${versionBust}` }
  ];

  await Promise.all(
    componentes.map(async ({ id, url }) => {
      const placeholder = document.getElementById(id);
      if (!placeholder) return;

      try {
        const respuesta = await fetch(url, { cache: 'no-cache' });
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const contenidoHtml = await respuesta.text();
        placeholder.outerHTML = contenidoHtml;
      } catch (error) {
        console.error(`No se pudo cargar el componente modular [${url}]:`, error);
      }
    })
  );

  // Garantizar visibilidad de todas las secciones en el flujo scrolleable
  document.querySelectorAll('.lui-section').forEach((seccion) => {
    seccion.classList.add('is-revealed');
  });
}
