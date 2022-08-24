/* CARRITO */
const productosEnCarrito =JSON.parse(localStorage.getItem("totalCarrito")) ?? [];
document.getElementById("btnCarritoTotal").innerHTML = `${productosEnCarrito.length}`;

/* FETCH .JSON */
const cargarProductos = async () => {
  const response = await fetch ('../productos.json');
  const responseFinal = await response.json();
  crearCards(responseFinal);
  agregarProducto(responseFinal);
  borrarProducto(responseFinal);
  renderCarrito(responseFinal)
};

const productosEnStock = cargarProductos();
console.log(productosEnStock);


/* CARDS */
let cards = "";

function crearCards(productosEnStock){
 productosEnStock.forEach(({ id, nombre, precio, imagen }) => {
  const idBoton = `add-cart${id}`;
  const idBotonDelete = `delete-cart${id}`;
  cards += `<div>
            <img src='${imagen}' class="imagenCards">
            <h2>${nombre}</h2>
            <h4>$${precio}</h4>
            <button id="${idBoton}">Agregar al carrito</button>
            <button id="${idBotonDelete}">Eliminar del carrito</button>
            <div>`;
});
document.getElementById("cardsProductos").innerHTML = cards;
}

/* AGREGAR AL CARRITO */

function agregarProducto(productosEnStock) {
  productosEnStock.forEach((producto) => {
   const idBoton = `add-cart${producto.id}`;
   document.getElementById(idBoton).addEventListener("click", () => {
    productosEnCarrito.push(producto);
    localStorage.setItem("totalCarrito", JSON.stringify(productosEnCarrito));
    const totalCarrito = productosEnCarrito.reduce(
      (acumulador, producto) => acumulador + producto.precio,
      0
    );
    console.log("Total $ " + totalCarrito);
    console.log(productosEnCarrito);
    document.getElementById("btnCarritoTotal").innerHTML = `${productosEnCarrito.length}`;
    Toastify({
      text: "Agregaste " + `${producto.nombre}` + " al carrito",
      duration: 3000,
      gravity: "bottom",
      style: {
        background: "rgb(228, 98, 141)",
      },
    }).showToast();
    renderCarrito(productosEnCarrito);
  });
 });
}

/* BORRAR PRODUCTOS */
function borrarProducto(productosEnStock) {
  productosEnStock.forEach((producto) => {
  const idBotonDelete = `delete-cart${producto.id}`;
  document.getElementById(idBotonDelete).addEventListener("click", () => {
    const productoAEliminar = productosEnCarrito.findIndex(
      (productos) => productos.id === producto.id
    );
    console.log(productoAEliminar + "id producto a eliminar");
    if (productoAEliminar !== -1) {
      productosEnCarrito.splice(productoAEliminar, 1);
    }
    localStorage.setItem("totalCarrito", JSON.stringify(productosEnCarrito));
    console.log(productosEnCarrito);
    document.getElementById("btnCarritoTotal").innerHTML = `${productosEnCarrito.length}`;
    Toastify({
        text: "Eliminaste " + `${producto.nombre}` + " del carrito",
        duration: 3000,
        gravity: "bottom",
        style: {
          background: "rgb(228, 98, 141)",
        },
      }).showToast();
      renderCarrito(productosEnCarrito);
  });
 });
}

/* CARRITO POPUP */
let cardsPopUp = "";
let totalCarritoPopUp ="";

function renderCarrito() {productosEnCarrito.forEach(({id, nombre, precio, imagen}) => {
    const idBotonDelete = `delete-cart${id}`;
    cardsPopUp += `<div>
              <img src='${imagen}' class="imagenCards">
              <h2>${nombre}</h2>
              <h4>$${precio}</h4>
              </div>`;             
  });
    const totalCarrito = productosEnCarrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
    );
    totalCarritoPopUp +=`<div>
                      <h2>TOTAL: </h2>  
                      <h4>$${totalCarrito}</h4>
                      </div>`
  document.getElementById("productosAgregados").innerHTML = cardsPopUp;
  document.getElementById("totalCompra").innerHTML = totalCarritoPopUp;
}





//* MEDIOS DE PAGO */
/* const mediosDePago = [
  { ident: 1, medio: "MercadoPago", descuento: 0 },
  { ident: 2, medio: "Transferencia Bancaria", descuento: 0.1 },
  { ident: 3, medio: "Depósito Bancario", descuento: 0.1 },
]; */

/* ELEGIR MEDIO DE PAGO */
/* function elegirMedioDePago() {
  let medioDePago;
  do {
    const elegirMedio = parseInt(
      prompt(
        "Para elegir cómo pagar, debés ingresar 1 por MercadoPago, 2 para Transferencia y 3 para depósito!"
      )
    );
    console.log(elegirMedio);
    medioDePago = mediosDePago.find((medio) => medio.ident === elegirMedio);
  } while (medioDePago === undefined);
  return medioDePago;
}

const medioDePago = elegirMedioDePago();
console.log(medioDePago);

function aplicarDescuento() {
  if (medioDePago > 1) {
    totalCarrito * 0.1;
  }
} */

/* let totalConDescuento = aplicarDescuento();
console.log(totalConDescuento); */

/* Para próximas entregas:
   - Opción de elegir talles
   - Buscador
   - Calculadora de descuento?
   - Agregar precio total al popUp
   */
