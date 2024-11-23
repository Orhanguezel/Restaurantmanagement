import Product from "./Product.js";

class Subcategory {
  constructor(name, description = "", images = []) {
    this.name = name;
    this.description = description;
    this.images = images; // Resimleri ekledik
    this.products = [];
    console.log(
      `Yeni bir Subcategory nesnesi oluşturuldu: ${this.name}, Resimler: ${
        this.images.length > 0 ? this.images.join(", ") : "No images"
      }`
    );
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

  getSubcategoryInfo() {
    const productsInfo = this.products
      .map((prod) => prod.displayProductInfo())
      .join("\n");

    return `
        Subcategory: ${this.name}
        Description: ${this.description}
        Images: ${this.images.length > 0 ? this.images.join(", ") : "No images available"}
        ${productsInfo ? "Products:\n" + productsInfo : "No products available"}
        `;
  }
}

export default Subcategory;
