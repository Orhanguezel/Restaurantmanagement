import menu from "../data/data.js";

export default function MenuComponent() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./styles/menu.css";
  document.head.appendChild(link);

  const section = document.createElement("section");
  section.id = "menu-page";

  // HTML yapısını oluşturma
  section.innerHTML = `
    <div class="menu-header">
      <h1>Menu</h1>
      <p>Home / Menu</p>
    </div>
    <div class="menu-content">
      <aside class="menu-categories">
        <h2>Categories</h2>
        <ul class="categories-list">
          ${menu
            .map(
              (category) => `
                <li class="category-item" data-category="${category.name}">
                  <i class="category-icon">${category.icon || '🍴'}</i>
                  ${category.name}
                </li>
              `
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

  const categoriesList = section.querySelector(".categories-list");
  const productsGrid = section.querySelector(".products-grid");

  // Başlangıçta kategorileri göster
  displayCategoriesWithImages();

  // Kategori liste elemanlarına tıklama
  categoriesList.addEventListener("click", (e) => {
    const clickedCategory = e.target.closest(".category-item");
    if (!clickedCategory) return;

    const categoryName = clickedCategory.dataset.category;
    const category = menu.find((cat) => cat.name === categoryName);

    if (category) {
      loadProductsFromCategory(category);
    } else {
      console.error("Category not found:", categoryName);
      renderFallback();
    }
  });

  // Kategorileri görüntüle
  function displayCategoriesWithImages() {
    productsGrid.innerHTML = `
      <div class="category-grid">
        ${menu
          .map((category) => {
            const categoryImage = category.images && category.images.length > 0 ? category.images[0] : null;

            return `
              <div class="category-card" data-category="${category.name}">
                ${
                  categoryImage
                    ? `<img src="${resolveImagePath(categoryImage)}" alt="${category.name}" class="category-image"/>`
                    : `<div class="no-image-placeholder">No Image</div>`
                }
                <h3>${category.name}</h3>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
    addCategoryCardListeners();
  }

  // Bir kategoriye tıklandığında ürünleri yükle
  function loadProductsFromCategory(category) {
    const products = category.subcategories
      ? category.subcategories.flatMap((subcat) => subcat.products)
      : [];

    if (!products || products.length === 0) {
      productsGrid.innerHTML = `<p>No products available in "${category.name}"</p>`;
      return;
    }

    productsGrid.innerHTML = `
      <div class="products-grid">
        ${products
          .map((product) => {
            const productImage = product.image && product.image.length > 0 ? resolveImagePath(product.image[0]) : null;

            return `
              <div class="product-card">
                ${
                  productImage
                    ? `<img src="${productImage}" alt="${product.name}" class="product-image"/>`
                    : `<div class="no-image-placeholder">No Image</div>`
                }
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p>Price: ${product.prices ? `${product.prices.klein} € (Small)` : "Not available"}</p>
                <div class="prep-time">
                  <i class="fas fa-clock"></i> ${product.preparationTime} mins
                </div>
                <div class="rating">
                  ${[...Array(5)]
                    .map(
                      (_, i) =>
                        `<i class="star ${
                          i < (product.likes || 0) ? "filled" : "empty"
                        }">&#9733;</i>`
                    )
                    .join("")}
                </div>
                <div class="like ${product.isLiked ? "liked" : ""}" data-id="${product.nr}">
                  <i class="fas fa-heart"></i>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;

    addLikeFunctionality(products);
  }

  // Beğeni işlevselliği
  function addLikeFunctionality(products) {
    const likeButtons = productsGrid.querySelectorAll(".like");
    likeButtons.forEach((likeButton) => {
      likeButton.addEventListener("click", () => {
        const productId = likeButton.dataset.id;
        const product = products.find((p) => p.nr === productId);

        if (product) {
          product.isLiked = !product.isLiked;
          product.likes = product.isLiked ? 5 : 0; // Beğenildiğinde 5 yıldız, kaldırıldığında 0 yıldız
          loadProductsFromCategory({ subcategories: [{ products }] }); // UI'yi güncelle
        }
      });
    });
  }

  // Resim yollarını çöz
  function resolveImagePath(path) {
    const BASE_URL = window.location.origin + "/Restaurantmanagement";

    if (!path.startsWith("http") && !path.startsWith("/")) {
      return `${BASE_URL}/${path.replace(/^\.\//, "")}`;
    }
    return path;
  }

  // Fallback içeriği
  function renderFallback() {
    productsGrid.innerHTML = `<p>No content available. Please try again later.</p>`;
  }

  // Kategori kartlarına tıklama olayını dinle
  function addCategoryCardListeners() {
    const categoryCards = productsGrid.querySelectorAll(".category-card");
    categoryCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        const categoryName = card.dataset.category;
        const category = menu.find((cat) => cat.name === categoryName);

        if (category) {
          loadProductsFromCategory(category);
        } else {
          console.error("Category not found:", categoryName);
          renderFallback();
        }
      });
    });
  }

  return section;
}
