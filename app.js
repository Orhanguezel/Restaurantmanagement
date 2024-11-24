import Footer from './components/footer.js';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import MenuComponent from './components/menuComponent.js';

const app = document.getElementById('app');

// Bölüm referansları
const sections = {
    home: Home(),
    menu: MenuComponent(),
};

// Navbar ve Footer yükleme
function renderNavbar() {
    app.appendChild(Navbar());
}

function renderFooter() {
    app.appendChild(Footer());
}

// Bölüm değiştirme işlevi
function renderSection(sectionId) {
    app.innerHTML = ''; // Tüm içerikleri temizle
    renderNavbar();
    if (sections[sectionId]) {
        app.appendChild(sections[sectionId]); // İlgili bölümü ekle
    } else {
        app.innerHTML += `<h1>404 - Sayfa Bulunamadı</h1>`;
    }
    renderFooter();
}

// Hash tabanlı routing işlevi
function handleRouteChange() {
    const hash = window.location.hash.slice(1); // Hash'in "#" kısmını çıkar (#menu -> menu)
    const sectionId = hash || 'home'; // Eğer hash yoksa varsayılan olarak "home"
    renderSection(sectionId);
}

// Hash değiştiğinde veya sayfa ilk yüklendiğinde çalıştır
window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('load', handleRouteChange);

// Sayfa ilk yüklendiğinde routing işlemini başlat
handleRouteChange();
