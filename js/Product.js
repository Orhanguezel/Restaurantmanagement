// Tüm data dosyalarını içeri aktar
const data1 = require("../data/data1");
const data2 = require("../data/data2");
const data3 = require("../data/data3");
const data4 = require("../data/data4");
const data5 = require("../data/data5");
const data6 = require("../data/data6");

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

  // Ürün açıklaması
  getDescription() {
    return `${this.name} (${this.type}) - ${
      this.prices.default ? this.prices.default.toFixed(2) : "Fiyat bilgisi yok"
    } €: ${this.description}`;
  }

  // Fiyat bilgilerini göster
  getPrices() {
    if (Object.keys(this.prices).length === 0)
      return "Fiyat bilgisi mevcut değil.";
    return Object.entries(this.prices)
      .map(([key, value]) => `${key}: ${value.toFixed(2)} €`)
      .join(", ");
  }

  // Stok durumunu kontrol et
  checkStock() {
    return this.stock > 0 ? `Auf Lager: ${this.stock}` : "Nicht auf Lager";
  }

  // Ekstra bilgilerini göster
  getExtras() {
    if (Object.keys(this.extras).length === 0) return "Keine Extras verfügbar.";
    return Object.entries(this.extras)
      .map(([key, value]) => `${key}: ${value.toFixed(2)} €`)
      .join(", ");
  }

  // Depozito bilgisi
  getDeposit() {
    return this.deposit !== null
      ? `Pfand: ${this.deposit.toFixed(2)} €`
      : "Kein Pfand";
  }

  // Katkı maddelerini göster
  getZusatzstoffe() {
    return this.zusatzstoffe.length > 0
      ? this.zusatzstoffe.join(", ")
      : "Keine Zusatzstoffe";
  }

  // Alerjen bilgilerini göster
  getAllergene() {
    return this.allergene.length > 0
      ? this.allergene.join(", ")
      : "Keine Allergene";
  }

  // Ekstra ekle methodu
  addExtra(key, value) {
    if (!this.extras) this.extras = {}; // Ekstralar yoksa boş bir obje olarak tanımlar
    this.extras[key] = value;
    this.updatedAt = new Date(); // Güncelleme tarihini yenile
    console.log(`Ekstra eklendi: ${key} -> ${value}`);
  }

  // Var olan bir ekstrayı güncelle
  updateExtra(key, value) {
    if (this.extras && this.extras[key] !== undefined) {
      this.extras[key] = value;
      this.updatedAt = new Date();
      console.log(`Ekstra güncellendi: ${key} -> ${value}`);
    } else {
      console.log(`Extra '${key}' mevcut değil. Lütfen önce ekleyin.`);
    }
  }

  // Ekstra sil
  removeExtra(key) {
    if (this.extras && this.extras[key] !== undefined) {
      delete this.extras[key];
      this.updatedAt = new Date();
      console.log(`Ekstra kaldırıldı: ${key}`);
    } else {
      console.log(`Extra '${key}' bulunamadı.`);
    }
  }

  // Ürün bilgilerini göster
  displayProductInfo() {
    return `
        Produktnummer: ${this.nr}
        Name: ${this.name}
        Typ: ${this.type}
        Allergene: ${
          this.allergene.length ? this.allergene.join(", ") : "Keine Allergene"
        }
        Zusatzstoffe: ${
          this.zusatzstoffe.length
            ? this.zusatzstoffe.join(", ")
            : "Keine Zusatzstoffe"
        }
        Beschreibung: ${this.description}
        Preise: ${Object.entries(this.prices)
          .map(([size, price]) => `${size}: ${price} €`)
          .join(", ")}
        Extras: ${Array.from(this.extras)
          .map(([key, value]) => `${key}: ${value} €`)
          .join(", ")}
        `;
  }

  // Fiyat güncelle
  updatePrice(size, newPrice) {
    if (this.prices && this.prices[size] !== undefined) {
      this.prices[size] = newPrice;
      this.updatedAt = new Date();
      console.log(`Fiyat güncellendi: ${size} -> ${newPrice}`);
    } else {
      console.log("Geçersiz fiyat seçeneği");
    }
  }

  // Stok güncelle
  updateStock(amount) {
    this.stock += amount;
    this.updatedAt = new Date();
    console.log(`Stok güncellendi: Yeni stok -> ${this.stock}`);
  }
}

// Tüm ürünleri `Product` nesnelerine dönüştürerek yükleyin
const loadedProducts = allDataFiles.map(
  (productData) => new Product(productData)
);
console.log(
  "Yüklenen ürünler:",
  loadedProducts.map((product) => product.displayProductInfo())
);

module.exports = Product;
