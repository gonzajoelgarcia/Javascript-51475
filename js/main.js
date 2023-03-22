//! productosarray

const productos = [
  //! SUDADERAS
  {
    id: "sudadera-01",
    titulo: "Sudadera LA",
    imagen: "../img/sudadera-01.jpg",
    categoria: {
      nombre: "Sudaderas",
      id: "sudaderas",
    },
    precio: 3960,
  },
  {
    id: "sudadera-02",
    titulo: "Sudadera Positive",
    imagen: "../img/sudadera-02.jpg",
    categoria: {
      nombre: "Sudaderas",
      id: "sudaderas",
    },
    precio: 3520,
  },
  {
    id: "sudadera-03",
    titulo: "Sudadera Tipografica",
    imagen: "../img/sudadera-03.jpg",
    categoria: {
      nombre: "Sudaderas",
      id: "sudaderas",
    },
    precio: 3520,
  },
  {
    id: "sudadera-04",
    titulo: "Sudadera Brooklyn",
    imagen: "../img/sudadera-04.jpg",
    categoria: {
      nombre: "Sudaderas",
      id: "sudaderas",
    },
    precio: 4620,
  },
  //! CAMISETAS
  {
    id: "camiseta-01",
    titulo: "Camiseta CHANGE",
    imagen: "../img/camiseta-01.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 2860,
  },
  {
    id: "camiseta-02",
    titulo: "Camiseta Joystick",
    imagen: "../img/camiseta-02.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 2640,
  },
  {
    id: "camiseta-03",
    titulo: "Camiseta GROUND",
    imagen: "../img/camiseta-03.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 2640,
  },
  {
    id: "camiseta-04",
    titulo: "Camiseta Palms",
    imagen: "../img/camiseta-04.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 3300,
  },
  //! PANTALONES
  {
    id: "pantalones-01",
    titulo: "Pantalones Blue",
    imagen: "../img/pantalones-01.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 7920,
  },
  {
    id: "pantalones-02",
    titulo: "Pantalones JEAN",
    imagen: "../img/pantalones-02.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 8360,
  },
  {
    id: "pantalones-03",
    titulo: "Pantalones Yellow",
    imagen: "../img/pantalones-03.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 8360,
  },
  {
    id: "pantalones-04",
    titulo: "Pantalones 0DD",
    imagen: "../img/pantalones-04.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 7700,
  },
];

//! DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";
  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
        `;

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;
      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );
  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }
  actualizarNumerito();

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}
