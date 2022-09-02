/* CARRITO */

const productosEnCarrito =JSON.parse(localStorage.getItem("totalCarrito")) ?? [];
document.getElementById("btnCarritoTotal").innerHTML = `${productosEnCarrito.length}`;

/* FETCH .JSON */

const inicializar = async () => {
  const productos = await fetchProductos();
  generarInterfaz(productos);
  return productos;
};

const generarInterfaz = (responseFinal) => {
  crearCards(responseFinal);
  agregarProducto(responseFinal);
  borrarProducto(responseFinal);
  renderCarrito(responseFinal);
  renderTotalCarrito(responseFinal);
}

const fetchProductos = async () => {
  const response = await fetch ('../productos.json');
  const responseFinal = await response.json();
  return responseFinal
}

/* FILTRO POR CATEGORÍAS */

async function filtrarPorCategoria (categoria){
  const productos = await fetchProductos();
  const productosPorCategoria= productos.filter(producto => producto.categoria === categoria);
  generarInterfaz(productosPorCategoria);
}; 

inicializar();

/* CARDS */

function crearCards(cargarProductos){
  let cards = "";
 cargarProductos.forEach(({ id, nombre, precio, imagen }) => {
  const idBoton = `add-cart${id}`;
  const idBotonDelete = `delete-cart${id}`;
  cards += `<div>
            <img src='${imagen}' class="imagenCards">
            <h2>${nombre}</h2>
            <h4>$${precio}</h4>
            <button id="${idBoton}">Agregar</button>
            <button id="${idBotonDelete}">Eliminar</button>
            <div>`;
});
document.getElementById("cardsProductos").innerHTML = cards;
};


/* AGREGAR AL CARRITO */

function agregarProducto(cargarProductos) {
  cargarProductos.forEach((producto) => {
   const idBoton = `add-cart${producto.id}`;
   document.getElementById(idBoton).addEventListener("click", () => {
    productosEnCarrito.push(producto);
    localStorage.setItem("totalCarrito", JSON.stringify(productosEnCarrito));
    const totalCarrito = productosEnCarrito.reduce(
      (acumulador, producto) => acumulador + producto.precio, 0
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
    renderCarrito();
    renderTotalCarrito();
  });
 });
};

/* BORRAR PRODUCTOS */

function borrarProducto(cargarProductos) {
  cargarProductos.forEach((producto) => {
  const idBotonDelete = `delete-cart${producto.id}`;
  document.getElementById(idBotonDelete).addEventListener("click", () => {
    const productoAEliminar = productosEnCarrito.findIndex(
      (productos) => productos.id === producto.id
    );
    console.log(productoAEliminar + "posición producto a eliminar");
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
      renderCarrito();
      renderTotalCarrito();
  });
 });
};

/* CARRITO POPUP */

function renderCarrito() {
  let cardsPopUp = "";
  productosEnCarrito.forEach(({id, nombre, precio, imagen}) => {
    const idBotonDelete = `delete-cart${id}`;
    cardsPopUp += `<div>
              <img src='${imagen}' class="imagenCardsPopup">
              <h2>${nombre}</h2>
              <h4>$${precio}</h4>
              <button id="${idBotonDelete}">Eliminar</button>
              </div>`;                       
  });
  document.getElementById("productosAgregados").innerHTML = cardsPopUp;
};

/* TOTAL CARRITO POPUP */

let totalCarritoPopUp ="";

function renderTotalCarrito() {
  const totalCarrito = productosEnCarrito.reduce(
    (acumulador, producto) => acumulador + producto.precio, 0
    );
    totalCarritoPopUp =`<div>
                      <h2>TOTAL: </h2>  
                      <h4>$${totalCarrito}</h4>
                      </div>`;
  document.getElementById("totalCompra").innerHTML = totalCarritoPopUp;
};


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
   */