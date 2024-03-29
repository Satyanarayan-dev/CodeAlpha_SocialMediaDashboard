function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('.material-icons-outlined');
  if (body.classList.contains('dark-mode')) {
      icon.textContent = 'brightness_7';
  } else {
      icon.textContent = 'brightness_4'; 
  }
}
