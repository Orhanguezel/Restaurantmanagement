const data3= [
    {
      name: 'Für Kinder',
      description: 'Unsere Hauptgerichte sind herzhaft und sättigend, perfekt für den großen Hunger.',
      subcategories: [
        {
          name: 'Für unsere kleine Freunde',
          description: 'Unsere Kindergerichte sind speziell auf die Bedürfnisse der kleinen Gäste abgestimmt.',
          images: ['/assets/menu/32.jpg', '/assets/menu/31.jpg'],
          products: [
            {
              nr: '110',
              type: 'food',
              name: 'Kinder Döner',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'mit Salat und Tzatziki',
              prices: { Price: 4.0 }
            },
            {
              nr: '111',
              type: 'food',
              name: 'Kinder Box',
              zusatzstoffe: [2, 3, 4],
              allergene: ['g', 'f', 'l', 'b'],
              description: 'mit Pommes',
              prices: { Price: 7.5 }
            },
            {
              nr: '112',
              type: 'food',
              name: 'Kinder Teller',
              zusatzstoffe: [2, 3, 4],
              allergene: ['a', 'g', 'f', 'l', 'b'],
              description: 'mit Pommes, Salat und Tzatziki',
              prices: { Price: 9.0 }
            }
          ]
        }
      ]
    }
  ];

  export default data3;