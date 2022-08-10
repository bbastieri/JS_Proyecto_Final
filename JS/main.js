/* CARRITO */
const productosEnCarrito = localStorage.getItem("totalCarrito");
document.getElementById("btnCarritoTotal").innerHTML = productosEnCarrito;
const carritoCompras = [];

/* STOCK */
const productosEnStock = [
    {
        id:1, 
        nombre:"Top Olimpia", 
        precio:3000, 
        imagen:"./../images/tops/top_olimpia.jpg"
    },
    {
        id:2, 
        nombre:"Corpiño Heavy Metal", 
        precio:2500, 
        imagen:"./../images/corpiños/corpi_heavymetal.JPG"
    },
    {
        id:3, 
        nombre:"Bombi Heavy Metal", 
        precio:1700, imagen:"./../images/bombis/bombi_heavymetal.JPG"
    },
    {
        id:4,
        nombre:"Portaligas Rebel", 
        precio:2000, 
        imagen:"./../images/portaligas/portaligas_rebel.png"
    },
    {
        id:5, 
        nombre:"Body Cherry Bomb", 
        precio:3500, 
        imagen:"./../images/bodys/body_cherry_bomb.png"
    },
    {
        id:6, 
        nombre:"Medias Ying Yang", 
        precio:800, 
        imagen:"./../images/medias/media_yinyang_black.jpg"
    },
];


/* CARDS */
let cards= "";

productosEnStock.forEach ((producto) => {
    const idBoton=`add-cart${producto.id}` 
    cards+=`<div>
            <img src='${producto.imagen}' class="imagenCards">
            <h2>${producto.nombre}</h2>
            <h4>$${producto.precio}</h4>
            <button id="${idBoton}">Agregar al carrito</button>
            <div>`
});

document.getElementById("cardsProductos").innerHTML = cards;

productosEnStock.forEach((producto) =>{
    const idBoton=`add-cart${producto.id}`
    document.getElementById(idBoton).addEventListener('click', () => {
        carritoCompras.push(producto);
        const totalCarrito = carritoCompras.reduce ((acumulador,producto) => acumulador + producto.precio, 0);
        console.log(totalCarrito); 
        document.getElementById("btnCarritoTotal").innerHTML = carritoCompras.length + Number(productosEnCarrito);
        console.log(carritoCompras);
        localStorage.setItem("totalCarrito", carritoCompras.length);
    })
})

/* SUMAR PRECIOS */
/* function sumarCarrito (){
    const totalCarrito = carritoCompras.reduce ((acumulador,producto) => acumulador + producto.precio, 0)
    console.log (totalCarrito); 
    return (totalCarrito);
} */


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
}; 

const medioDePago = elegirMedioDePago ();
console.log(medioDePago);

function aplicarDescuento (){
    if (medioDePago > 1){
        totalCarrito * 0.1
    }
};

let totalConDescuento = aplicarDescuento ();
console.log (totalConDescuento);


/* Para próximas entregas:
   - Opción de elegir talles
   - Buscador
   - Calculadora de descuento?
   - PopUp con productos sumados al carrito y precio total
   - Botón eliminar producto en popUp 
   */






