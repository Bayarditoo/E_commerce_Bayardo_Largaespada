const producto = {
  titulo: "Laptop",
  detalle: "Ninguno",
  precio: 200,
  stock: 24,
  imagen: `/E-Commerce-Bayardo-Largaespada/productos//imagenes/X250.jpg`,
};

let etiquetas = `
    <h1>${producto.titulo}</h1>
    <p>Detalle: ${producto.detalle}</p>
    <p>Precio: $${producto.precio}</p>
    <p>Stock: ${producto.stock}</p>
    <img src="${producto.imagen}">
`;

document.querySelector("main").innerHTML = etiquetas;
let colon = {
  name: "Colon",
  street: "Calle 1",
  city: "Bayardo",
  state: "La Paz",
  year: 2023,
  get: function () {
    console.log(`Esta ejecutando la funcion get`);
  },
  chatel: {
    character: `Y esta dificil`,
  },
};
colon.chatel.character = `Sobre escribir la funcion chatel`;
console.log(colon.chatel.character);
colon.get();
class adress {
  constructor(name, street, city, state, year) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.year = year;
  }
  getAddress() {
    return `Mi direcciones es ${this.street}, mi nombre es ${this.name}`;
  }
};
const bayardoAddrees = new adress(`Bayardo`, `Calle 1`, 8, `Ciudad sandino`, 2008);
console.log(bayardoAddrees);
console.log(bayardoAddrees.getAddress());
