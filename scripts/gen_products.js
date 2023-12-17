const fs = require('fs');

const pick = (...arr) => arr[Math.floor(Math.random() * arr.length)];
const someOf = (...arr) => arr.map(x => Math.random() > 0.25 ? x : undefined).filter(Boolean);
const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1))

const getuuid = () => Array.from({length: 4}, () => Math.random().toString(16).slice(2)).join('-')

const dataset = {
  id:  getuuid(),
  name: [pick('La', ''), pick('Pizza', 'Pasta'), pick('Italia', 'a la Mama', 'Spumante', 'Mafiosi', 'del Papa')].join(' ').trim(),
  products: Array.from({length: 100}, (_, id) => ({id: getuuid(),
    name: [
      pick('Pizza', 'Ravioli', 'Tortellini', 'Steak', 'Antipasti', 'Maccheroni', 'Fettucini', 'Mezzalune', 'Pesce'),
      pick('Napoli', 'Arrabiata', 'Tonno', 'Pollo', 'Gorgonzola', 'Prosciotto', 'Quattro Staggioni', 'Mafiosi', 'Fungi'),
      pick('a la Mama', 'a la Papa', 'del Pastor', 'a la Familia', 'verde', 'rosso', 'e Spinaci', 'Pronto', 'Speciale', 'e Cipola', '')
    ].join(' ').trim(),
    extras: someOf('extra cheese', 'extra onion', 'extra meat', 'bacon', 'egg', 'olives', 'cheddar', 'sausages', 'thuna'),
    price: (rand(8, 19)) * 100 + 95,
    rating: {
      score: rand(3, 10) / 2,
      votes: rand(600, 800),
    }
  }))
};

fs.writeFileSync('src/assets/restaurant.json', JSON.stringify(dataset, null, 2), 'utf8');
