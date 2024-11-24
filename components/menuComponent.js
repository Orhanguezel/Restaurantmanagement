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

  // Kategoriye tıklama olayları
  categoriesList.addEventListener("click", (e) => {
    const clickedCategory = e.target.closest(".category-item");
    if (!clickedCategory) return;

    const categoryName = clickedCategory.dataset.category;
    const category = menu.categories.find((cat) => cat.name === categoryName);

    if (category) {
      loadSubcategories(category);
    } else {
      console.error("Category not found:", categoryName);
      renderFallback();
    }
  });

  // Kategori kartlarını göster
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
  }

  // Alt kategorileri yükleme
  function loadSubcategories(category) {
    if (!category || !category.subcategories || category.subcategories.length === 0) {
      productsGrid.innerHTML = `<p>No subcategories available for "${category?.name || "Unknown"}"</p>`;
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

    // Alt kategoriye tıklama olayını dinle
    const subcategoryItems = productsGrid.querySelectorAll(".subcategory-item");
    subcategoryItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const subcategoryName = e.currentTarget.dataset.subcategory;
        const subcategory = category.subcategories.find(
          (subcat) => subcat.name === subcategoryName
        );

        if (subcategory) {
          loadProducts(subcategory.products);
        } else {
          renderFallback();
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
            const productImage = Array.isArray(item.image)
              ? item.image[0]
              : typeof item.image === "string"
              ? item.image
              : null;

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

  // Fallback gösterimi
  function renderFallback() {
    productsGrid.innerHTML = `<p>No content available. Please try again later.</p>`;
  }

  // Resim yollarını çözmek
  function resolveImagePath(path) {
    const BASE_URL = window.location.origin + "/Restaurantmanagement";

    if (!path.startsWith("http") && !path.startsWith("/")) {
      return `${BASE_URL}/${path.replace(/^\.\//, "")}`;
    }
    return path;
  }

  return section;
}
