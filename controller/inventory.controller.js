import { productoServices } from "../services/product-services.js";

const crearInventario = (id, url, categoria, nombre, precio, descripcion) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("inventory__card");
   
    const contenido = ` <div class="inventory__container__img">
                            <img src="${url}" alt="" class="inventory__img">
                        <div>
                        <div class="inventory__conainer__btn">
                            <button href="../edit.html?id=${id}" type="button" class="inventory__actualizar"" id="${id}">
                                <span class="material-symbols-outlined">edit</span>
                            </button> 
                            <button type="button" class="inventory__delete" id="${id}">
                                <span class="material-symbols-outlined">delete</span>
                            </button> 
                        </div>
                        <div class="inventory__container__data">
                            <label class="inventory__data__categoria" id="${categoria}">${categoria}</label>
                            <label for="" class="inventory__data__name">${nombre}</label>
                            <h4 class="inventory__data__price">${precio}</h4>
                        </div>`;

    tarjeta.innerHTML = contenido;

    let btnEliminar = tarjeta.querySelector(".inventory__delete");
    let btnActualizar = tarjeta.querySelector(".inventory__actualizar");
    let categoriaProducto = tarjeta.querySelector(".inventory__data__categoria");

    btnEliminar.addEventListener("click", async () => {
        const confirmacion = confirm("Se eliminará el producto, ¿Estas Seguro?");
        let id = btnEliminar.id;
        let idCategoria = categoriaProducto.id;
        if(confirmacion){
            try{
                const respuesta = await productoServices.eliminarProducto(id, idCategoria);
                console.log(respuesta);
            }catch(error){
                console.error(error);
            }
        }
    })

    btnActualizar.addEventListener("click", async () => {
        let id = btnActualizar.id;
        let idCategoria = categoriaProducto.id;

        try{
            window.location.href = `../edit.html?id=${id}`;
        }catch(error){
            console.error(error)
        }    
        
    })

    return tarjeta;
}

const inventario = document.querySelector("[data-inventory]");
const seleccion = document.querySelector("[data-select-inventory]");
const buscador = document.querySelector("#searcher");
const btnBuscador = document.querySelector("#btn-searcher");

function cosmeticos(){
    productoServices.listacosmeticos().then((data) => {
        data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
            const nuevacosmeticos = crearInventario(id, url, categoria, nombre, precio, descripcion);
            inventario.appendChild(nuevacosmeticos);
        });
    });
}

function skinscare(){
    productoServices.listaskinscare().then((data) => {
        data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
            const nuevaskincare = crearInventario(id, url, categoria, nombre, precio, descripcion);
            inventario.appendChild(nuevaskincare);
        });
    });
}

function cargarInventarioCompleto(){
    cosmeticos();
    skinscare();
}

cargarInventarioCompleto();

seleccion.addEventListener("change", () => {
    switch(seleccion.value){
        case "Completo":
            inventario.innerHTML = "";
            cosmeticos();
            skinscare();
            break;
        case "cosmeticos":
            inventario.innerHTML = "";
            cosmeticos();
            break;
        case "skinscare":
            inventario.innerHTML = "";
            skinscare();
            break;
    }
});

btnBuscador.addEventListener("click", async () => {
    try {
        const data =  await productoServices.buscarProducto(buscador.value);
        inventario.innerHTML = "";
        data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
                const nuevaBusqueda = crearInventario(id, url, categoria, nombre, precio, descripcion);
                inventario.appendChild(nuevaBusqueda);
        });
        buscador.value ="";
    } catch (error) {
        console.error(error);
    }
});
