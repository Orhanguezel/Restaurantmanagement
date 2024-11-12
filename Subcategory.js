const Product = require('./Product');

class Subcategory {
    constructor(name) {
        this.name = name;
        this.products = [];
    }

    // Alt kategoriye ürün ekler
    addProduct(productData) {
        const product = new Product(productData);
        this.products.push(product);
    }

    // Alt kategori bilgilerini döndürür
    getSubcategoryInfo() {
        return `
        Subcategory: ${this.name}
        Products:
        ${this.products.map(prod => prod.displayProductInfo()).join("\n")}
        `;
    }
}

// Test amaçlı örnek
const testSubcategory = new Subcategory("Alkolsüz İçecekler");
console.log("Yeni bir Subcategory nesnesi oluşturuldu:", testSubcategory);

module.exports = Subcategory;
