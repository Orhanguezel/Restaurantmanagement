const Product = require('./Product');
const data1 = require('./data/data1'); // data1.js dosyasındaki ürünleri dahil ediyoruz

class Order {
    constructor({
        customerInfo = {},
        items = [],
        orderSummary = {},
        orderStatus = "Eingehende Bestellungen",
        orderType,
        paymentDetails = {},
        deliveryDetails = {},
        archived = false,
        notes = "",
        createdAt = new Date(),
        updatedAt = new Date(),
    }) {
        this.customerInfo = {
            name: customerInfo.name || "",
            surname: customerInfo.surname || "",
            email: customerInfo.email || "",
            address: customerInfo.address || "",
            phone: customerInfo.phone || "",
            region: customerInfo.region || "",
            paymentMethod: customerInfo.paymentMethod || "",
            specialRequest: customerInfo.specialRequest || "",
        };
        this.items = items.map(item => new Product(item)); // items içindeki her ürünü Product nesnesine dönüştürüyoruz
        this.orderSummary = {
            subtotal: orderSummary.subtotal || 0,
            tax: orderSummary.tax || 0,
            discount: orderSummary.discount || 0,
            total: orderSummary.total || 0,
            deliveryFee: orderSummary.deliveryFee || 0,
            grandTotal: orderSummary.total + (orderSummary.deliveryFee || 0),
        };
        this.orderStatus = orderStatus;
        this.orderType = orderType;
        this.paymentDetails = {
            method: paymentDetails.method || "",
            isPaid: paymentDetails.isPaid || false,
            transactionId: paymentDetails.transactionId || "",
            paymentDate: paymentDetails.paymentDate || null,
        };
        this.deliveryDetails = {
            estimatedDeliveryTime: deliveryDetails.estimatedDeliveryTime || null,
            actualDeliveryTime: deliveryDetails.actualDeliveryTime || null,
            deliveryDriver: deliveryDetails.deliveryDriver || "",
        };
        this.archived = archived;
        this.notes = notes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Müşteri bilgilerini güncelle
    updateCustomerInfo(newInfo) {
        this.customerInfo = { ...this.customerInfo, ...newInfo };
        this.updateTimestamp();
    }

    // Sipariş durumunu güncelle
    updateStatus(newStatus) {
        const validStatuses = [
            "Eingehende Bestellungen",
            "Bestellungen in Vorbereitung",
            "Bestellungen werden geliefert",
            "Gelieferte Bestellungen",
            "Abgeschlossen",
        ];
        if (validStatuses.includes(newStatus)) {
            this.orderStatus = newStatus;
            this.updateTimestamp();
        } else {
            console.log("Geçersiz sipariş durumu");
        }
    }

    // Siparişe yeni ürün ekle
    addItem(item) {
        const newItem = new Product(item); // Yeni ürünü Product nesnesi olarak ekleyelim
        this.items.push(newItem);
        this.calculateTotal();
        this.updateTimestamp();
    }

    // Ürünleri siparişten çıkar
    removeItem(nr) {
        this.items = this.items.filter((item) => item.nr !== nr);
        this.calculateTotal();
        this.updateTimestamp();
    }

    // Ekstra maliyetleri ve vergiyi hesaplayarak toplam güncelleme
    calculateTotal() {
        const subtotal = this.items.reduce((acc, item) => {
            const priceValue = item.prices.price || item.selectedPrice?.value || 0;
            const quantity = item.quantity || 1;
            const deposit = this.orderType === "delivery" ? (item.deposit || 0) : 0; // Sadece teslimatta depozito ekle
            return acc + (priceValue * quantity) + deposit;
        }, 0);
        
        this.orderSummary.subtotal = subtotal;
        this.orderSummary.total = subtotal + this.orderSummary.tax - this.orderSummary.discount;
        this.orderSummary.grandTotal = this.orderSummary.total + this.orderSummary.deliveryFee;
    }

    // Ödeme bilgilerini güncelle
    updatePaymentDetails(newPaymentDetails) {
        this.paymentDetails = { ...this.paymentDetails, ...newPaymentDetails };
        this.updateTimestamp();
    }

    // Teslimat bilgilerini güncelle
    updateDeliveryDetails(newDeliveryDetails) {
        this.deliveryDetails = { ...this.deliveryDetails, ...newDeliveryDetails };
        this.updateTimestamp();
    }

    // Güncelleme tarihini yenile
    updateTimestamp() {
        this.updatedAt = new Date();
    }

    // Sipariş bilgilerini göster
    displayOrderInfo() {
        return `
            Müşteri: ${this.customerInfo.name} ${this.customerInfo.surname}
            Sipariş Durumu: ${this.orderStatus}
            Sipariş Türü: ${this.orderType}
            Toplam: ${this.orderSummary.grandTotal.toFixed(2)} €
            Ödeme Durumu: ${this.paymentDetails.isPaid ? "Ödendi" : "Ödenmedi"}
            Eklenme Tarihi: ${this.createdAt.toLocaleDateString()}
            Güncellenme Tarihi: ${this.updatedAt.toLocaleDateString()}
            `;
    }
}

// data1.js'den alınan ürünleri siparişe ekleme ve test işlemleri
const order = new Order({
    orderType: "delivery",
    customerInfo: {
        name: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        address: "1234 Elm Street",
        phone: "123-456-7890",
        region: "North",
        paymentMethod: "Credit Card",
        specialRequest: "Lütfen sıcak teslim edin",
    },
    items: data1, // data1.js içerisindeki ürünleri burada kullanıyoruz
    deliveryFee: 5,
});

// Yeni sipariş oluşturuldu
console.log("Yeni sipariş oluşturuldu:", order.displayOrderInfo());

// Müşteri bilgileri güncellendi
console.log("Müşteri bilgileri güncellendi:", order.customerInfo);

// Sipariş durumu güncellendi
order.updateStatus("Bestellungen in Vorbereitung");
console.log("Sipariş durumu güncellendi:", order.orderStatus);

// Yeni ürün eklendi
order.addItem(data1[0]); // data1 içindeki ilk ürünü ekledik
console.log("Yeni ürün eklendi:", data1[0]);
console.log("Güncellenmiş sipariş toplamı:", order.orderSummary.grandTotal);

// Ürün siparişten çıkarıldı
order.removeItem("001");
console.log("Ürün siparişten çıkarıldı: 001");
console.log("Güncellenmiş sipariş toplamı:", order.orderSummary.grandTotal);

// Ödeme bilgileri güncellendi
order.updatePaymentDetails({ isPaid: true });
console.log("Ödeme bilgileri güncellendi:", order.paymentDetails);

// Teslimat bilgileri güncellendi
order.updateDeliveryDetails({ deliveryDriver: "Michael" });
console.log("Teslimat bilgileri güncellendi:", order.deliveryDetails);

// Güncellenme tarihi yenilendi
console.log("Güncellenme tarihi yenilendi:", order.updatedAt);

// Sipariş bilgilerini göster
console.log("Sipariş Bilgileri:", order.displayOrderInfo());

module.exports = Order;
