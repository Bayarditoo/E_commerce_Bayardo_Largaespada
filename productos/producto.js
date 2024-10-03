class Producto_1 {
  constructor(titulo, detalle, precio, stock, imagen) {
    this.titulo = titulo;
    this.detalle = detalle;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
  }
};
const producto = new Producto_1(
  "Laptop",
  "Ninguno",
  200,
  24,
  "/E-Commerce-Bayardo-Largaespada/productos/imagenes/X250.jpg"
);
let etiquetas = `
    <h1>${producto.titulo}</h1>
    <p>Detalle: ${producto.detalle}</p>
    <p>Precio: $${producto.precio}</p>
    <p>Stock: ${producto.stock}</p>
    <img src="${producto.imagen}">
`;
document.querySelector("main").innerHTML = etiquetas;
/*let colon = {
  name: `Colon`,
  street: `Calle 1`,
  city: `Bayardo`,
  state: `La Paz`,
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
}
const bayardoAddrees = new adress(
  `Bayardo`,
  `Calle 1`,
  8,
  `Ciudad sandino`,
  2008
);
console.log(bayardoAddrees);
console.log(bayardoAddrees.getAddress());*/
let compras = [`pan`, `pizza`, `sandwich`, `burger`,1,2,3,4];
console.log(compras[0]);
console.log(compras.at(-2));