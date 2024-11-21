export default function Navbar() {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    nav.innerHTML = `
        <div class="navbar-container">
            <div class="navbar-logo">
                <img src="./assets/logo/logo.png" alt="Pizzeria La Dolce Vita Logo" />
                <span>La Dolce Vita</span>
            </div>
            <div class="hamburger-menu">
                <i class="fas fa-bars"></i>
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

    // Sidebar toggle functionality
    const hamburgerMenu = nav.querySelector('.hamburger-menu');
    const sidebar = nav.querySelector('.sidebar');
    const closeSidebar = nav.querySelector('.close-sidebar');

    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // CSS styles
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './styles/navbar.css';
    document.head.appendChild(style);

    return nav;
}

// Scroll effect to add border-bottom to the navbar
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
