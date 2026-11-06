let temporizadorToast = null;

export function mostrarNotificacion(mensaje) {
  const elementoToast = document.getElementById('copyToast');
  const textoToast = document.getElementById('copyToastText');
  if (!elementoToast) return;

  if (textoToast) {
    textoToast.textContent = mensaje;
  } else {
    elementoToast.textContent = mensaje;
  }

  elementoToast.removeAttribute('hidden');

  if (temporizadorToast) {
    clearTimeout(temporizadorToast);
  }

  temporizadorToast = setTimeout(() => {
    elementoToast.setAttribute('hidden', '');
  }, 2800);
}

function obtenerDatosFormulario() {
  const campoNombre = document.getElementById('senderName');
  const campoMotivo = document.getElementById('senderRole');
  const campoMensaje = document.getElementById('senderMessage');

  return {
    nombre: (campoNombre?.value || '').trim(),
    motivo: (campoMotivo?.value || 'Contacto desde Portafolio').trim(),
    mensaje: (campoMensaje?.value || '').trim()
  };
}

export function iniciarContacto() {
  const NUMERO_WHATSAPP = '50233235828';
  const CORREO_EVELYN = 'barriosevelyn488@gmail.com';

  const botonesCopiar = document.querySelectorAll('[data-copy]');
  botonesCopiar.forEach((boton) => {
    boton.addEventListener('click', async () => {
      const textoACopiar = boton.getAttribute('data-copy');
      if (!textoACopiar) return;

      try {
        await navigator.clipboard.writeText(textoACopiar);
        mostrarNotificacion(`Copiado: ${textoACopiar}`);
      } catch {
        mostrarNotificacion(`Dato: ${textoACopiar}`);
      }
    });
  });

  const formulario = document.getElementById('contactQuickForm');
  if (formulario) {
    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const { nombre, motivo, mensaje } = obtenerDatosFormulario();

      if (!nombre || !mensaje) {
        mostrarNotificacion('Por favor escribe tu nombre y mensaje.');
        return;
      }

      const textoWhatsApp = `Hola Evelyn, soy *${nombre}*.\n*Motivo:* ${motivo}\n\n${mensaje}`;
      const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(textoWhatsApp)}`;

      window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
      mostrarNotificacion('Abriendo WhatsApp...');
    });
  }

  const botonCorreo = document.getElementById('sendEmailDirectBtn');
  if (botonCorreo) {
    botonCorreo.addEventListener('click', () => {
      const { nombre, motivo, mensaje } = obtenerDatosFormulario();

      if (!nombre || !mensaje) {
        mostrarNotificacion('Por favor escribe tu nombre y mensaje antes de enviar.');
        return;
      }

      const asunto = `${motivo} — ${nombre}`;
      const cuerpo = `Hola Evelyn,\n\nSoy ${nombre}.\n\n${mensaje}`;
      const urlMailto = `mailto:${CORREO_EVELYN}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

      window.location.href = urlMailto;
      mostrarNotificacion('Abriendo cliente de correo...');
    });
  }
}
