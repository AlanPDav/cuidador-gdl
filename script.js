// Archivo listo para agregar medición después.
// Para una campaña rápida, puedes añadir aquí eventos de Google Ads o Google Analytics.
// Ejemplo futuro: registrar clics en los botones de llamada y WhatsApp.

document.querySelectorAll('a[href^="tel:"], a[href*="wa.me"]').forEach((link) => {
  link.addEventListener('click', () => {
    console.log('Contacto iniciado:', link.href);
  });
});
