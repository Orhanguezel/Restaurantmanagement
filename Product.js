const data1 = require('./data/data1'); // data dosyasından ürünleri alıyoruz

class Product {
    constructor({
        nr,
        type,
        name,
        zusatzstoffe = [],
        allergene = [],
        description = "",
        prices = {},
        stock = Infinity,
        extras = new Map(),
        deposit = 0, // Depozito ücreti, varsayılan olarak 0
        createdAt = new Date(),
        updatedAt = new Date()
    }) {
        this.nr = nr; // Ürün numarası
        this.type = type; // Ürün türü
        this.name = name; // Ürün adı
        this.zusatzstoffe = zusatzstoffe; // Katkı maddeleri
        this.allergene = allergene; // Alerjenler
        this.description = description; // Açıklama
        this.prices = Object.keys(prices).length > 0 ? prices : { price: prices.price || 0 };
        this.stock = stock; // Stok
        this.extras = extras; // Ekstralar (Map yapısında)
        this.deposit = deposit; // Depozito ücreti
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Ürün açıklaması
    getDescription() {
        return `${this.name} (${this.type}) - ${this.prices.price ? this.prices.price.toFixed(2) : "Fiyat bilgisi yok"} €: ${this.description}`;
    }

    // Fiyat bilgilerini göster
    getPrices() {
        return Object.entries(this.prices)
            .filter(([key, value]) => value !== null)
            .map(([key, value]) => `${key}: ${value.toFixed(2)} €`)
            .join(", ");
    }

    // Stok durumunu kontrol et
    checkStock() {
        return this.stock > 0 ? `Auf Lager: ${this.stock}` : "Nicht auf Lager";
    }

    // Ekstra bilgilerini göster
    getExtras() {
        if (this.extras.size === 0) return "Keine Extras verfügbar.";
        
        return Array.from(this.extras)
            .map(([key, value]) => `${key}: ${value.toFixed(2)} €`)
            .join(", ");
    }

    // Depozito bilgisi
    getDeposit() {
        return this.deposit > 0 ? `Pfand: ${this.deposit.toFixed(2)} €` : "Kein Pfand";
    }

    // Ekstra ekle
    addExtra(key, value) {
        this.extras.set(key, value);
        this.updatedAt = new Date(); // Güncelleme tarihini yenile
    }

    // Var olan bir ekstrayı güncelle
    updateExtra(key, value) {
        if (this.extras.has(key)) {
            this.extras.set(key, value);
            this.updatedAt = new Date();
        } else {
            console.log(`Extra '${key}' ist nicht vorhanden. Bitte zuerst hinzufügen.`);
        }
    }

    // Ekstra sil
    removeExtra(key) {
        if (this.extras.delete(key)) {
            this.updatedAt = new Date();
        } else {
            console.log(`Extra '${key}' nicht gefunden.`);
        }
    }

    // Ürün bilgilerini göster
    displayProductInfo() {
        return `
        Produktnummer: ${this.nr}
        Name: ${this.name}
        Typ: ${this.type}
        Allergene: ${this.allergene.join(", ") || "Keine"}
        Zusatzstoffe: ${this.zusatzstoffe.join(", ") || "Keine"}
        Beschreibung: ${this.description}
        Preise: ${this.getPrices()}
        Lagerstatus: ${this.checkStock()}
        Extras: ${this.getExtras()}
        ${this.getDeposit()} // Depozito bilgisi
        Erstellt am: ${this.createdAt.toLocaleDateString()}
        Aktualisiert am: ${this.updatedAt.toLocaleDateString()}
        `;
    }

    // Fiyat güncelle
    updatePrice(size, newPrice) {
        if (this.prices[size] !== undefined) {
            this.prices[size] = newPrice;
            this.updatedAt = new Date();
        } else {
            console.log("Ungültige Preisoption");
        }
    }

    // Stok güncelle
    updateStock(amount) {
        this.stock += amount;
        this.updatedAt = new Date();
    }
}

// Ürünlerin data1 dosyasından çekildiğini doğrulama
const loadedProducts = data1.map(productData => new Product(productData));
console.log("Yüklenen ürünler:", loadedProducts.map(product => product.displayProductInfo()));

module.exports = Product;
