module.exports = [
    {
        nr: "001",
        type: "Getränk",
        name: "Limonade",
        zusatzstoffe: [1, 3],
        allergene: ["Gluten"],
        description: "Erfrischende hausgemachte Limonade",
        prices: { klein: 2.0, groß: 3.5 },
        extras: [["Oliven", 0.5], ["Extra Käse", 1.0]],
        deposit: 0.25 // Depozito
    },
    {
        nr: "002",
        type: "Essen",
        name: "Pizza Margherita",
        zusatzstoffe: [],
        allergene: ["Milch"],
        description: "Pizza mit Tomatensoße und Käse",
        prices: { price: 7.5 },
        extras: [["Knoblauch", 0.5], ["Extra Käse", 1.5]],
        deposit: 0 // Depozito yok
    }
];
