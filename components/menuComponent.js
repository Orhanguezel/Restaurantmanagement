import { default as menu } from "../js/Menu.js";

export default function MenuComponent() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./styles/menu.css"; // CSS dosyasının doğru yolu
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

  // Kategoriye tıklama olayı
  categoriesList.addEventListener("click", (e) => {
    const categoryName = e.target.dataset.category;
    const category = menu.categories.find((cat) => cat.name === categoryName);

    if (category) {
      console.log("Selected Category:", category);
      loadSubcategories(category);
    } else {
      console.error("Category not found:", categoryName);
    }
  });

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
          .map(
            (subcat) => `
          <div class="subcategory-item" data-subcategory="${subcat.name}">
            <div class="subcategory-images">
              ${(subcat.images || [])
                .map((img) => `<img src="${img}" alt="${subcat.name} image" />`)
                .join("")}
            </div>
            <h3>${subcat.name}</h3>
            <p>${subcat.description || "No description available"}</p>
          </div>
        `
          )
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
          console.log("Selected Subcategory:", subcategory);
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
          .map(
            (item) => `
          <div class="product-card">
            <h4>${item.name}</h4>
            <p>${item.description || "No description provided"}</p>
            <p><strong>${item.prices?.Price ? `${item.prices.Price} €` : "Price not available"}</strong></p>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  // İlk kategori ve alt kategoriyi otomatik olarak yükleme
  if (menu.categories.length > 0) {
    const firstCategory = menu.categories[0];
    console.log("First Category:", firstCategory);
    loadSubcategories(firstCategory);

    if (firstCategory.subcategories.length > 0) {
      const firstSubcategory = firstCategory.subcategories[0];
      console.log("First Subcategory:", firstSubcategory);
      loadProducts(firstSubcategory.products || []);
    }
  }

  return section;
}

// Menü ile ilgili bilgileri loglayarak kontrol edin
console.log("Menu:", menu);
console.log("Categories:", menu.categories);

// İlk kategori ve alt kategoriyi kontrol et
if (menu.categories.length > 0) {
  const firstCategory = menu.categories[0];
  console.log("First Category:", firstCategory);
  console.log("First Category Subcategories:", firstCategory.subcategories);

  if (firstCategory.subcategories.length > 0) {
    const firstSubcategory = firstCategory.subcategories[0];
    console.log("First Category First Subcategory:", firstSubcategory);
    console.log("First Category First Subcategory Products:", firstSubcategory.products);

    if (firstSubcategory.products.length > 0) {
      console.log("First Product:", firstSubcategory.products[0]);
      console.log("First Product Prices:", firstSubcategory.products[0].prices);
    }
  }
}
