document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      navList.classList.toggle('show');
    });
  }

  const form = document.getElementById('bookingForm');
  const message = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      message.textContent = '';

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const service = form.service.value;
      const date = form.date.value;

      if (!name) return message.textContent = 'Por favor ingresa tu nombre.';
      if (!email || !/\\S+@\\S+\\.\\S+/.test(email)) return message.textContent = 'Correo no válido.';
      if (!service) return message.textContent = 'Selecciona un servicio.';
      if (!date) return message.textContent = 'Selecciona una fecha.';

      message.textContent = '¡Reserva enviada! Te contactaremos pronto.';
      form.reset();
    });
  }
});