const menu = [
  { texto: "Productos", href: "/E-Commerce-Bayardo-Largaespada/productos/producto.html" },
  { texto: "Pagina principal", href: "/E-Commerce-Bayardo-Largaespada/index.html" },
  { texto: "Contactame", href: "/" },
];
let menuHtml = [];
for (const nav of menu) {
  menuHtml.push(`<a class="nav-link btn btn-outline-primary p-2" href="${nav.href}">${nav.texto}</a>`);
};
document.querySelector("header").innerHTML = menuHtml.join().replaceAll(",", "");