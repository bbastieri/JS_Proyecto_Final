/* ARRAY */
const carritoCompras = []

/* CONSTRUCTOR */
class producto {
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre= nombre;
        this.precio= precio;
    }    
}

/* OBJETOS */
const producto1 = new producto (1, "Top Olimpia", 3000)
const producto2 = new producto (2, "Corpiño Heavy Metal", 2500)
const producto3 = new producto (3, "Bombi Heavy Metal", 1700)
const producto4 = new producto (4, "Portaligas Rebel", 2000)
const producto5 = new producto (5, "Body Cherry Bomb", 3500)
const producto6 = new producto (6, "Medias Ying Yang", 800)

/* AGREGAR PRODUCTOS */
function agregarAlCarrito (producto){
    carritoCompras.push(producto)
    console.log(carritoCompras)
}
/* PRODUCTOS AGREGADOS */
agregarAlCarrito(producto2);
agregarAlCarrito(producto3);
agregarAlCarrito(producto5);
agregarAlCarrito(producto6);

/* BORRAR PRODUCTOS */
function borrarDelCarrito (numeroId){
    const productoAEliminar = carritoCompras.findIndex((producto) => producto.id === numeroId)
    if (productoAEliminar !== -1){
        carritoCompras.splice (productoAEliminar,1);
    }
    console.log (carritoCompras)
}
/* PRODUCTOS ELIMINADOS */
borrarDelCarrito(5);

/* SUMAR PRECIOS */
const totalCarrito = carritoCompras.reduce ((acumulador,item) => acumulador + item.precio, 0)
console.log (totalCarrito)



