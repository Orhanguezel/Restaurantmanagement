const Subcategory = require('./Subcategory');
const Product = require('./Product');

class Category {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
        this.subcategories = [];
        this.products = [];
        console.log(`Yeni bir Category nesnesi oluşturuldu: ${this.name}`);
    }

    // Alt kategori ekler, subcategoryData bir `Subcategory` nesnesi olmalı
    addSubcategory(subcategoryData) {
        if (!subcategoryData || !subcategoryData.name) {
            console.log("Hatalı alt kategori verisi. `name` alanı gereklidir.");
            return;
        }
        
        const subcategory = new Subcategory(subcategoryData.name, subcategoryData.description || "");

        // Eğer items tanımlıysa ve bir dizi ise, ürünleri alt kategoriye ekleyelim
        if (Array.isArray(subcategoryData.items)) {
            subcategoryData.items.forEach(itemData => {
                subcategory.addProduct(itemData); // Ürünleri alt kategoriye ekle
            });
        }

        this.subcategories.push(subcategory);
        console.log(`Alt kategori eklendi: ${subcategory.name} -> ${this.name}`);
    }

    // Ana kategoriye doğrudan ürün ekler
    addProduct(productData) {
        if (!productData || !productData.name) {
            console.log("Hatalı ürün verisi. `name` alanı gereklidir.");
            return;
        }

        const product = new Product(productData); // Ürünü Product nesnesine dönüştürüyoruz
        this.products.push(product);
        console.log(`Ürün eklendi: ${product.name} -> ${this.name}`);
    }

    // Kategori bilgilerini döndürür
    getCategoryInfo() {
        const subcategoriesInfo = this.subcategories.map(sub => sub.getSubcategoryInfo()).join("\n");
        const productsInfo = this.products.map(prod => prod.displayProductInfo()).join("\n");

        return `
        Category: ${this.name}
        Description: ${this.description}
        ${subcategoriesInfo ? "Subcategories:\n" + subcategoriesInfo : "No subcategories"}
        ${productsInfo ? "Products:\n" + productsInfo : "No direct products"}
        `;
    }
}

module.exports = Category;
