document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    duration: 800,
    once: false,
    offset: 100,
  });
});

const backToTopBtn = document.getElementById("btn-back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("opacity-0", "invisible", "translate-y-5");
    backToTopBtn.classList.add("opacity-100", "visible", "translate-y-0");
  } else {
    backToTopBtn.classList.remove("opacity-100", "visible", "translate-y-0");
    backToTopBtn.classList.add("opacity-0", "invisible", "translate-y-5");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const themeRadios = document.querySelectorAll('.theme-controller');
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';

htmlElement.setAttribute('data-theme', savedTheme);
themeRadios.forEach(radio => {
  if (radio.value === savedTheme) {
    radio.checked = true;
  }

  radio.addEventListener('change', (e) => {
    if (e.target.checked) {
      const newTheme = e.target.value;
      htmlElement.setAttribute('data-theme', newTheme); 
      localStorage.setItem('theme', newTheme); 
    }
  });
});