import { productoServices } from "../services/product-services.js";

const crearCatalogoskinscare = (id, url, categoria, nombre, precio, descripcion) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("skinscare__card");

    const contenido = ` <button class="skinscare__btn">
                            <span class="material-symbols-outlined">shopping_cart</span>   
                        </button>
                        <img src="${url}" alt="" class="skinscare__img">
                        <div class="skinscare__container__data">
                            <label for="" class="skinscare__data__name">${nombre}</label>
                            <h4 class="skinscare__data__price">$${precio}</h4>
                            <button href="../watch-product.html?id=${id}" class="skinscare__btn__watch" id="btn${id}">Ver Producto</button>
                        </div>`;

    tarjeta.innerHTML = contenido;

    let btnWatch = tarjeta.querySelector(".skinscare__btn__watch");

    btnWatch.addEventListener("click", async () => {
        window.location.href = `watch-product.html?id=${id}`;
    });

    return tarjeta;
}

const catalogoskinscare = document.querySelector("[data-skincare-catalogue]");

productoServices.listaskinscare().then((data) => {
    data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
        const nuevaskincare = crearCatalogoskinscare(id, url, categoria, nombre, precio, descripcion);
        catalogoskinscare.appendChild(nuevaskincare);
    });
});