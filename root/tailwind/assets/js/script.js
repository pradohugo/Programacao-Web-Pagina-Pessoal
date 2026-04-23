// ── Tema claro/escuro ──────────────────────
var html  = document.documentElement;
var btn   = document.getElementById('themeToggle');
var icon  = document.getElementById('themeIcon');

function applyTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark');
    html.classList.remove('light');
    if (icon) {
      icon.className = 'fa-solid fa-sun text-sm';
    }
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
    if (icon) {
      icon.className = 'fa-solid fa-moon text-sm';
    }
  }
  localStorage.setItem('theme', theme);
}

// Lê preferência salva ou detecta preferência do sistema
var saved = localStorage.getItem('theme');
if (saved) {
  applyTheme(saved);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
} else {
  applyTheme('light');
}

if (btn) {
  btn.addEventListener('click', function () {
    var current = html.classList.contains('dark') ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ── Menu mobile ────────────────────────────
var menuToggle  = document.getElementById('menuToggle');
var mobileMenu  = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });

  // Fecha o menu ao clicar em um link
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ── Ano no rodapé ───────────────────────────
var yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
