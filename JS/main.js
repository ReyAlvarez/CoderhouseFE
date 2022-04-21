let cartList = [];
let itemCounter = 0;

const contenedor = document.getElementById('productContainer');
const modal = document.getElementById('cartContent');



// MOSTRAR productS EN PANTALLA: Recorro el array y por cada objeto pinto la card dentro del main html.
facialCare.forEach(product => {
    //Creo el elemento div para la card.
    const div = document.createElement('div');
    // Le asigno una clase 'product'
    div.classList.add('product');
    // inserto codigo html dentro de ese elemento div.
    div.innerHTML = `
    <div class="prod-image">
        <img src="${product.img}" alt="imagen de ${product.productName}">
    </div>
    <div class="prod-details">
        <span>Popular</span>
        <h1>${product.productName}</h1>
        <p>${product.amount}</p>
        <p>${product.unit}</p>
        <p>${product.productDescription}</p>
        <h4><i class="fas fa-dollar-sign">${product.price}</i></h4>
        <div>
            <button id="agregar${product.id}" class="btn-agregar">Agregar al Carrito</button>
        </div>
    </div>
    `
    // asigno el div que cree como hijo del elemento 'contenedor' (contProducts).
    contenedor.appendChild(div);

    // Creo un evento para cada boton Agregar al Carrito.
    const btnAgregar = document.getElementById(`agregar${product.id}`);
    btnAgregar.addEventListener('click', () => {
        // llamo a la función agregarAlCarrito.
        agregarAlCarrito(product.id)
    });
});



// MOSTRAR Y OCULTAR EL MODAL:
const modalBtn = document.getElementById('open');
const modalWindow = document.getElementById('modal_container');

modalBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('modal-show'); // toggle intercambia entre clases.
});



//DECLARACION DE FUNCIONES.

// Creo una función agregarAlCarrito que busca el product por su id y lo agrega al array del carrito.
const agregarAlCarrito = (id) => {
    // Recorre el array y trae el elemento que tenga un id que coincida con el id del product seleccionado.
    let item = listaproducts.find((product) => product.id === id);
    // Si el elemento existe, solo cambia su cantidad sino agrega uno nuevo.
    if (facialCare.some((product) => product.id === item.id)) {
        item.cantidad += 1;
        actualizarCarrito();
    } else {
        // Agrega el item encontrado al array del carrito y sumo 1 a la cantidad del product.
        facialCare.push(item);
        item.cantidad += 1;
        // Muestro el item en el modal.
        mostrarEnCarrito();
    };
    // Muestro la cantidad de products.
    contadorCarrito();
};


// Creo una Funcion para mostrar los items que existen en el array del carrito dentro del modal.
const mostrarEnCarrito = () => {
    // Borro el modal para evitar duplicados.
    modal.innerHTML = ``;
    // Recorro el array facialCare y pinto cada elemento.
    facialCare.forEach((product) => {
        const div = document.createElement('div');
        div.className = ('item-carrito');
        div.setAttribute("id", `item${product.id}`); // setAttribute(type, value)
        div.innerHTML = `
                    <div class="img-item">
                        <img src="${product.imagen}">
                    </div>
                    <div class="desc-item">
                        <p>${product.nombre}</p>
                        <p>Precio: <i class="fas fa-dollar-sign">${product.precio}</i></p>
                        <p>Cantidad: <span id="cantidad">${product.cantidad}</span></p>
                    </div>
                    <div class="btn-item">
                        <button id= "btn-eliminar${product.id}" class="btn-eliminar"><i class="far fa-minus-square"></i></button>
                    </div>
                `;

        contenidoCarrito.appendChild(div);
        console.log(div);

        // Le asigno un evento al boton eliminar de cada elemento.
        const btneliminar = document.getElementById(`btn-eliminar${product.id}`);
        btneliminar.addEventListener('click', () => {
            console.log('Ingreso a la funcion eliminar');
            eliminarDelCarrito(product.id);
        });
        console.log(facialCare.length - 1);
    });
};


// Creo una función eliminarDelCarrito que busca el product por su id y lo elimina del array del carrito.
const eliminarDelCarrito = (id) => {
    let item = facialCare.find((product) => product.id === id);
    let indiceDeItem = facialCare.indexOf(item);
    // Si el product tiene una cantidad mayor a 1 solo se resta -1 en su cantidad.
    if (item.cantidad > 1) {
        // resto -1 a la cantidad.
        item.cantidad -= 1;
        actualizarCarrito();
    } else {
        // reinicio la cantidad a 0 y elimino el item total indicado en el array del carrito.
        item.cantidad = 0;
        facialCare.splice(indiceDeItem, 1);
        const itemHtml = document.getElementById(`item${id}`);
        itemHtml.remove();
        actualizarCarrito();
    };
    // Muestro la cantidad de products.
    contadorCarrito();
};


// Creo una funcion que actualiza el carrito de ser necesario.
const actualizarCarrito = () => {
    modal.innerHTML = ``;
    facialCare.forEach((product) => {
        mostrarEnCarrito()
    });
};


// Creo una funcion que cuenta la cantidad de items agregados al carrito. ¡¡¡TODAVIA NO FUNCIONA!!!
const contadorCarrito = () => {
    const contadorItems = document.getElementById('contador');
    //Recorro el array del carrito y sumo todas las cantidades.
    contador = facialCare.reduce((acc, el) => acc + el.cantidad, 0);
    contadorItems.innerText = contador;
};