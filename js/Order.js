const Product = require("./Product");
const data1 = require("../data/data1"); // data1.js dosyasındaki ürünleri dahil ediyoruz

class Order {
  constructor({
    customerInfo = {},
    items = [],
    orderSummary = {},
    orderStatus = "Eingehende Bestellungen",
    orderType = "Restorandan", // "Restorandan", "Pickup", "Lieferung"
    paymentDetails = {},
    deliveryDetails = {},
    archived = false,
    notes = "",
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    console.log("Sipariş oluşturuluyor...");

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

    this.allowedDeliveryAddresses = ["North", "East", "South", "West"]; // Sadece bu adreslere teslimat yapılabilir

    if (
      orderType === "Lieferung" &&
      !this.allowedDeliveryAddresses.includes(this.customerInfo.region)
    ) {
      console.log(
        "Teslimat yapılamayan bir bölge seçildi:",
        this.customerInfo.region
      );
      throw new Error("Seçili bölgeye teslimat yapılamıyor.");
    }

    this.items = items.map((item) => new Product(item)); // items içindeki her ürünü Product nesnesine dönüştürüyoruz
    console.log(
      "Sipariş için ürünler yüklendi:",
      this.items.map((item) => item.displayProductInfo())
    );

    this.orderSummary = {
      subtotal: orderSummary.subtotal || 0,
      tax: orderSummary.tax || 0,
      discount: orderSummary.discount || 0,
      total: orderSummary.total || 0,
      deliveryFee:
        orderType === "Lieferung" ? orderSummary.deliveryFee || 5 : 0, // Sadece eve teslimde teslimat ücreti
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

    this.calculateTotal(); // Sipariş toplamını baştan hesaplayalım
    console.log("Yeni sipariş oluşturuldu:", this.displayOrderInfo());
  }

  // Müşteri bilgilerini güncelle
  updateCustomerInfo(newInfo) {
    console.log("Müşteri bilgileri güncelleniyor...");
    this.customerInfo = { ...this.customerInfo, ...newInfo };
    this.updateTimestamp();
    console.log("Güncellenmiş müşteri bilgileri:", this.customerInfo);
  }

  // Sipariş durumunu güncelle
  updateStatus(newStatus) {
    console.log("Sipariş durumu güncelleniyor...");
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
      console.log("Yeni sipariş durumu:", this.orderStatus);
    } else {
      console.log("Geçersiz sipariş durumu:", newStatus);
    }
  }

  // Siparişe yeni ürün ekle
  addItem(item) {
    console.log("Siparişe yeni ürün ekleniyor...");
    const newItem = new Product(item); // Yeni ürünü Product nesnesi olarak ekleyelim
    this.items.push(newItem);
    this.calculateTotal();
    this.updateTimestamp();
    console.log("Yeni ürün eklendi:", newItem.displayProductInfo());
    console.log("Güncellenmiş toplam:", this.orderSummary.grandTotal);
  }

  // Ürünleri siparişten çıkar
  removeItem(nr) {
    console.log(`Siparişten ürün çıkarılıyor: Nr -> ${nr}`);
    this.items = this.items.filter((item) => item.nr !== nr);
    this.calculateTotal();
    this.updateTimestamp();
    console.log(
      "Ürün çıkarıldı. Güncellenmiş toplam:",
      this.orderSummary.grandTotal
    );
  }

  // Ekstra maliyetleri ve vergiyi hesaplayarak toplam güncelleme
  calculateTotal() {
    console.log("Toplam hesaplanıyor...");
    const subtotal = this.items.reduce((acc, item) => {
      const priceValue = item.prices.price || item.selectedPrice?.value || 0;
      const quantity = item.quantity || 1;
      const deposit =
        this.orderType === "Lieferung" || this.orderType === "Pickup"
          ? item.deposit || 0
          : 0; // Sadece teslimat ve pickup'ta depozito ekle
      return acc + priceValue * quantity + deposit;
    }, 0);

    this.orderSummary.subtotal = subtotal;
    this.orderSummary.total =
      subtotal + this.orderSummary.tax - this.orderSummary.discount;
    this.orderSummary.grandTotal =
      this.orderSummary.total + this.orderSummary.deliveryFee;
    console.log("Hesaplanan toplam:", this.orderSummary.grandTotal);
  }

  // Ödeme bilgilerini güncelle
  updatePaymentDetails(newPaymentDetails) {
    console.log("Ödeme bilgileri güncelleniyor...");
    this.paymentDetails = { ...this.paymentDetails, ...newPaymentDetails };
    this.updateTimestamp();
    console.log("Güncellenmiş ödeme bilgileri:", this.paymentDetails);
  }

  // Teslimat bilgilerini güncelle
  updateDeliveryDetails(newDeliveryDetails) {
    console.log("Teslimat bilgileri güncelleniyor...");
    this.deliveryDetails = { ...this.deliveryDetails, ...newDeliveryDetails };
    this.updateTimestamp();
    console.log("Güncellenmiş teslimat bilgileri:", this.deliveryDetails);
  }

  // Güncelleme tarihini yenile
  updateTimestamp() {
    this.updatedAt = new Date();
    console.log("Güncelleme tarihi yenilendi:", this.updatedAt);
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
  orderType: "Lieferung", // "Restorandan", "Pickup", "Lieferung"
  customerInfo: {
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    address: "1234 Elm Street",
    phone: "123-456-7890",
    region: "North", // Teslimat yapılabilir bir bölge
    paymentMethod: "Credit Card",
    specialRequest: "Lütfen sıcak teslim edin",
  },
  items: data1,
  orderSummary: { deliveryFee: 5 },
});

// Test amaçlı işlemler
order.updateCustomerInfo({ name: "Jane", email: "jane.doe@example.com" });
order.updateStatus("Bestellungen in Vorbereitung");
order.addItem(data1[0]);
order.removeItem("001");
order.updatePaymentDetails({ isPaid: true });
order.updateDeliveryDetails({ deliveryDriver: "Michael" });

console.log("Sipariş Bilgileri:", order.displayOrderInfo());

module.exports = Order;
