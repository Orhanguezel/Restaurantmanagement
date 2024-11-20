export default function Home() {
    const section = document.createElement('section');
    section.classList.add('home');

    section.innerHTML = `
        <div class="home-content">
            <h1>Authentic Italian Pizza - Taste the Tradition.</h1>
            <p>Experience the irresistible flavors of Italy with our hand-tossed pizzas, crafted with love and the finest ingredients.</p>
            <div class="search-bar">
                <select>
                    <option>All Categories</option>
                    <option>Pizzas</option>
                    <option>Pasta</option>
                    <option>Desserts</option>
                </select>
                <input type="text" placeholder="Search for your favorite dish..." />
                <button>Search</button>
            </div>
            <h2>Special Offer of the Day!</h2>
            <p>Enjoy 20% off on our Margherita Pizza, a true classic topped with fresh mozzarella and basil.</p>
        </div>
        <div class="home-image">
            <img src="./assets/bg/lieferung.png" alt="Authentic Italian Pizza Delivery" />
        </div>
    `;

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './styles/home.css';
    document.head.appendChild(style);

    return section;
}
