import Menu from "./Menu.js";
import Category from "./Category.js";
import Subcategory from "./Subcategory.js";
import Order from "./Order.js";

// Data dosyalarını import edelim
import data1 from "../data/data1.js";
import data2 from "../data/data2.js";
import data3 from "../data/data3.js";
import data4 from "../data/data4.js";
import data5 from "../data/data5.js";
import data6 from "../data/data6.js";

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

// Sipariş toplamını gösterelim
console.log("Toplam sipariş tutarı:", order.getTotal().toFixed(2), "€");
