const inputs = document.querySelectorAll(".edit__input");
const btnEdit = document.querySelector("[data-btn-edit]");

const campoCheck = {
    // url: false,
    categoria: true,
    nombre: true,
    precio: true,
    descripcion: true,
}

const validarFormularioEdit = (e) => {

    switch (e.target.name){
        
        // Se modifican los valores para la longitud y caracteres aceptados en cada campo de Nombre, Precio y Descripción 
        case "nombre":
            let inputNombre = e.target;
            let exNombre = /^.{0,150}$/;
            if(exNombre.test(inputNombre.value) && inputNombre.value != ""){
                document.getElementById("edit-nombre").classList.remove("incorrecto");
                campoCheck.nombre = true;
            }else{
                document.getElementById("edit-nombre").classList.add("incorrecto");
                campoCheck.nombre = false;
            }
            break;
        case "precio":
            let inputPrecio = e.target;
            let exPrecio = /^[0-9]{0,10}$/;
            if(exPrecio.test(inputPrecio.value) && inputPrecio.value != ""){
                document.getElementById("edit-precio").classList.remove("incorrecto");
                campoCheck.precio = true;
            }else{
                document.getElementById("edit-precio").classList.add("incorrecto");
                campoCheck.precio = false;
            }
            break;
        case "descripcion":
            let inputMensaje = e.target;
            let exMensaje = /^.{0,300}$/;
            if(exMensaje.test(inputMensaje.value) && inputMensaje.value != ""){
                document.getElementById("edit-descripcion").classList.remove("incorrecto");
                campoCheck.descripcion = true;
            }else{
                document.getElementById("edit-descripcion").classList.add("incorrecto");
                campoCheck.descripcion = false;
            }
            break;
    }
}

//Aqui termina el bloque

const validarCategoria = () => {
    let inputCategoria = document.getElementById("select-categoria").value;
    if(inputCategoria == "cosmeticos" || inputCategoria == "skinscare"){
        document.getElementById("select-categoria").classList.remove("incorrecto");
        campoCheck.categoria = true;
    }else if(inputCategoria == "seleccionar"){
        document.getElementById("select-categoria").classList.add("incorrecto");
        campoCheck.categoria = false;
    }
}

const verificarcampoCheck = () => {
    console.log(campoCheck.categoria);
    console.log(campoCheck.nombre);
    console.log(campoCheck.precio);
    console.log(campoCheck.descripcion);

    if(campoCheck.categoria && campoCheck.nombre && campoCheck.precio && campoCheck.descripcion){
        console.log("todo bien");
        btnEdit.classList.remove("deshabilitado");
        btnEdit.disabled = false;
    }else {
        console.log("algo anda mal");
        btnEdit.classList.add("deshabilitado");
        btnEdit.disabled = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormularioEdit);
    input.addEventListener("blur", validarFormularioEdit);
    input.addEventListener("keyup", verificarcampoCheck);
    input.addEventListener("blur", verificarcampoCheck);
    input.addEventListener("keyup", validarCategoria);
    input.addEventListener("blur", validarCategoria);
});