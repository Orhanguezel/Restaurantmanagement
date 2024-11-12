const Category = require('./Category');

class Menu {
    constructor() {
        this.categories = []; // Menüdeki tüm kategoriler
    }

    // Menüye kategori ekler
    addCategory(category) {
        this.categories.push(category);
    }

    // Menü bilgilerini döndürür
    getMenuInfo() {
        return this.categories.map(category => category.getCategoryInfo()).join("\n\n");
    }
}

const menu = new Menu();
console.log("Yeni bir Menü nesnesi oluşturuldu:", menu);

module.exports = Menu;

