import data1 from "../data/data1.js";
import data2 from "../data/data2.js";
import data3 from "../data/data3.js";
import data4 from "../data/data4.js";
import data5 from "../data/data5.js";
import data6 from "../data/data6.js";

// Tüm data dosyalarını birleştirin
const allDataFiles = [
  ...data1,
  ...data2,
  ...data3,
  ...data4,
  ...data5,
  ...data6,
];

class Product {
  constructor({
    nr,
    type,
    name,
    zusatzstoffe = [],
    allergene = [],
    description = "",
    prices = {},
    extras = {},
    stock = Infinity,
    deposit = 0,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    this.nr = nr || "Bilinmiyor"; // Ürün numarası
    this.type = type || "Bilinmiyor"; // Ürün türü
    this.name = name || "Bilinmiyor"; // Ürün adı
    this.zusatzstoffe = zusatzstoffe;
    this.allergene = allergene;
    this.description = description;
    this.prices = prices;
    this.extras = new Map(Object.entries(extras));
    this.stock = stock;
    this.deposit = deposit;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    console.log(`Ürün oluşturuldu: ${this.name} (${this.nr})`);
  }

  getDescription() {
    return `${this.name} (${this.type}) - ${
      this.prices.default ? this.prices.default.toFixed(2) : "Fiyat bilgisi yok"
    } €: ${this.description}`;
  }

  getPrices() {
    if (Object.keys(this.prices).length === 0) return "Fiyat bilgisi mevcut değil.";
    return Object.entries(this.prices)
      .map(([key, value]) => `${key}: ${value.toFixed(2)} €`)
      .join(", ");
  }

  checkStock() {
    return this.stock > 0 ? `Auf Lager: ${this.stock}` : "Nicht auf Lager";
  }

  getExtras() {
    if (Object.keys(this.extras).length === 0) return "Keine Extras verfügbar.";
    return Array.from(this.extras)
      .map(([key, value]) => `${key}: ${value.toFixed(2)} €`)
      .join(", ");
  }

  getDeposit() {
    return this.deposit !== null ? `Pfand: ${this.deposit.toFixed(2)} €` : "Kein Pfand";
  }

  getZusatzstoffe() {
    return this.zusatzstoffe.length > 0 ? this.zusatzstoffe.join(", ") : "Keine Zusatzstoffe";
  }

  getAllergene() {
    return this.allergene.length > 0 ? this.allergene.join(", ") : "Keine Allergene";
  }

  addExtra(key, value) {
    if (!this.extras) this.extras = new Map();
    this.extras.set(key, value);
    this.updatedAt = new Date();
    console.log(`Ekstra eklendi: ${key} -> ${value}`);
  }

  updateExtra(key, value) {
    if (this.extras && this.extras.has(key)) {
      this.extras.set(key, value);
      this.updatedAt = new Date();
      console.log(`Ekstra güncellendi: ${key} -> ${value}`);
    } else {
      console.log(`Extra '${key}' mevcut değil. Lütfen önce ekleyin.`);
    }
  }

  removeExtra(key) {
    if (this.extras && this.extras.has(key)) {
      this.extras.delete(key);
      this.updatedAt = new Date();
      console.log(`Ekstra kaldırıldı: ${key}`);
    } else {
      console.log(`Extra '${key}' bulunamadı.`);
    }
  }

  displayProductInfo() {
    return `
        Produktnummer: ${this.nr}
        Name: ${this.name}
        Typ: ${this.type}
        Allergene: ${
          this.allergene.length ? this.allergene.join(", ") : "Keine Allergene"
        }
        Zusatzstoffe: ${
          this.zusatzstoffe.length ? this.zusatzstoffe.join(", ") : "Keine Zusatzstoffe"
        }
        Beschreibung: ${this.description}
        Preise: ${Object.entries(this.prices)
          .map(([size, price]) => `${size}: ${price} €`)
          .join(", ")}
        Extras: ${this.getExtras()}
        `;
  }

  updatePrice(size, newPrice) {
    if (this.prices && this.prices[size] !== undefined) {
      this.prices[size] = newPrice;
      this.updatedAt = new Date();
      console.log(`Fiyat güncellendi: ${size} -> ${newPrice}`);
    } else {
      console.log("Geçersiz fiyat seçeneği");
    }
  }

  updateStock(amount) {
    this.stock += amount;
    this.updatedAt = new Date();
    console.log(`Stok güncellendi: Yeni stok -> ${this.stock}`);
  }
}

// Tüm ürünleri `Product` nesnelerine dönüştürerek yükleyin
const loadedProducts = allDataFiles.map((productData) => new Product(productData));
console.log(
  "Yüklenen ürünler:",
  loadedProducts.map((product) => product.displayProductInfo())
);

export default Product;
