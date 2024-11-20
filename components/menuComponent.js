import { default as menu } from "../js/Menu.js";

export default function MenuComponent() {
  const section = document.createElement("section");
  section.id = "menu-page";

  section.innerHTML = `
    <div class="menu-header">
      <h1>Menu</h1>
      <p>Home / Menu</p>
    </div>
    <div class="menu-content">
      <aside class="menu-categories">
        <h2>Categories</h2>
        <ul class="categories-list">
          ${menu.categories
            .map(
              (category) =>
                `<li data-category="${category.name}">${category.name}</li>`
            )
            .join("")}
        </ul>
      </aside>
      <div class="menu-products">
        <div class="sorting">
          <label for="sort">Sort By:</label>
          <select id="sort">
            <option value="default">Default sorting</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
        <div class="products-grid"></div>
      </div>
    </div>
  `;

  // Kategorilere tıklama olayını tanımlama
  const categoriesList = section.querySelector(".categories-list");
  const productsGrid = section.querySelector(".products-grid");

  categoriesList.addEventListener("click", (e) => {
    const categoryName = e.target.dataset.category;
    const category = menu.categories.find((cat) => cat.name === categoryName);

    if (category) {
      loadSubcategoriesAndProducts(category);
    }
  });

  function loadSubcategoriesAndProducts(category) {
    productsGrid.innerHTML = `
      <div class="subcategory-list">
        ${category.subcategories
          .map(
            (subcat) => `
          <div class="subcategory">
            <h3>${subcat.name}</h3>
            <p>${subcat.description}</p>
            <div class="subcategory-products">
              ${subcat.products
                .map(
                  (product) => `
                <div class="product-card">
                  <img src="${product.image || "./assets/default-image.png"}" alt="${product.name}" />
                  <h4>${product.name}</h4>
                  <p>${product.description}</p>
                  <p><strong>${product.prices.default.toFixed(2)} €</strong></p>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }
  

  // İlk kategori ürünlerini otomatik olarak yükleyin
  if (menu.categories.length > 0) {
    loadSubcategoriesAndProducts(menu.categories[0]);
  }

  // CSS'i bağla
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "./styles/menu.css";
  document.head.appendChild(style);

  return section;
}
