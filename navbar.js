const menu = [
  { texto: "Página principal", href: "index.html" },
  {
    texto: "Contáctame",
    href: "https://www.linkedin.com/in/bayardo-largaespada-73346a2a3/",
  },
];

// Generar HTML para el menú de navegación izquierda
let menuHtml = [];
for (const nav of menu) {
  menuHtml.push(
    `<a class="nav-link p-3 text-white d-flex flex-wrap justify-content-around btn btn-light" href="${nav.href}">${nav.texto}</a>`
  );
}

// Añadir el menú al #navLeft usando insertAdjacentHTML
document.addEventListener("DOMContentLoaded", () => {
  // Asegúrate de que #navLeft exista antes de agregar el menú
  const navLeft = document.querySelector("#navLeft");
  if (navLeft) {
    navLeft.insertAdjacentHTML("beforeend", menuHtml.join(""));
  }

  // Agregar saludo y botón de iniciar/cerrar sesión en #navRight
  const navRight = document.querySelector("#navRight");
  if (navRight) {
    navRight.innerHTML = localStorage.getItem("email")
      ? `<li class="nav-item text-white pt-2 m-1">Hola, ${localStorage.getItem(
        "email"
      )}</li>
               <span></span>
<li>
  <a href="./cart.html"><img height="25" src="https://raw.githubusercontent.com/julioavantt/guayerd_login/refs/heads/main/cart.png" alt="Comprar" /></a>
  <b id="quantity" class="text-white">${localStorage.getItem("quantity")}</b>
</li>
<span></span>
         <li class="nav-item">
             <button class="btn btn-primary rounded-pill p-2 m-2" onclick="logout()">Cerrar sesión</button>
         </li>
`
      : `<li class="nav-item">
             <a href="login.html">
                 <button class="btn btn-primary rounded-pill">Iniciar sesión</button>
             </a>
         </li>`;
  }
});

// Función de logout
function logout() {
  localStorage.removeItem("email");
  location.href = "index.html";
}