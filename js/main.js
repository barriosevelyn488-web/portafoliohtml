import { PROYECTOS } from './data/projectsData.js';
import { iniciarTema } from './modules/tema.js';
import { iniciarProyectos } from './modules/proyectos.js';
import { iniciarModales, abrirModalProyecto } from './modules/modales.js';
import { iniciarContacto } from './modules/contacto.js';
import {
  iniciarMenuMovil,
  iniciarPestanas,
  iniciarAnimacionesScroll,
  actualizarMetricasGitHub
} from './modules/navegacion.js';

function iniciarAplicacion() {
  if (window.__PORTAFOLIO_INICIADO__) return;
  window.__PORTAFOLIO_INICIADO__ = true;

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
