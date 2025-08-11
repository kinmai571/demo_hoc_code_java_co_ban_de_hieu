(function () {
  const byId = (id) => document.getElementById(id);

  // Mobile nav toggle
  const navToggle = byId('navToggle');
  const mainNav = byId('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Newsletter demo (no backend)
  const form = byId('newsletterForm');
  const emailInput = byId('emailInput');
  const msg = byId('newsletterMsg');
  if (form && emailInput && msg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const valid = /.+@.+\..+/.test(email);
      if (!valid) {
        msg.textContent = 'Email không hợp lệ. Vui lòng thử lại.';
        msg.style.color = '#ff6b6b';
        return;
      }
      msg.textContent = 'Đăng ký thành công! Hãy kiểm tra hộp thư.';
      msg.style.color = '#7de2d1';
      form.reset();
    });
  }

  // Footer year
  const yearEl = byId('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();


