const cardsSection = document.querySelector("#cart #cards");
const btnClearCart = document.querySelector("#btn-clear-cart"); // Botón para limpiar carrito
const cartTotal = document.querySelector("#card-total"); // Elemento para mostrar el total
const quantity = document.querySelector("#quantity"); // Elemento para mostrar cantidad total de items en el carrito

// Función para mostrar los productos en el carrito
function getCart(cards) {
    const list = cards.map(card => `
            <div class="card border shadow-none">
    <div class="card-body">
        <div class="d-flex align-items-start border-bottom pb-3">
            <div class="me-4">
                <img src="${card.product.href}" alt="${card.product.descripcion}" class="avatar-lg rounded img-fluid" />
            </div>
            <div class="flex-grow-1 overflow-hidden">
                <h5 class="text-truncate font-size-18">${card.product.descripcion}</h5>
                <div class="row">
                    <div class="col-6 col-md-4">
                        <div class="mt-3">
                            <p class="text-muted mb-2">Precio</p>
                            <h5 class="mb-0 mt-2">$${card.product.precio}</h5>
                        </div>
                    </div>
                    <div class="col-6 col-md-5">
                        <div class="mt-3">
                            <p class="text-muted mb-2">Cantidad</p>
                            <h5 class="mb-0 mt-2">${card.quantity}</h5>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="mt-3">
                            <p class="text-muted mb-2">Total</p>
                            <h5>${(card.product.precio * card.quantity).toFixed(2)}</h5>
                        </div>
                    </div>
                    <div class="col-6 col-md-2">
                        <div class="mt-3">
                            <p class="mb-2 br-2" style="cursor:pointer; color:red;" onclick="removeItem(${card.product.id})">Eliminar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
    ).join("");
    cardsSection.innerHTML = list;
    btnClearCart.style.display = cards.length > 0 ? "block" : "none"; // Muestra o esconde el botón de limpiar carrito
}

// Función para calcular y mostrar el total del carrito
function total(cards) {
    let totalAmount = cards.length > 0
        ? cards.reduce((acc, item) => acc + (item.product.precio) * item.quantity, 0)
        : 0;
    cartTotal.innerText = "$" + totalAmount.toFixed(2);
}

// Función para eliminar un producto del carrito
function removeItem(id) {
    let cards = JSON.parse(localStorage.getItem("cart")) || [];
    let newCards = cards.filter(card => card.product.id !== id); // Filtra el producto a eliminar
    localStorage.setItem("cart", JSON.stringify(newCards)); // Actualiza el localStorage
    getCart(newCards); // Vuelve a mostrar el carrito actualizado
    total(newCards); // Actualiza el total

    // Calcula la cantidad total de productos y actualiza en el localStorage y en el DOM
    let totalQuantity = newCards.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem("quantity", totalQuantity);
    quantity.innerText = totalQuantity;
}

// Función para vaciar el carrito
function cleanCart() {
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("quantity", "0");
    Toastify({
        text: "Carrito vaciado con éxito",
        style: {
          background: "red",
        },
        offset: {
          y: 30
        },
    }).showToast();
    getCart([]);
    total([]);

    quantity.innerText = "0"; // Actualiza la cantidad mostrada a 0
    btnClearCart.style.display = "none"; // Oculta el botón de limpiar carrito
}

// Llama a getCart y total para cargar el carrito inicial al abrir la página
getCart(JSON.parse(localStorage.getItem("cart")) || []);
total(JSON.parse(localStorage.getItem("cart")) || []);

function checkOut() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const quantity = parseInt(localStorage.getItem("quantity")) || 0;

    if (quantity === 0) {
        // Validación si el carrito está vacío
        Toastify({
            text: "Error! Al parecer no tiene productos en el carrito...",
            style: {
                background: "red",
            },
            offset: {
                y: 10,
            },
        }).showToast();
        return;
    }

    Swal.fire({
        text: "¿Estás seguro/a de querer realizar la compra?",
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "red",
    }).then((result) => {
        if (result.isConfirmed) {
            const user = localStorage.getItem("email");
            if (!user) {
                // Validar que el usuario exista en localStorage
                Toastify({
                    text: "Error! No se encontró un usuario válido.",
                    style: {
                        background: "red",
                    },
                    offset: {
                        y: 10,
                    },
                }).showToast();
                return;
            }

            const datos = {
                user,
                cart,
                total: cart.reduce((acc, item) => acc + item.product.precio * item.quantity, 0),
            };

            // Enviar datos al servidor
            fetch("https://673cc12496b8dcd5f3fb7635.mockapi.io/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos),
            })
                .then((response) => {
                    // Validar que la respuesta sea exitosa
                    if (!response.ok) {
                        throw new Error(`Error en el servidor: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then((order) => {
                    // Mostrar confirmación de la orden
                    Toastify({
                        text: `Gracias por su compra ${order.user}. Su orden es la número ${order.id}`,
                        style: {
                            background: "green",
                        },
                        offset: {
                            y: 250,
                        },
                    }).showToast();

                    cleanCart(); // Vaciar el carrito después de completar la compra
                })
                .catch((error) => {
                    // Capturar errores de red o del servidor
                    Toastify({
                        text: "Hubo un error al procesar su compra. Inténtelo más tarde.",
                        style: {
                            background: "red",
                        },
                        offset: {
                            y: 250,
                        },
                    }).showToast();
                });
        }
    });
}