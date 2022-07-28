/* ARRAY */
const carritoCompras = []

/* STOCK */
const productosEnStock = [
    {id:1, nombre:"Top Olimpia", precio:3000},
    {id:2, nombre:"Corpiño Heavy Metal", precio:2500},
    {id:3, nombre:"Heavy Metal", precio:1700},
    {id:4, nombre:"Portaligas Rebel", precio:2000},
    {id:5, nombre:"Body Cherry Bomb", precio:3500},
    {id:6, nombre:"Medias Ying Yang", precio:800},
];

/* CARDS */
let cards= "";

productosEnStock.forEach ((producto) => {
    cards+= "<div class='card d-flex'><h2>"+producto.nombre+"</h2><button>Agregar al carrito</button></div>"
});

/* document.write(cards); */
document.getElementById("cardsProductos").innerHTML = cards;



/* AGREGAR PRODUCTOS */
function agregarAlCarrito (){
    let agregoAlCarrito;
    do {
    const elegirProducto = parseInt (prompt ("Ingresá código para agregar al carrito: 1) Top Olimpia, 2) Corpiño Heavy Metal, 3) Bombi Heavy Metal, 4) Portaligas Rebel, 5) Body Cherry Bomb, 6) Medias Ying Yang"));
    console.log (elegirProducto);
    agregoAlCarrito = productosEnStock.find(producto => producto.id === elegirProducto); 
    console.log ("El producto es: ", agregoAlCarrito);
    carritoCompras.push(agregoAlCarrito);
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






