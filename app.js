import Footer from './components/footer.js';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import MenuComponent from "./components/menuComponent.js";

const app = document.getElementById('app');

// Bölüm referansları
const sections = {
    home: Home(),
    menu: MenuComponent(),
};

// Navbar
app.appendChild(Navbar());

// Varsayılan olarak sadece `Home` bölümünü göster
app.appendChild(sections.home);

// Footer
app.appendChild(Footer());

// Sekme değiştirme işlevi
function showSection(target) {
    app.innerHTML = ''; // Tüm içerikleri temizle
    app.appendChild(Navbar());
    app.appendChild(sections[target]); // Hedef bölümü ekle
    app.appendChild(Footer());
}

// Navbar içindeki bağlantıları dinleme
document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName === "A") {
        const sectionId = target.getAttribute("href").replace("#", ""); // Örn: #home -> home
        if (sections[sectionId]) {
            event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
            showSection(sectionId);
        }
    }
});
