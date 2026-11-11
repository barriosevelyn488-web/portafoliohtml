import { cargarSeccionesModulares } from './modules/secciones.js?v=4.1';
import { PROYECTOS } from './data/projectsData.js?v=4.1';
import { iniciarTema } from './modules/tema.js?v=4.1';
import { iniciarProyectos } from './modules/proyectos.js?v=4.1';
import { iniciarModales, abrirModalProyecto } from './modules/modales.js?v=4.1';
import { iniciarContacto } from './modules/contacto.js?v=4.1';
import {
  iniciarMenuMovil,
  iniciarPestanas,
  iniciarAnimacionesScroll,
  actualizarMetricasGitHub
} from './modules/navegacion.js?v=4.1';

async function iniciarAplicacion() {
  if (window.__PORTAFOLIO_INICIADO__) return;
  window.__PORTAFOLIO_INICIADO__ = true;

  // 1. Cargar las secciones modulares HTML en paralelo
  await cargarSeccionesModulares();

  // 2. Inicializar los módulos interactivos sobre el DOM completo
  iniciarTema();
  iniciarMenuMovil();
  iniciarPestanas();
  iniciarProyectos(PROYECTOS, abrirModalProyecto);
  iniciarModales();
  iniciarContacto();
  iniciarAnimacionesScroll();
  actualizarMetricasGitHub('barriosevelyn488-web');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarAplicacion);
} else {
  iniciarAplicacion();
}
