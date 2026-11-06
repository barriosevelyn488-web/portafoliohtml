const CLAVE_TEMA = 'evelyn_theme_preference_v2';

export function aplicarTema(tema) {
  const elementoRaiz = document.documentElement;
  const etiquetaTema = document.getElementById('themeLabel');

  elementoRaiz.setAttribute('data-theme', tema);
  localStorage.setItem(CLAVE_TEMA, tema);

  if (etiquetaTema) {
    etiquetaTema.textContent = tema === 'light' ? 'Modo Oscuro' : 'Modo Claro';
  }
}

export function iniciarTema() {
  const botonTema = document.getElementById('themeToggleBtn');
  const temaGuardado = localStorage.getItem(CLAVE_TEMA);
  const temaInicial = temaGuardado || 'light';

  aplicarTema(temaInicial);

  if (botonTema) {
    botonTema.addEventListener('click', () => {
      const temaActual = document.documentElement.getAttribute('data-theme') || 'light';
      const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
      aplicarTema(nuevoTema);
    });
  }
}
