const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Recupera o tema salvo (se o usuário já visitou antes)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';

  if (next === 'dark') {
    root.removeAttribute('data-theme'); 
  } else {
    root.setAttribute('data-theme', 'light');
  }

  localStorage.setItem('theme', next);
});