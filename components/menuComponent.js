import { default as menu } from "../js/Menu.js";

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
          ${menu.categories
            .map(
              (category) =>
                `<li class="category-item" data-category="${category.name}">${category.name}</li>`
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

  // Sidebar kategorisine tıklama (Doğru bağlama eklendi)
  categoriesList.addEventListener("click", (e) => {
    const clickedCategory = e.target.closest(".category-item");
    if (!clickedCategory) return;

    const categoryName = clickedCategory.dataset.category;
    const category = menu.categories.find((cat) => cat.name === categoryName);

    if (category) {
      updateURL(`/menu/${encodeURIComponent(category.name)}`);
      loadSubcategories(category);
    }
  });

  // Ortadaki kategori kartlarını göster
  function displayCategoriesWithImages() {
    productsGrid.innerHTML = `
      <div class="category-grid">
        ${menu.categories
          .map((category) => {
            const categoryImage =
              category.images && category.images.length > 0
                ? category.images[0]
                : null;

            return `
              <div class="category-card" data-category="${category.name}">
                ${
                  categoryImage
                    ? `<img src="${resolveImagePath(categoryImage)}" alt="${category.name} image" class="category-image"/>`
                    : `<div class="no-image-placeholder">No Image</div>`
                }
                <h3>${category.name}</h3>
              </div>
            `;
          })
          .join("")}
      </div>
    `;

    const categoryCards = productsGrid.querySelectorAll(".category-card");
    categoryCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        const categoryName = e.currentTarget.dataset.category;
        const category = menu.categories.find(
          (cat) => cat.name === categoryName
        );
        if (category) {
          updateURL(`/menu/${encodeURIComponent(category.name)}`);
          loadSubcategories(category);
        }
      });
    });
  }

  // Alt kategorileri yükleme
  function loadSubcategories(category) {
    if (!category.subcategories || category.subcategories.length === 0) {
      productsGrid.innerHTML = `<p>No subcategories available</p>`;
      return;
    }

    productsGrid.innerHTML = `
      <div class="subcategory-list">
        <h2>${category.name}</h2>
        ${category.subcategories
          .map((subcat) => {
            const firstImage =
              subcat.images && subcat.images.length > 0 ? subcat.images[0] : null;

            return `
              <div class="subcategory-item" data-subcategory="${subcat.name}">
                <div class="subcategory-images">
                  ${
                    firstImage
                      ? `<img src="${resolveImagePath(firstImage)}" alt="${subcat.name} image" class="subcategory-image"/>`
                      : `<p>No images available</p>`
                  }
                </div>
                <h3>${subcat.name}</h3>
                <p>${subcat.description || "No description available"}</p>
              </div>
            `;
          })
          .join("")}
      </div>
    `;

    const subcategoryElements = productsGrid.querySelectorAll(".subcategory-item");
    subcategoryElements.forEach((element) => {
      element.addEventListener("click", (e) => {
        const subcategoryName = e.currentTarget.dataset.subcategory;
        const subcategory = category.subcategories.find(
          (subcat) => subcat.name === subcategoryName
        );

        if (subcategory) {
          loadProducts(subcategory.products || []);
        }
      });
    });
  }

  // Ürünleri yükleme
  function loadProducts(products) {
    if (!products || products.length === 0) {
      productsGrid.innerHTML = `<p>No products available</p>`;
      return;
    }

    productsGrid.innerHTML = `
      <div class="products-list">
        ${products
          .map((item) => {
            let productImage = null;
            if (Array.isArray(item.image) && item.image.length > 0) {
              productImage = item.image[0];
            } else if (typeof item.image === "string" && item.image.length > 0) {
              productImage = item.image;
            }

            return `
              <div class="product-card">
                ${
                  productImage
                    ? `<img src="${resolveImagePath(productImage)}" alt="${item.name} image" class="product-image"/>`
                    : ""
                }
                <h4>${item.name}</h4>
                <p>${item.description || "No description provided"}</p>
                <p><strong>${item.prices?.Price ? `${item.prices.Price} €` : "Price not available"}</strong></p>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  // URL'yi güncellemek için fonksiyon
  function updateURL(newPath) {
    window.history.pushState({}, "", newPath);
  }

  // Resim yollarını çözmek için dinamik bir fonksiyon
  function resolveImagePath(path) {
    const BASE_URL = "http://127.0.0.1:5500/Restaurantmanagement/";

    if (!path.startsWith("http") && !path.startsWith("/")) {
      return `${BASE_URL}${path.replace(/^\.\//, "")}`;
    }
    return path.startsWith("")
      ? `${BASE_URL}${path}`
      : path;
  }

  return section;
}
