const producto = {
  titulo: "Laptop",
  detalle: "Ninguno",
  precio: 200,
  stock: 24,
  imagen: "/imagenes/X250.jpg",
};

let etiquetas = `
    <h1>${producto.titulo}</h1>
    <p>Detalle: ${producto.detalle}</p>
    <p>Precio: $${producto.precio}</p>
    <p>Stock: ${producto.stock}</p>
    <img src="${producto.imagen}" alt="${producto.titulo}">
`;

document.querySelector("main").innerHTML = etiquetas;
