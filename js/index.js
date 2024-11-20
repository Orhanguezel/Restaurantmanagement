const Menu = require("./Menu");
const Category = require("./Category");
const Subcategory = require("./Subcategory");
// const Product = require('./Product');
const Order = require("./Order");

// Data dosyalarını import edelim
const data1 = require("../data/data1");
const data2 = require("../data/data2");
const data3 = require("../data/data3");
const data4 = require("../data/data4");
const data5 = require("../data/data5");
const data6 = require("../data/data6");

// Menü ve kategorileri oluşturalım
const menu = new Menu();
const drinksCategory = new Category("Getränke");
const foodCategory = new Category("Essen");

// Alt kategoriler
const softDrinksSubcategory = new Subcategory("Soft Drinks");
const pizzaSubcategory = new Subcategory("Pizza");

// Ürünleri alt kategorilere ekleyelim
data1.forEach((productData) => softDrinksSubcategory.addProduct(productData));
data2.forEach((productData) => pizzaSubcategory.addProduct(productData));
data3.forEach((productData) => pizzaSubcategory.addProduct(productData));
data4.forEach((productData) => pizzaSubcategory.addProduct(productData));
data5.forEach((productData) => pizzaSubcategory.addProduct(productData));
data6.forEach((productData) => pizzaSubcategory.addProduct(productData));

// Alt kategorileri kategorilere ekleyelim
drinksCategory.addSubcategory(softDrinksSubcategory);
foodCategory.addSubcategory(pizzaSubcategory);

// Kategorileri menüye ekleyelim
menu.addCategory(drinksCategory);
menu.addCategory(foodCategory);

// Sipariş oluşturalım
const order = new Order();
data1.forEach((productData) => order.addItem(productData));

console.log("Toplam sipariş tutarı:", order.getTotal().toFixed(2), "€");
