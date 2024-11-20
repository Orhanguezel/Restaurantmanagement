const Product = require('./Product');

class Subcategory {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
        this.products = [];
        console.log(`Yeni bir Subcategory nesnesi oluşturuldu: ${this.name}`);
    }

    // Alt kategoriye ürün ekler, gelen ürünleri Product nesnesi olarak oluşturur
    addProduct(productData) {
        if (!productData || !productData.name) {
            console.log("Hatalı ürün verisi. `name` alanı gereklidir.");
            return;
        }

        const product = new Product(productData); // Ürün verisini Product nesnesine dönüştürüyoruz
        this.products.push(product);
        console.log(`Ürün eklendi: ${product.name} -> ${this.name}`);
    }

    // Alt kategori bilgilerini döndürür
    getSubcategoryInfo() {
        const productsInfo = this.products.map(prod => prod.displayProductInfo()).join("\n");

        return `
        Subcategory: ${this.name}
        Description: ${this.description}
        ${productsInfo ? "Products:\n" + productsInfo : "No products available"}
        `;
    }
}

module.exports = Subcategory;
