export default function Header() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="logo">Cookery</div>
    `;
    header.classList.add('header');

    // CSS dosyasını dahil et
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './styles/header.css';
    document.head.appendChild(style);

    return header;
}
