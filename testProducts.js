const fs = require('fs');
const path = require('path');
const Product = require('./Product');

// Data dosyalarının yolu
const dataDir = path.join(__dirname, 'data');
const dataFiles = fs.readdirSync(dataDir);

// Test sonuçlarını biriktirmek için bir dizi
let testResults = [];
let depositProducts = []; // Depozitosu olan ürünleri saklamak için

dataFiles.forEach(file => {
    const filePath = path.join(dataDir, file);
    const data = require(filePath);
    
    data.forEach((categoryData, categoryIndex) => {
        // Her kategori içinde bulunan alt kategorilere (subcategories) ve alt kategorilerin ürünlerine erişim
        categoryData.subcategories.forEach((subcategoryData, subcategoryIndex) => {
            subcategoryData.items.forEach((productData, productIndex) => {
                try {
                    const product = new Product(productData);

                    // Ürün bilgilerinin uygun olup olmadığını kontrol et
                    const errors = [];

                    // Zorunlu alanlar
                    if (!product.nr) errors.push("Ürün numarası (nr) eksik.");
                    if (!product.type) errors.push("Ürün türü (type) eksik.");
                    if (!product.name) errors.push("Ürün adı (name) eksik.");
                    if (typeof product.stock !== 'number') errors.push("Stok değeri (stock) sayı olmalı.");

                    // İsteğe bağlı alanlar
                    if (product.zusatzstoffe && !Array.isArray(product.zusatzstoffe)) {
                        errors.push("Zusatzstoffe (katkı maddeleri) bir dizi olmalı.");
                    }

                    if (product.allergene && !Array.isArray(product.allergene)) {
                        errors.push("Allergene (alerjenler) bir dizi olmalı.");
                    }

                    if (product.prices && typeof product.prices !== 'object') {
                        errors.push("Prices (fiyatlar) bir nesne olmalı.");
                    }

                    if (product.extras && typeof product.extras !== 'object') {
                        errors.push("Extras (ekstralar) bir nesne olmalı.");
                    }

                    if (product.deposit && typeof product.deposit !== 'number') {
                        errors.push("Deposit (depozito) bir sayı olmalı.");
                    }

                    // Depozitosu olan ürünleri depolayalım
                    if (product.deposit > 0) {
                        depositProducts.push({
                            file: file,
                            category: categoryData.name,
                            subcategory: subcategoryData.name,
                            productName: product.name,
                            deposit: product.deposit
                        });
                    }

                    // Hatalı alanları test sonuçlarına ekle
                    if (errors.length > 0) {
                        testResults.push({
                            file: file,
                            category: categoryData.name,
                            subcategory: subcategoryData.name,
                            productName: product.name,
                            errors: errors
                        });
                    }
                } catch (e) {
                    // Ürün oluşturulamazsa hata mesajını test sonuçlarına ekle
                    testResults.push({
                        file: file,
                        category: categoryData.name,
                        subcategory: subcategoryData.name,
                        productName: productData.name || "Belirtilmemiş",
                        error: e.message
                    });
                }
            });
        });
    });
});

// Depozitosu olan ürünleri yazdır
console.log("Depozitosu olan ürünler:\n");
depositProducts.forEach(result => {
    console.log(`Dosya: ${result.file}`);
    console.log(`  Kategori: ${result.category} - Alt Kategori: ${result.subcategory}`);
    console.log(`  Ürün: ${result.productName}`);
    console.log(`  Depozito: ${result.deposit.toFixed(2)} €\n`);
});

// Test sonuçlarını konsola yazdır
if (testResults.length > 0) {
    console.log("Veri dosyası testinde bazı hatalar bulundu:\n");
    testResults.forEach(result => {
        console.log(`Dosya: ${result.file}`);
        console.log(`  Kategori: ${result.category} - Alt Kategori: ${result.subcategory}`);
        console.log(`  Ürün: ${result.productName}`);
        if (result.errors) {
            result.errors.forEach(err => console.log(`    - Hata: ${err}`));
        } else {
            console.log(`    - Ürün oluşturulamadı: ${result.error}`);
        }
        console.log("\n");
    });
} else {
    console.log("Tüm veri dosyaları başarılı bir şekilde test edildi, herhangi bir hata bulunamadı.");
}
