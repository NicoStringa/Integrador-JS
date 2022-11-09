const gamesData = [
  {
    id: 1,
    name: "Elden Ring",
    price: 59.99,
    imagen: "./assets/games/EldenRing.jpg",
    category: "action",
  },
  {
    id: 2,
    name: "Dying Light 2 Stay Human",
    price: 59.99,
    imagen: "./assets/games/DyingLight.jpg",
    category: "adventure",
  },
  {
    id: 3,
    name: "Horizon Zero Dawn Complete Edition",
    price: 49.99,
    imagen: "./assets/games/Horizon.jpg",
    category: "adventure",
  },
  {
    id: 4,
    name: "Call of Duty®: Modern Warfare® II",
    price: 69.99,
    imagen: "./assets/games/MWII.jpg",
    category: "action",
  },
  {
    id: 5,
    name: "Forza Horizon 5",
    price: 59.99,
    imagen: "./assets/games/Forza5.jpg",
    category: "racing",
  },
  {
    id: 6,
    name: "Life is Strange Remastered",
    price: 39.99,
    imagen: "./assets/games/Life.jpg",
    category: "adventure",
  },
  {
    id: 7,
    name: "OlliOlli World",
    price: 29.99,
    imagen: "./assets/games/OlliOlli.jpg",
    category: "platformer",
  },
  {
    id: 8,
    name: "Martha Is Dead",
    price: 29.99,
    imagen: "./assets/games/Martha.jpg",
    category: "adventure",
  },
  {
    id: 9,
    name: "Ghostwire: Tokyo",
    price: 29.99,
    imagen: "./assets/games/Ghost.jpg",
    category: "adventure",
  },
  {
    id: 10,
    name: "TUNIC",
    price: 29.99,
    imagen: "./assets/games/Tunic.jpg",
    category: "indie",
  },
  {
    id: 11,
    name: "DNF DUEL",
    price: 49.99,
    imagen: "./assets/games/DNF.jpg",
    category: "action",
  },
  {
    id: 12,
    name: "Weird West",
    price: 39.99,
    imagen: "./assets/games/Weird.jpg",
    category: "indie",
  },
  {
    id: 13,
    name: "Mount & Blade II: Bannerlord",
    price: 39.99,
    imagen: "./assets/games/Mount.jpg",
    category: "adventure",
  },
  {
    id: 14,
    name: "Metal: Hellsinger",
    price: 29.99,
    imagen: "./assets/games/Metal.jpg",
    category: "shooter",
  },
  {
    id: 15,
    name: "Cult of the Lamb",
    price: 19.99,
    imagen: "./assets/games/Cult.jpg",
    category: "strategy",
  },
  {
    id: 16,
    name: "Persona 5 Royal",
    price: 59.99,
    imagen: "./assets/games/Persona.jpg",
    category: "rpg",
  },
  {
    id: 17,
    name: "UNCHARTED™: Legacy of Thieves Collection",
    price: 49.99,
    imagen: "./assets/games/Uncharted.jpg",
    category: "adventure",
  },
  {
    id: 18,
    name: "Stray",
    price: 29.99,
    imagen: "./assets/games/Stray.jpg",
    category: "indie",
  },
  {
    id: 19,
    name: "Vampire Survivors",
    price: 3.99,
    imagen: "./assets/games/Vampire.jpg",
    category: "casual",
  },
  {
    id: 20,
    name: "PowerWash Simulator",
    price: 24.99,
    imagen: "./assets/games/Power.jpg",
    category: "shooter",
  },
];

const splitProducts = (size) => {
  let dividedProducts = [];
  for (let i = 0; i < gamesData.length; i += size) {
    dividedProducts.push(gamesData.slice(i, i + size));
  }
  return dividedProducts;
};

const productsController = {
  dividedProducts: splitProducts(6),
  nextProductsIndex: 1,
  productsLimit: splitProducts(6).length,
};

console.log(productsController);
