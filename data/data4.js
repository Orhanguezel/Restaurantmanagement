const data4 = [
    {
      name: 'Salate und Saucen',
      description: 'Unsere Hauptgerichte sind herzhaft und sättigend, perfekt für den großen Hunger.',
      icon: "fas fa-leaf",
      images: ['./assets/menu/1.jpg', './assets/menu/2.jpg'],
      subcategories: [
        {
          name: 'Salate',
          description: 'Frische Salate und köstliche Saucen, die jedes Gericht ergänzen.',
          images: ['./assets/menu/34.jpg', './assets/menu/35.jpg'],
          products: [
            {
              nr: '113',
              type: 'food',
              name: 'Hawaii Salat',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'Eisbergsalat, Tomaten, Gurken, Schinken, Gouda, Ananas',
              prices: { klein: 7.0, groß: 9.5 }
            },
            {
              nr: '114',
              type: 'food',
              name: 'Capricciosa Salat',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'Eisbergsalat, Tomaten, Gurken, Schinken, Thunfisch, Zwiebeln, Ei',
              prices: { klein: 7.0, groß: 9.5 }
            },
            {
              nr: '115',
              type: 'food',
              name: 'Bauern Salat',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'Eisbergsalat, Tomaten, Gurken, Peperoni, Hirtenkäse',
              prices: { klein: 7.0, groß: 9.5 }
            },
            {
              nr: '116',
              type: 'food',
              name: 'Mista Salat',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'Eisbergsalat, Tomaten, Gurken, Paprika, Gouda, Zwiebeln',
              prices: { klein: 7.0, groß: 9.5 }
            },
            {
              nr: '117',
              type: 'food',
              name: 'Thunfisch Salat',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'Eisbergsalat, Tomaten, Gurken, Paprika, Gouda, Zwiebeln',
              prices: { klein: 7.0, groß: 9.5 }
            },
            {
              nr: '118',
              type: 'food',
              name: 'Mozzarella Salat',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'Eisbergsalat, Tomaten, Gurken, Oliven, Peperoni, Mozzarella',
              prices: { klein: 7.0, groß: 9.5 }
            },
            {
              nr: '119',
              type: 'food',
              name: 'Insalata dello Chef',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'Eisbergsalat, gek. Schinken, Hähnchenfleisch, Mais, Tomaten',
              prices: { klein: 7.5, groß: 10.0 }
            },
            {
              nr: '120',
              type: 'food',
              name: 'Insalata alla Cesa',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'Eisbergsalat, gek. Schinken, Thunfisch, Gouda, Tomaten',
              prices: { klein: 7.5, groß: 9.5 }
            },
            {
              nr: '121',
              type: 'food',
              name: 'Gemischter Salat',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'Eisbergsalat, Tomaten, Gurken, Kraut, Zwiebeln',
              prices: { klein: 7.0, groß: 9.5 }
            },
            {
              nr: '122',
              type: 'food',
              name: 'Döner Salat',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'Dönerfleisch, Eisbergsalat, Tomaten, Gurken, Kraut, Zwiebeln, Hirtenkäse',
              prices: { klein: 7.5, groß: 10.5 }
            }
          ]
        },
        {
          name: 'Saucen',
          description: 'Sie können zusätzlich zu allen Gerichten bestellt werden',
          images: ['./assets/menu/13.jpg', './assets/menu/12.jpg'],
          products: [
            {
              nr: '86',
              type: 'food',
              name: 'Champignons, Rahmsauce',
              zusatzstoffe: [9],
              allergene: ['a', 'f', 'g', 'i'],
              description: 'Rahmsauce',
              prices: { aufPommes: 1.5, kleineSchale: 2.5, großeSchale: 3.9 }
            },
            {
              nr: '87',
              type: 'food',
              name: 'Jägersauce',
              zusatzstoffe: [1, 2, 8],
              allergene: ['j'],
              description: 'Jägersauce',
              prices: { aufPommes: 1.5, kleineSchale: 2.5, großeSchale: 3.9 }
            },
            {
              nr: '87.1',
              type: 'food',
              name: 'Zigeunersauce',
              zusatzstoffe: [2, 4],
              allergene: ['a', 'b', 'i', 'j'],
              description: 'Zigeunersauce',
              prices: { aufPommes: 1.5, kleineSchale: 2.5, großeSchale: 3.9 }
            },
            {
              nr: '88',
              type: 'food',
              name: 'Ketchup',
              zusatzstoffe: [1, 2, 8],
              allergene: ['j'],
              description: 'Ketchup',
              prices: { aufPommes: 1.0, kleineSchale: 2.0, großeSchale: 2.5 }
            },
            {
              nr: '88.1',
              type: 'food',
              name: 'Mayonnaise',
              zusatzstoffe: [1, 2],
              allergene: ['a', 'f', 'j'],
              description: 'Mayonnaise',
              prices: { aufPommes: 1.0, kleineSchale: 2.0, großeSchale: 2.5 }
            },
            {
              nr: '88.2',
              type: 'food',
              name: 'Currysauce',
              zusatzstoffe: [1, 2],
              allergene: ['j'],
              description: 'Currysauce',
              prices: { aufPommes: 1.0, kleineSchale: 2.0, großeSchale: 2.5 }
            },
            {
              nr: '89',
              type: 'food',
              name: 'Tzatziki',
              zusatzstoffe: [],
              allergene: ['g'],
              description: 'Tzatziki',
              prices: { kleineSchale: 2.5, großeSchale: 3.0 }
            },
            {
              nr: '89.1',
              type: 'food',
              name: 'Cocktailsauce',
              zusatzstoffe: [1, 2, 8],
              allergene: ['a', 'c', 'f', 'j'],
              description: 'Cocktailsauce',
              prices: { kleineSchale: 2.5, großeSchale: 3.0 }
            },
            {
              nr: '90',
              type: 'food',
              name: 'Scharf, Peperoni',
              zusatzstoffe: [2, 3],
              allergene: [],
              description: 'Peperoni',
              prices: { kleineSchale: 2.5, großeSchale: 3.0 }
            },
            {
              nr: '90.1',
              type: 'food',
              name: 'Hirtenkäse',
              zusatzstoffe: [1],
              allergene: ['g'],
              description: 'Hirtenkäse',
              prices: { aufPommes: 0.5, kleineSchale: 3.5, großeSchale: 4.9 }
            }
          ]
        }
      ]
    }
  ];

export default data4;