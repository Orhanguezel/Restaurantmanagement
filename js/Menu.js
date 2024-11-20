const Category = require("./Category");
const Subcategory = require("./Subcategory");
const Product = require("./Product");

// Tüm data dosyalarını içeri aktar
const data1 = require("../data/data1");
const data2 = require("../data/data2");
const data3 = require("../data/data3");
const data4 = require("../data/data4");
const data5 = require("../data/data5");
const data6 = require("../data/data6");

// data dosyalarını bir liste olarak toplayın
const allDataFiles = [data1, data2, data3, data4, data5, data6];

class Menu {
  constructor() {
    this.categories = [];
    console.log("Yeni bir Menü nesnesi oluşturuldu:", this);
  }

  // Menüye kategori ekler
  addCategory(category) {
    this.categories.push(category);
    console.log(`Kategori eklendi: ${category.name}`);
  }

  // Menü bilgilerini döndürür
  getMenuInfo() {
    return this.categories
      .map((category) => category.getCategoryInfo())
      .join("\n\n");
  }
}

// Menü nesnesi oluştur
const menu = new Menu();

// Her bir data dosyasından gelen kategorileri ekleyin
allDataFiles.forEach((dataFile) => {
  dataFile.forEach((categoryData) => {
    const category = new Category(categoryData.name); // Ana kategori oluştur
    console.log(`Ana kategori eklendi: ${categoryData.name}`);

    // Alt kategoriler varsa ekleyin
    if (Array.isArray(categoryData.subcategories)) {
      categoryData.subcategories.forEach((subcatData) => {
        const subcategory = new Subcategory(
          subcatData.name,
          subcatData.description
        ); // Alt kategori oluştur
        console.log(
          `Alt kategori eklendi: ${subcatData.name} -> ${categoryData.name}`
        );

        // Alt kategoriye ait ürünler varsa ekleyin
        if (Array.isArray(subcatData.items)) {
          subcatData.items.forEach((productData) => {
            subcategory.addProduct(productData); // Ürünü alt kategoriye ekle
          });
        } else {
          console.log(
            `Uyarı: ${subcatData.name} alt kategorisi için ürün bulunamadı.`
          );
        }

        category.addSubcategory(subcategory); // Alt kategoriyi ana kategoriye ekleyin
      });
    } else {
      console.log(
        `Uyarı: ${categoryData.name} kategorisi için alt kategori bulunamadı.`
      );
    }

    menu.addCategory(category); // Ana kategoriyi menüye ekleyin
  });
});

// Menü bilgisini göster
console.log("Mevcut Menü Bilgisi:\n", menu.getMenuInfo());

module.exports = Menu;
