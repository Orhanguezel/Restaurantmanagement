export default function Footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2024 Pizzeria La Dolce Vita. Alle Rechte vorbehalten.</p>
    `;
    footer.classList.add('footer');

    // CSS dosyasını dahil et
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './styles/footer.css';
    document.head.appendChild(style);

    return footer;
}
