import Header from './components/header.js';
import Footer from './components/footer.js';
import Navbar from './components/navbar.js';
import Home from './components/home.js';

const app = document.getElementById('app');

// Header
app.appendChild(Header());

// Navbar
app.appendChild(Navbar());

// Ana içerik (Home)
app.appendChild(Home());

// Footer
app.appendChild(Footer());
