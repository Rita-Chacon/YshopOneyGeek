import { productoServices } from "../services/product-services.js";

const formAdd = document.querySelector("[data-form-add]");

formAdd.addEventListener("submit", async (event) => {
    event.preventDefault();

    const url = document.querySelector("#add-url");
    const categoria = document.querySelector("#select-categoria").value;
    const nombre = document.querySelector("#add-nombre").value;
    const precioadd = document.querySelector("#add-precio").value;
    const descripcion = document.querySelector("#add-descripcion").value;
    
    let id = getUUID();
    let urlFile;
    let precio = parseInt(precioadd);
    console.log(url.value);
    
    if(categoria == "cosmeticos"){
        if(!url.value){
            urlFile = `assets/img/productos/no-foto.jpg`;
        }else{
            urlFile = `assets/img/productos/cosmeticos/${url.files[0].name}`;
        }
    }else if(categoria == "skinscare"){
        if(!url.value){
            urlFile = `assets/img/productos/no-foto.jpg`;
        }else{
        urlFile = `assets/img/productos/skinscare/${url.files[0].name}`;
        }
    }
    

    try {

        await productoServices.crearNuevoProducto(id, urlFile, categoria, nombre, precio, descripcion);
        window.location.replace("../products.html");

    } catch (error) {

        console.error(error);
        // window.location.href = "error.html";

    }
  
});

function getUUID(){
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    })
}
