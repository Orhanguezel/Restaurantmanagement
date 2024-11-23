const data1 = [
{   
    name: 'Hauptgerichte',
    description: 'Unsere Hauptgerichte sind herzhaft und sättigend, perfekt für den großen Hunger.',
    images: ['./assets/menu/1.jpg', './assets/menu/2.jpg'],
    subcategories: [
      {
        name: 'Döner Spezialitäten',
        description: 'Drehspieß nach Döner Art aus Kalbfleisch.',
        images: ['./assets/menu/1.jpg', './assets/menu/2.jpg'],
        products: [
          {
            nr: '1',
            type: 'food',
            name: 'Döner im Fladenbrot',
            zusatzstoffe: [2, 3, 4],
            allergene: ['a', 'g', 'f', 'l', 'b'],
            description: 'mit Salat und Tzatziki',
            prices: { klein: 6.5, groß: 9.5},
            extras: { Hirtenkäse: 0.7 }
          },
          {
            nr: '2',
            type: 'food',
            name: 'Döner Dürüm',
            zusatzstoffe: [2, 3, 4],
            allergene: ['a', 'g', 'f', 'l', 'b'],
            description: 'mit Salat und Tzatziki',
            prices: { Price: 7.5 },
            extras: { Hirtenkäse: 0.7 }
          },
          {
            nr: '3',
            type: 'food',
            name: 'Nuggets Döner',
            zusatzstoffe: [2, 3, 4],
            allergene: ['a', 'g', 'f', 'l', 'b'],
            description: 'mit Salat und Spezial Sauce',
            prices: { Price: 6.5 },
            extras: { Hirtenkäse: 0.7 }
          },
          {
            nr: '4',
            type: 'food',
            name: 'Döner Teller',
            zusatzstoffe: [2, 3, 4],
            allergene: ['a', 'g', 'f', 'b'],
            description: 'mit Salat und Tzatziki',
            prices: { Price: 9.5 },
            extras: { Hirtenkäse: 0.7 }
          },
          {
            nr: '5',
            type: 'food',
            name: 'Döner Teller',
            zusatzstoffe: [2, 3, 4],
            allergene: ['a', 'g', 'f', 'l', 'b'],
            description: 'mit Pommes oder Reis und Tzatziki',
            prices: { Price: 9.5 },
            extras: { Hirtenkäse: 0.7 }
          },
          {
            nr: '6',
            type: 'food',
            name: 'Döner Teller',
            zusatzstoffe: [2, 3, 4],
            allergene: ['a', 'g', 'f', 'b'],
            description: 'mit Pommes oder Reis, Salat und Tzatziki',
            prices: { Price: 11.0 },
            extras: { Hirtenkäse: 0.7 }
          },
          {
            nr: '7',
            type: 'food',
            name: 'Portion Döner',
            zusatzstoffe: [2, 3, 4],
            allergene: ['g'],
            description: 'mit Zwiebeln und Tzatziki',
            prices: { klein: 9.0, groß: 11.5 },
            extras: { Hirtenkäse: 0.7 }
          },
          {
            nr: '8',
            type: 'food',
            name: 'Döner Pita',
            zusatzstoffe: [2, 3, 4],
            allergene: ['f'],
            description: 'mit Rahmsauce und Gouda Käse',
            prices: { klein: 9.0, groß: 11.5 },
            extras: { Hirtenkäse: 0.7 }
          },
          {
            nr: '9',
            type: 'food',
            name: 'Pomm-Döner',
            zusatzstoffe: [2, 3, 4],
            allergene: ['g', 'f', 'b'],
            description: 'mit Sauce',
            prices: { Price: 6.5 }
          },
          {
            nr: '10',
            type: 'food',
            name: 'Falafel Teller',
            zusatzstoffe: [],
            allergene: [],
            description: '8 Stk. mit Pommes oder Reis, Salat und Tzatziki',
            prices: { Price: 10.0 }
          }
        ]
  
      },
      {
        name: 'Döner Überbacken',
        description: 'Alle Döner Überbacken Gerichte werden mit Pommes & Salat serviert.',
        images: ['./assets/menu/3.jpg', './assets/menu/4.jpg'],
        products: [
          {
            nr: '11',
            type: 'food',
            name: 'Döner überbacken',
            zusatzstoffe: [2, 3, 4],
            allergene: ['f'],
            description: 'mit Sahnesauce und Gouda',
            prices: { Price: 10.0 }
          },
          {
            nr: '12',
            type: 'food',
            name: 'Döner überbacken',
            zusatzstoffe: [2, 3, 4],
            allergene: ['f'],
            description: 'mit Rahm, Gouda und Tomatensauce',
            prices: { Price: 11.5 }
          },
          {
            nr: '13',
            type: 'food',
            name: 'Döner überbacken',
            zusatzstoffe: [2, 3, 4],
            allergene: ['g'],
            description: 'mit Peperoni, Zwiebeln, Gouda Hirtenkäse & Sauce Hollandaise',
            prices: { Price: 11.5 }
          },
          {
            nr: '14',
            type: 'food',
            name: 'Döner überbacken',
            zusatzstoffe: [2, 3, 4],
            allergene: ['g'],
            description: 'mit Spinat, Broccoli, Pilze, Gouda und Sauce Hollandaise',
            prices: { Price: 11.5 }
          },
          {
            nr: '15',
            type: 'food',
            name: 'Döner überbacken',
            zusatzstoffe: [2, 3, 4],
            allergene: ['g', 'f', 'b'],
            description: 'mit Peperoni, Tomaten, Zwiebeln, Gouda und Sauce Hollandaise',
            prices: { Price: 11.5 }
          },
          {
            nr: '16',
            type: 'food',
            name: 'Döner überbacken',
            zusatzstoffe: [2, 3, 4],
            allergene: ['g', 'f', 'b'],
            description: 'mit Schinken, Ananas, Gouda und Sauce Hollandaise',
            prices: { Price: 11.5 }
          }
        ]
      },
      {
        name: 'Teigtaschen',
        description: 'Im Steinofen frisch gebacken.',
        images: ['./assets/menu/5.jpg', './assets/menu/6.jpg'],
        products: [
          {
            nr: '18',
            type: 'food',
            name: 'Lahmacun (Türkische Pizza)',
            zusatzstoffe: [2, 3, 4],
            allergene: ['a', 'g', 'f', 'l', 'b'],
            description: 'mit Salat und Tzatziki eingerollt',
            prices: { Price: 7.5 }
          },
          {
            nr: '19',
            type: 'food',
            name: 'Lahmacun (Türkische Pizza)',
            zusatzstoffe: [2, 3, 4],
            allergene: ['a', 'g', 'f', 'l', 'b'],
            description: 'mit Salat, Tzatziki und Dönerfleisch eingerollt',
            prices: { Price: 8.5 }
          },
          {
            nr: '20',
            type: 'food',
            name: 'Kıymalı Pide',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'Teigtasche gefüllt mit Gehacktem, Gouda und Salatbeilage',
            prices: { Price: 9.5 }
          },
          {
            nr: '21',
            type: 'food',
            name: 'Ispanaklı Pide',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'Teigtasche gefüllt mit Spinat, Hirtenkäse, Gouda und Salatbeilage',
            prices: { Price: 9.5 }
          },
          {
            nr: '22',
            type: 'food',
            name: 'Calzone 1',
            zusatzstoffe: [1, 2, 3, 4],
            allergene: ['a', 'g'],
            description: 'Teigtasche gefüllt mit Dönerfleisch, Tomaten, Zwiebeln, Gouda und Salatbeilage',
            prices: { Price: 10.0 }
          },
          {
            nr: '23',
            type: 'food',
            name: 'Calzone 2',
            zusatzstoffe: [2, 3],
            allergene: ['a', 'c', 'g', 'i', 'o'],
            description: 'Teigtasche gefüllt mit Peperoni, Champignons, Spinat, Gouda, Sauce Hollandaise und Salatbeilage',
            prices: { Price: 10.0 }
          },
          {
            nr: '24',
            type: 'food',
            name: 'Sucuklu Pide',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'Teigtasche gefüllt mit Knoblauchwurst, Gouda und Salatbeilage',
            prices: { Price: 9.5 }
          },
          {
            nr: '25',
            type: 'food',
            name: 'Peynirli Pide',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'Teigtasche gefüllt mit Hirtenkäse und Salatbeilage',
            prices: { Price: 9.5 }
          },
          {
            nr: '25.1',
            type: 'food',
            name: 'Dönerli Pide',
            zusatzstoffe: [1, 2, 3, 4],
            allergene: ['a', 'g'],
            description: 'Teigtasche gefüllt mit Dönerfleisch, Zwiebeln, Hirtenkäse und Salatbeilage',
            prices: { Price: 10.5 }
          }
        ]
      },
      {
        name: 'Pizza',
        description: 'Alle Pizzen mit Goudakäse und Oregano. Alle Pizzen auf Wunsch mit Knoblauch und scharf + 0.30€.',
        images: ['./assets/menu/8.jpg', './assets/menu/10.jpg'],
        products: [
          {
            nr: '26',
            type: 'food',
            name: 'Margheritta',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: '',
            prices: { klein: 6.5, groß: 7.5},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '27',
            type: 'food',
            name: 'Salami',
            zusatzstoffe: [1, 2, 3],
            allergene: ['a', 'g', 'i', 'j'],
            description: 'mit Salami',
            prices: { klein: 7.5, groß: 9.0},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '28',
            type: 'food',
            name: 'Prosciutto',
            zusatzstoffe: [3, 9],
            allergene: ['a', 'i', 'j'],
            description: 'mit Schinken',
            prices: { klein: 7.5, groß: 9.0},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '29',
            type: 'food',
            name: 'Funghi',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'mit Pilze',
            prices: { klein: 7.5, groß: 9.0},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '30',
            type: 'food',
            name: 'Tonno',
            zusatzstoffe: [1],
            allergene: ['a', 'g', 'f'],
            description: 'mit Thunfisch und Zwiebeln',
            prices: { klein: 7.5, groß: 9.5},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '31',
            type: 'food',
            name: 'Toscana',
            zusatzstoffe: [1, 2, 3],
            allergene: ['a', 'g', 'i', 'j'],
            description: 'mit Salami und Schinken',
            prices: { klein: 7.5, groß: 9.5},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '32',
            type: 'food',
            name: 'Hawaii',
            zusatzstoffe: [1, 2, 3],
            allergene: ['a', 'g', 'i', 'j'],
            description: 'mit Ananas und Schinken',
            prices: { klein: 7.5, groß: 9.5},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '33',
            type: 'food',
            name: 'Diavollo',
            zusatzstoffe: [1, 2, 3],
            allergene: ['a', 'g', 'i', 'j'],
            description: 'mit Thunfisch, Paprika, Salami, Knoblauch (scharf)',
            prices: { klein: 7.5, groß: 9.5},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '34',
            type: 'food',
            name: 'Inferno',
            zusatzstoffe: [1, 2, 3, 6],
            allergene: ['a', 'g'],
            description: 'mit Paprika, Peperoni, Oliven (scharf)',
            prices: { klein: 7.5, groß: 9.0},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '35',
            type: 'food',
            name: 'Mafiosi',
            zusatzstoffe: [1, 2, 3],
            allergene: ['a', 'g', 'i', 'j'],
            description: 'mit Salami, Thunfisch und Zwiebeln',
            prices: { klein: 7.5, groß: 9.5},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '36',
            type: 'food',
            name: 'Broccoli',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'mit Broccoli, Paprika und Zwiebeln',
            prices: { klein: 7.5, groß: 9.5},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '37',
            type: 'food',
            name: 'Capricciosa',
            zusatzstoffe: [1, 2, 3],
            allergene: ['a', 'g', 'i', 'j'],
            description: 'mit Salami, Schinken und Pilze',
            prices: { klein: 7.5, groß: 9.5},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '38',
            type: 'food',
            name: 'Calzone 1',
            zusatzstoffe: [1, 2, 3],
            allergene: ['a', 'g', 'i', 'j'],
            description: 'Teigtasche mit Schinken, Salami und Paprika',
            prices: { klein: 7.5, groß: 9.0},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '39',
            type: 'food',
            name: 'Vegetaria',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'mit Broccoli, Pilzen, Tomaten, Zwiebeln und Paprika',
            prices: { klein: 8.5, groß: 11.0 },
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '40',
            type: 'food',
            name: 'Pizza Döner',
            zusatzstoffe: [1, 2, 3, 4],
            allergene: ['a', 'g', 'f', 'l', 'b'],
            description: 'mit Dönerfleisch, Zwiebeln und Tomaten',
            prices: { klein: 8.5, groß: 11.0 },
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '41',
            type: 'food',
            name: 'Pizza Döner',
            zusatzstoffe: [1, 2, 3, 4],
            allergene: ['a', 'g', 'f', 'l', 'b'],
            description: 'mit Dönerfleisch, Hirtenkäse, Peperoni und Gouda',
            prices: { klein: 8.5, groß: 11.0 },
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '42',
            type: 'food',
            name: 'Pizza nach Art des Hauses',
            zusatzstoffe: [1, 2, 3, 4],
            allergene: ['a', 'g', 'f', 'l', 'b'],
            description: 'mit Dönerfleisch, Hirtenkäse und Zwiebeln (scharf)',
            prices: { klein: 8.5, groß: 11.0 },
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '43',
            type: 'food',
            name: 'Americano',
            zusatzstoffe: [1, 3, 9],
            allergene: ['a', 'i', 'j'],
            description: 'mit Schinken, Thunfisch, Ei, Champignons, Zwiebeln (scharf)',
            prices: { klein: 8.5, groß: 11.0 },
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '44',
            type: 'food',
            name: 'Scampi',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'mit Krabben und Knoblauch',
            prices: { klein: 7.5, groß: 10.0},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '45',
            type: 'food',
            name: 'Tavera',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'mit Spinat, Hirtenkäse und Pilze',
            prices: { klein: 7.5, groß: 10.0},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '46',
            type: 'food',
            name: 'Aldenhoven Pizza',
            zusatzstoffe: [1, 2, 3],
            allergene: ['a', 'g', 'i', 'j'],
            description: 'mit Salami, Pilze, Thunfisch und Paprika',
            prices: { klein: 8.5, groß: 10.5 },
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '47',
            type: 'food',
            name: 'Siciliano',
            zusatzstoffe: [1, 2, 3, 6],
            allergene: ['a', 'g', 'i', 'j'],
            description: 'mit Thunfisch, Schinken, Sardellen, Oliven und Zwiebeln',
            prices: { klein: 9.0, groß: 11.0},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '48',
            type: 'food',
            name: 'Napolli',
            zusatzstoffe: [1, 6],
            allergene: ['a', 'g'],
            description: 'mit Sardellen, Oliven und Zwiebeln',
            prices: { klein: 7.5, groß: 10.0},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '49',
            type: 'food',
            name: 'Mozzarella',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'mit fr. Tomaten',
            prices: { klein: 7.5, groß: 10.0},
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '50',
            type: 'food',
            name: 'Gepetto',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'mit Thunfisch, Paprika und Zwiebeln',
            prices: { klein: 8.0, groß: 10.5 },
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '51',
            type: 'food',
            name: 'Mista',
            zusatzstoffe: [1, 2, 3],
            allergene: ['a', 'g', 'i', 'j'],
            description: 'mit Salami, Thunfisch, Champignons und Schinken',
            prices: { klein: 8.5, groß: 11.0 },
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '52',
            type: 'food',
            name: 'Sucuklu',
            zusatzstoffe: [1],
            allergene: ['a', 'g'],
            description: 'Pizza mit türk. Knoblauchwurst',
            prices: { klein: 8.5, groß: 11.0 },
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0
            }
          },
          {
            nr: '53',
            type: 'food',
            name: 'Döner Pizza Hawaii',
            zusatzstoffe: [1, 2, 3, 4],
            allergene: ['a', 'g', 'f', 'l', 'b'],
            description: 'mit Dönerfleisch, Schinken und Ananas',
            prices: { klein: 8.5, groß: 11.0 },
            extras: {
              mitKnoblauchundScharf: 0.3,
              GoudaKäse: 2.0 }
          }
        ]
      }
    ]
  }
];

export default data1;