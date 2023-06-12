const listacosmeticos = () => 
    fetch("https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/cosmeticos").then((respuesta) => respuesta.json());

const listaskinscare = () => 
    fetch("https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/skinscare").then((respuesta) => respuesta.json());

const crearNuevoProducto = (id, url, categoria, nombre, precio, descripcion) => {
    
    
    const data = {
        id,
        url,
        categoria,
        nombre,
        precio,
        descripcion
    };

    if(categoria == "cosmeticos"){
        return fetch("https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/cosmeticos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => console.log("El nuevo producto fue creado correctamente: ", json))
        .catch(err => console.log(err));
        
    }else if(categoria == "skinscare"){
        
        return fetch("https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/skinscare", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => console.log("El nuevo producto fue creado correctamente: ", json))
        .catch(err => console.log(err));
    }

}

export const eliminarProducto = async (id, categoria) => {
    
    if(categoria == "cosmeticos"){

        return await fetch(`https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/cosmeticos/${id}`, {
            method: "DELETE",
        });
        
    }else if(categoria == "skinscare"){
        
        return await fetch(`https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/skinscare/${id}`, {
            method: "DELETE",
        });

    }
}

export const actualizarProducto = async (id, url, categoria, nombre, precio, descripcion) => {
    
    if(categoria == "cosmeticos"){

        return await fetch(`https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/cosmeticos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, url, categoria, nombre, precio, descripcion}),
        })
        .then(response => response)
        .catch(error => console.log(error));
        
    }else if(categoria == "skinscare"){
        
        return await fetch(`https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/skinscare/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, url, categoria, nombre, precio, descripcion}),
        })
        .then(response => console.log(response.json))
        .catch(error => console.log(error));
        
    }
}

export const buscarProducto = async (buscar) => {
    try {
        const cosmeticosResponse = await fetch(`https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/cosmeticos?nombre_like=${buscar}`);
        const skinscareResponse = await fetch(`https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/skinscare?nombre_like=${buscar}`);
        
        const [cosmeticosProductos, skinscareProductos] = await Promise.all([cosmeticosResponse, skinscareResponse].map(resp => resp.json()));
    
        const productos = [...cosmeticosProductos, ...skinscareProductos];
        
        if (productos.length === 0) {
          throw new Error('Producto no encontrado');
        }
    
        return productos;
    
      } catch (error) {
        console.error(error);
      }
}

export const detallesProducto = async (id) =>{
    try{

        const cosmeticosResponse = fetch(`https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/cosmeticos/${id}`);
        const skinscareResponse = fetch(`https://my-json-server.typicode.com/Rita-Chacon/YshopOneyGeek/skinscare/${id}`);

        const [cosmeticosProducto, skinscareProducto] = await Promise.all([cosmeticosResponse, skinscareResponse]);
        
        if (cosmeticosProducto.status === 404 && skinscareProducto.status === 404) {
        throw new Error('Producto no encontrado');
        }

        let producto;
        
        if (cosmeticosProducto.status === 200) {
        producto = await cosmeticosProducto.json();
        } else {
        producto = await skinscareProducto.json();
        }

        return producto;

    } catch (error) {
        console.error(error);
    }
}


  
export const productoServices = {
    listacosmeticos,
    listaskinscare,
    crearNuevoProducto,
    eliminarProducto,
    actualizarProducto,
    detallesProducto,
    buscarProducto,
}

