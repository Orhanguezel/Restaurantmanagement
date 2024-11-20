export default function Navbar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <ul class="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;
    nav.classList.add('navbar');

    // CSS dosyasını dahil et
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './styles/navbar.css';
    document.head.appendChild(style);

    return nav;
}
