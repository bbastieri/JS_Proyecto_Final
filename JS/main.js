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

/*  */
const productosEnStock = [producto1, producto2, producto3, producto4, producto5, producto6]

/* AGREGAR PRODUCTOS */
function agregarAlCarrito (productosEnStock){
    let agregoAlCarrito;
    do {
    const elegirProducto = parseInt (prompt ("Ingresá código para agregar al carrito: 1) Top Olimpia, 2) Corpiño Heavy Metal, 3) Bombi Heavy Metal, 4) Portaligas Rebel, 5) Body Cherry Bomb, 6) Medias Ying Yang"));
    console.log (elegirProducto);
    agregoAlCarrito = productosEnStock.find(id => id.ident === agregoAlCarrito);  
    carritoCompras.push(productosEnStock);
    console.log(carritoCompras);  
    } while (agregoAlCarrito === undefined)
    return agregoAlCarrito    
}

const agregoAlCarrito = agregarAlCarrito (productosEnStock);
console.log (carritoCompras);

/* PRODUCTOS AGREGADOS */ 

/* agregarAlCarrito(producto2);
agregarAlCarrito(producto3);
agregarAlCarrito(producto5);
agregarAlCarrito(producto6); */

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

//* MEDIOS DE PAGO */ 
const mediosDePago = [
    {ident: 1, medio: "MercadoPago", descuento: 0},
    {ident: 2, medio: "Transferencia Bancaria", descuento: 0.1},
    {ident: 3, medio: "Depósito Bancario", descuento: 0.1},  
    ]

/* ELEGIR MEDIO DE PAGO */
function elegirMedioDePago (){
    let medioDePago; 
    do {
    const elegirMedio = parseInt (prompt("Para elegir cómo pagar, debés ingresar 1 por MercadoPago, 2 para Transferencia y 3 para depósito!"));
    console.log (elegirMedio);
    medioDePago = mediosDePago.find(medio => medio.ident === elegirMedio);
    } while (medioDePago === undefined)
      return medioDePago
}

const medioDePago = elegirMedioDePago ();
console.log(medioDePago);


/* Para próximas entregas:
   - Opción de elegir talles
   - Verificar stock
   - Buscador
   - Calculadora de descuento
   */






