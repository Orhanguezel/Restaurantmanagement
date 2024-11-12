const Subcategory = require('./Subcategory');

class Category {
    constructor(name) {
        this.name = name; // Kategori adı
        this.subcategories = []; // Alt kategorileri saklar
        this.products = []; // Direkt kategoriye ait ürünler varsa onları saklar
    }

    // Alt kategori ekler
    addSubcategory(subcategory) {
        this.subcategories.push(subcategory);
    }

    // Ürün ekler
    addProduct(product) {
        this.products.push(product);
    }

    // Kategori bilgilerini döndürür
    getCategoryInfo() {
        const subcategoriesInfo = this.subcategories.map(sub => sub.getSubcategoryInfo()).join("\n");
        const productsInfo = this.products.map(prod => prod.displayProductInfo()).join("\n");
        
        return `
        Category: ${this.name}
        Subcategories:
        ${subcategoriesInfo}
        
        Products:
        ${productsInfo}
        `;
    }
}

const category = new Category("Test Kategori");
console.log("Yeni bir Category nesnesi oluşturuldu:", category);

module.exports = Category;

