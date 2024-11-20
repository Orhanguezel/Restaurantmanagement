export default function Home() {
    const section = document.createElement('section');
    section.classList.add('home');
    section.innerHTML = `
        <div class="card">
            <img src="path-to-image.jpg" alt="Food Image" class="responsive-img">
            <h3>Bangkok Coconut and Strawberry Cake Recipe</h3>
            <p>
                This is a description of the dish. Time required: 1 hr. Difficulty: Advanced.
            </p>
        </div>
    `;

    // CSS dosyasını dahil et
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './styles/home.css';
    document.head.appendChild(style);

    return section;
}
