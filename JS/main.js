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
  cards += `<div class="cardTest">
            <div>
            <img src='${imagen}' class="imagenCards">
            </div>
            <h2>${nombre}</h2>
            <h4>$${precio}</h4>
            <div>
            <button id="${idBoton}">Agregar</button>
            <button id="${idBotonDelete}">Eliminar</button>
            </div>
            </div>`;
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
    cardsPopUp += `<div class="cardTest">
              <div>
              <img src='${imagen}' class="imagenCardsPopup">
              </div>
              <h2>${nombre}</h2>
              <h4>$${precio}</h4>
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
    totalCarritoPopUp =`<div class="cardTest separador">
                      <h2>TOTAL: </h2>  
                      <h4>$${totalCarrito}</h4>
                      </div>`;
  document.getElementById("totalCompra").innerHTML = totalCarritoPopUp;
};
