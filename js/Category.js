import Subcategory from "./Subcategory.js";
import Product from "./Product.js";

class Category {
  constructor(name, description = "") {
    this.name = name;
    this.description = description;
    this.subcategories = [];
    this.products = [];
    console.log(`Yeni bir Category nesnesi oluşturuldu: ${this.name}`);
  }

  addSubcategory(subcategoryData) {
    if (!subcategoryData || !subcategoryData.name) {
      console.log("Hatalı alt kategori verisi. `name` alanı gereklidir.");
      return;
    }

    const subcategory = new Subcategory(
      subcategoryData.name,
      subcategoryData.description || "",
      subcategoryData.images || [] // Resim bilgisi ekleniyor
    );

    if (Array.isArray(subcategoryData.products)) {
      subcategoryData.products.forEach((itemData) => {
        subcategory.addProduct(itemData);
      });
    }

    this.subcategories.push(subcategory);
    console.log(`Alt kategori eklendi: ${subcategory.name} -> ${this.name}`);
  }

  addProduct(productData) {
    if (!productData || !productData.name) {
      console.log("Hatalı ürün verisi. `name` alanı gereklidir.");
      return;
    }

    const product = new Product(productData);
    this.products.push(product);
    console.log(`Ürün eklendi: ${product.name} -> ${this.name}`);
  }

  getCategoryInfo() {
    const subcategoriesInfo = this.subcategories
      .map((sub) => sub.getSubcategoryInfo())
      .join("\n");
    const productsInfo = this.products
      .map((prod) => prod.displayProductInfo())
      .join("\n");

    return `
        Category: ${this.name}
        Description: ${this.description}
        ${
          subcategoriesInfo
            ? "Subcategories:\n" + subcategoriesInfo
            : "No subcategories"
        }
        ${productsInfo ? "Products:\n" + productsInfo : "No direct products"}
        `;
  }
}

export default Category;
