import Category from "./Category.js";
import Subcategory from "./Subcategory.js";
import Product from "./Product.js";

import data1 from "../data/data1.js";
import data2 from "../data/data2.js";
import data3 from "../data/data3.js";
import data4 from "../data/data4.js";
import data5 from "../data/data5.js";
import data6 from "../data/data6.js";

const allDataFiles = [data1, data2, data3, data4, data5, data6];

class Menu {
  constructor() {
    this.categories = [];
    console.log("Yeni bir Menü nesnesi oluşturuldu:", this);
  }

  addCategory(category) {
    this.categories.push(category);
    console.log(`Kategori eklendi: ${category.name}`);
  }

  getMenuInfo() {
    return this.categories
      .map((category) => category.getCategoryInfo())
      .join("\n\n");
  }
}

const menuInstance = new Menu();

allDataFiles.forEach((dataFile) => {
  dataFile.forEach((categoryData) => {
    const category = new Category(categoryData.name, categoryData.description);
    console.log(`Ana kategori eklendi: ${categoryData.name}`);

    if (Array.isArray(categoryData.subcategories)) {
      categoryData.subcategories.forEach((subcatData) => {
        const subcategory = new Subcategory(
          subcatData.name,
          subcatData.description,
          subcatData.images || [] // Resimleri ekliyoruz
        );

        if (Array.isArray(subcatData.products)) {
          subcatData.products.forEach((productData) => {
            subcategory.addProduct(productData);
          });
        } else {
          console.log(
            `Uyarı: ${subcatData.name} alt kategorisi için ürün bulunamadı.`
          );
        }

        category.addSubcategory(subcategory);
      });
    } else {
      console.log(
        `Uyarı: ${categoryData.name} kategorisi için alt kategori bulunamadı.`
      );
    }

    menuInstance.addCategory(category);
  });
});

console.log("Mevcut Menü Bilgisi:\n", menuInstance.getMenuInfo());

export { Menu, menuInstance as default };
