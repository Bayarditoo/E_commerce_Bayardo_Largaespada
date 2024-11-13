
const data = [
  {
    id: 1,
    descripcion: "Dell XPS 13",
    categoria: "Ultrabook",
    precio: "$999",
    href: "https://m.media-amazon.com/images/I/710EGJBdIML._AC_SL1500_.jpg",
    stock: 15,
  },
  {
    id: 2,
    descripcion: "HP Omen 15",
    categoria: "Gaming",
    precio: "$1,299",
    href: "https://www.omen.com/content/dam/sites/omen/worldwide/laptops/omen-15-laptop/2-0/starmade-15-50-w-numpad-4-zone-oled-shadow-black-nt-h-dcam-non-odd-non-fpr-freedos-core-set-front-right-copy.png",
    stock: 8,
  },
  {
    id: 3,
    descripcion: "Apple MacBook Pro",
    categoria: "Ultrabook",
    precio: "$1,499",
    href: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.small.jpg",
    stock: 5,
  },
  {
    id: 4,
    descripcion: "Lenovo ThinkPad X1",
    categoria: "Business",
    precio: "$1,299",
    href: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8NDQ1NTc2fGltYWdlL3BuZ3xoNTgvaDg4LzE0MzMyMDQzMjY0MDMwLnBuZ3w1ZDJjODlkNWQ5YmYxYThmYmQzOGVhMDUxNGNhYWEyMWM5YmMzZDVhYmYxNDRkNjJiOTc2NGE3Njk4ZjM4ZTc4/lenovo-laptops-thinkpad-x1-nano-gen-2-hero.png",
    stock: 10,
  },
  {
    id: 5,
    descripcion: "Asus ROG Zephyrus",
    categoria: "Gaming",
    precio: "$1,599",
    href: "https://acdn.mitiendanube.com/stores/001/907/418/products/2-7cc4d3178ccc22e7a217134577757328-1024-1024.webp",
    stock: 12,
  },
  {
    id: 6,
    descripcion: "Acer Swift 3",
    categoria: "Ultrabook",
    precio: "$799",
    href: "https://static2-ecemea.acer.com/media/catalog/product/_/_/___s__swift-3-sf314-43-fpbl-sv_1000main_nx.ab1eb.00a.png?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500&format=jpeg",
    stock: 20,
  },
  {
    id: 7,
    descripcion: "MSI Prestige 14",
    categoria: "Business",
    precio: "$1,199",
    href: "https://m.media-amazon.com/images/I/81cQmQm7wWL._AC_SX425_.jpg",
    stock: 6,
  },
  {
    id: 8,
    descripcion: "Razer Blade 15",
    categoria: "Gaming",
    precio: "$1,999",
    href: "https://i5.walmartimages.com/seo/Razer-Blade-15-Advanced-RZ09-0367BEC3-R3U1-Intel-Core-i7-11800H-16GB-1TB-15-6-Gaming-Laptop_9a5f39ae-f1b3-4725-b0ba-71d540fd5daa.cebb40345bf9523121079ec11f17b003.jpeg",
    stock: 4,
  },
  {
    id: 9,
    descripcion: "Microsoft Surface Laptop",
    categoria: "Ultrabook",
    precio: "$999",
    href: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6582/6582848_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
    stock: 9,
  },
  {
    id: 10,
    descripcion: "LG Gram 17",
    categoria: "Ultrabook",
    precio: "$1,699",
    href: "https://www.lg.com/us/images/business/laptops/md07502492/gallery/medium01.jpg",
    stock: 11,
  },
  {
    id: 11,
    descripcion: "Huawei MateBook X",
    categoria: "Business",
    precio: "$1,199",
    href: "https://http2.mlstatic.com/D_NQ_NP_679686-MNI71289221414_082023-O.webp",
    stock: 13,
  },
  {
    id: 12,
    descripcion: "Google Pixelbook Go",
    categoria: "Ultrabook",
    precio: "$649",
    href: "https://i.blogs.es/197337/pixelbook-go-chrome/1024_2000.jpg",
    stock: 7,
  },
];

function dataCards(data) {
  const prod = data.map(
    (producto) => `
      <div class="card col-sm-3 m-3" style="width: 18rem;">
        <a href="#"><img src="${producto.href}" class="card-img-top img-fluid"
          style="height: 200px" alt="${producto.descripcion}"></a>
        <div class="card-body">
          <h5 class="card-title text-secondary">${producto.descripcion}</h5>
          <p class="card-text text-decoration-underline">Categoría: ${producto.categoria}</p>
          <p class="card-text text-danger">Precio: ${producto.precio}</p>
          <p class="card-text text-primary">Stock: ${producto.stock}</p> <! Agregado el stock -->
          <a href="producto.html?prod=${producto.id}" class="btn btn-primary bg-secondary border-0">
            Ver más
          </a>
        </div>
      </div>`
  );
  document.querySelector("main").innerHTML = prod.join("");
}
dataCards(data);
function buscarProducto() {
  const input = document.querySelector("#searchInput").value.toLowerCase();
  const filteredData = data.filter((prod) =>
    prod.descripcion.toLowerCase().includes(input)
  );
  dataCards(filteredData);
}
function regresarHome() {
  document.querySelector("#searchInput").value = "";
  dataCards(data);
}
function filtrarCategoria(categoria) {
  const filteredData = data.filter((prod) => prod.categoria === categoria);
  dataCards(filteredData);
}

document
  .querySelector("#searchButton")
  .addEventListener("click", buscarProducto);
document.querySelector("#home").addEventListener("click", regresarHome);

document.addEventListener("DOMContentLoaded", () => {
  dataCards(data);
});

/* Filtrar por categoría */
function filterCategory(categoria) {
  if (categoria === "Todo") {
    dataCards(data);
  } else {
    const filteredData = data.filter((item) => item.categoria === categoria);
    dataCards(filteredData);
  }
};
dataCards(data);

document.querySelector("main").innerHTML = `
            <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Si jala el código");
  }, 3000);
});

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.error("Hubo un error:", error);
});
