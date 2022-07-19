const carritoCompras = []

function agregarAlCarrito (producto){
    carritoCompras.push(producto)
    console.log(carritoCompras)
}

agregarAlCarrito({id:1, nombre:"Top Olimpia", precio:3000});
agregarAlCarrito({id:2, nombre:"Corpiño Heavy Metal", precio:2500})
agregarAlCarrito({id:3, nombre:"Bombi Heavy Metal", precio:1700})
agregarAlCarrito({id:4, nombre:"Portaligas Rebel", precio:2000})
agregarAlCarrito({id:5, nombre:"Body Cherry Bomb", precio:3500})
agregarAlCarrito({id:6, nombre:"Medias Ying Yang", precio:800})

function borrarDelCarrito (numeroId){
    const productoAEliminar = carritoCompras.findIndex((producto) => producto.id === numeroId)
    if (productoAEliminar !== -1){
        carritoCompras.splice (productoAEliminar,1);
    }
    console.log (carritoCompras)
}

borrarDelCarrito(5);


