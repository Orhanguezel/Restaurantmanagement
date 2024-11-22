export default function Navbar() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  nav.innerHTML = `
<div class="navbar-container">
            <div class="navbar-logo">
                <img src="./assets/logo/logo.png" alt="Pizzeria La Dolce Vita Logo" />
                <span class="company-name">La Dolce Vita</span>
            </div>
            <ul class="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="navbar-icons">
                <i class="fas fa-user"></i>
                <i class="fas fa-shopping-cart"></i>
            </div>
            <div class="hamburger-menu">
                <i class="fas fa-bars"></i>
            </div>
        </div>
        <div class="sidebar">
            <button class="close-sidebar"><i class="fas fa-times"></i></button>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

    `;

  // Sidebar açma ve kapama işlevleri
  const hamburgerMenu = nav.querySelector(".hamburger-menu");
  const sidebar = nav.querySelector(".sidebar");
  const closeSidebar = nav.querySelector(".close-sidebar");

  hamburgerMenu.addEventListener("click", () => {
    sidebar.classList.add("active");
    document.body.style.overflow = "hidden"; // Scroll kilitle
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
    document.body.style.overflow = ""; // Scroll kilidini kaldır
  });

  // Navbar scroll efekti
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Dinamik olarak CSS dosyasını bağlama
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "./styles/navbar.css";
  document.head.appendChild(style);

  return nav;
}

// DOMContentLoaded ile Navbar'ın scroll efektini başlat
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
