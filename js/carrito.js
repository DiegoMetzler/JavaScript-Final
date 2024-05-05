let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const carritoContenedor = document.querySelector("#carrito-pagina");

if (carrito.length === 0) {
    carritoContenedor.innerHTML = "<p class='no-hay-productos'>No hay productos seleccionados</p>";
} else {
    carrito.forEach((producto) => {
        let div = document.createElement("div");
        div.innerHTML = `
            Título: ${producto.titulo}
            Precio: ${producto.precio}
        `;
        carritoContenedor.append(div);
    });

    let finalizarCompraBtn = document.createElement("button");
    finalizarCompraBtn.innerText = "Finalizar Compra";
    finalizarCompraBtn.addEventListener("click", () => {
        alert("Compra finalizada. Gracias!");
    });

    carritoContenedor.append(finalizarCompraBtn);
}

