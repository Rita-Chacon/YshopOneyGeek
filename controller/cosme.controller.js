import { productoServices } from "../services/product-services.js";

const crearCatalogocosmeticos = (id, url, categoria, nombre, precio, descripcion) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("cosmeticos__card")

    const contenido = `<button class="cosmeticos__btn">
                            <span class="material-symbols-outlined">shopping_cart</span>   
                        </button>
                        <img src="${url}" alt="" class="cosmeticos__img">
                        <div class="cosmeticos__container__data">
                            <label for="" class="cosmeticos__data__name">${nombre}</label>
                            <h4 class="cosmeticos__data__price">$${precio}</h4>
                            <button href="../watch-product.html?id=${id}" class="cosmeticos__btn__watch" id="btn${id}">Ver Producto</button>
                        </div>`;

    tarjeta.innerHTML = contenido;

    let btnWatch = tarjeta.querySelector(".cosmeticos__btn__watch");

    btnWatch.addEventListener("click", async () => {
        window.location.href = `watch-product.html?id=${id}`;
    });

    return tarjeta;
}

const catalogocosmeticos = document.querySelector("[data-cosme-catalogue]");

productoServices.listacosmeticos().then((data) => {
    data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
        const nuevacosmeticos = crearCatalogocosmeticos(id, url, categoria, nombre, precio, descripcion);
        catalogocosmeticos.appendChild(nuevacosmeticos);
    });
});