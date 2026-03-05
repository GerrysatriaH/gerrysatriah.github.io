document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    duration: 800,
    once: false,
    offset: 100,
  });
});

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const savedTheme  = localStorage.getItem('theme');
      
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
  themeToggle.checked = savedTheme === 'dark';
} else {
  htmlElement.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    htmlElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); 
  } else {
    htmlElement.setAttribute('data-theme', 'light'); 
    localStorage.setItem('theme', 'light'); 
  }
});