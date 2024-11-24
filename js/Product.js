import data1 from "../data/data1.js";
import data2 from "../data/data2.js";
import data3 from "../data/data3.js";
import data4 from "../data/data4.js";
import data5 from "../data/data5.js";
import data6 from "../data/data6.js";

// Tüm data dosyalarını birleştir
const allDataFiles = [
    ...data1.flatMap((category) => category.subcategories.flatMap((sub) => sub.products || [])),
    ...data2.flatMap((category) => category.subcategories.flatMap((sub) => sub.products || [])),
    ...data3.flatMap((category) => category.subcategories.flatMap((sub) => sub.products || [])),
    ...data4.flatMap((category) => category.subcategories.flatMap((sub) => sub.products || [])),
    ...data5.flatMap((category) => category.subcategories.flatMap((sub) => sub.products || [])),
    ...data6.flatMap((category) => category.subcategories.flatMap((sub) => sub.products || [])),
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
        image = [], // Resim özelliği
        preparationTime = 30, // Varsayılan hazırlık süresi
        likes = 0, // Varsayılan beğeni sayısı
    }) {
        this.nr = nr || "Bilinmiyor"; // Ürün numarası
        this.type = type || "Bilinmiyor"; // Ürün türü
        this.name = name || "Bilinmiyor"; // Ürün adı
        this.zusatzstoffe = zusatzstoffe;
        this.allergene = allergene;
        this.description = description;
        this.prices = prices;
        this.extras = new Map(Object.entries(extras)); // Extras'ı Map olarak kaydediyoruz
        this.stock = stock;
        this.deposit = deposit;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.image = Array.isArray(image) ? image : []; // Resim özelliği bir diziye dönüştürülüyor
        this.preparationTime = preparationTime; // Hazırlık süresi
        this.likes = likes; // Beğeni sayısı

        console.log(
            `Ürün oluşturuldu: ${this.name} (${this.nr}), Resimler: ${
                this.image.length > 0 ? this.image.join(", ") : "No images"
            }, Hazırlık Süresi: ${this.preparationTime} dakika`
        );
    }

    getDescription() {
        const priceKeys = Object.keys(this.prices);
        const priceString =
            priceKeys.length > 0
                ? priceKeys.map((key) => `${key}: ${this.prices[key].toFixed(2)} €`).join(", ")
                : "Fiyat bilgisi yok";

        return `${this.name} (${this.type}) - ${priceString}: ${this.description}`;
    }

    getExtras() {
        if (!this.extras || this.extras.size === 0) {
            return "Keine Extras verfügbar.";
        }
        return Array.from(this.extras.entries())
            .map(([key, value]) => `${key}: ${value.toFixed(2)} €`)
            .join(", ");
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

    likeProduct() {
        this.likes += 1;
        console.log(`Ürün beğenildi: ${this.name}, Toplam Beğeni: ${this.likes}`);
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
        Images: ${this.image.length > 0 ? this.image.join(", ") : "No images"}
        Preparation Time: ${this.preparationTime} minutes
        Likes: ${this.likes}
        `;
    }
}

// Tüm ürünleri `Product` nesnelerine dönüştürerek yükleyin
const loadedProducts = allDataFiles
    .filter((productData) => productData && productData.name) // Geçerli ürünleri filtrele
    .map((productData) => new Product(productData));

// Yüklenen ürünleri konsolda görüntüle
console.log(
    "Yüklenen ürünler:",
    loadedProducts.map((product) => product.displayProductInfo())
);

export default Product;
