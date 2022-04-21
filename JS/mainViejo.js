// User creation script (Stolen i must admit)

// Shopping Cart Development










// Stating the inital variables that I'm so far guessing I'll use.
let productName = "";
let productAmount = 0;
let unit = 0;
let price = 0;
let paymentMethod;
let opcionesDeInicio;
let continueShopping = false;

let cantidadProducto = 0;
let nuevoUsuario;
let nuevaContraseña;
let nuevoPerfil;



function productList() {

let option;
let option1;
let option2;
let option3;
let option4;
let option5;
let option6;

do {
    option = parseInt(prompt("Seleccione la lista que desea ver.\n1 - Cuidado Facial\n2 - Higiene Facial\n3 - Cuidado Capilar\n4 - Cuidado Corporal\n5 - Terapeuticos\n6 - Eco Acesorios\n7 - Escriba \'Salir' para salir."))
switch (option) {
case 1:
    option1 =  prompt("Que producto queres elegir? \n" + "1 - " + facialCare[0].productName + "\n" + "2- " + facialCare[1].productName  + "\n" + "3- " + facialCare[2].productName + "\n" + "4- " + facialCare[3].productName);
    switch(option1) {
        case 1: facialCare [0];
        case 2: facialCare [1];
        case 3: facialCare [2];
        case 4: facialCare [3];
}
break;
case 2:
    option2 =  prompt("Que producto queres elegir? \n" + "1 - " + facialHygiene [0].productName + "\n" + "2- " + facialHygiene [1].productName  + "\n" + "3- " + facialHygiene[2].productName + "\n" + "4- " + facialHygiene[3].productName + "\n" + "5- " + facialHygiene[4].productName + "\n" + "6- " + facialHygiene[5].productName + "\n" + "7- " + facialHygiene[6].productName + "\n" + "8- " + facialHygiene[7].productName);
    switch(option2) {
    case 1: facialHygiene [0];
    case 2: facialHygiene [1];
    case 3: facialHygiene [2];
    case 4: facialHygiene [3];
    case 5: facialHygiene [4];
    case 6: facialHygiene [5];
    case 7: facialHygiene [6];
    case 8: facialHygiene [7];
}
break;
// case 3:
//     option3 =  prompt("Que producto queres elegir? \n" + "1 - " + facialHygiene [0].productName + "\n" + "2- " + facialHygiene [1].productName  + "\n" + "3- " + facialHygiene[2].productName + "\n" + "4- " + facialHygiene[3].productName + "\n" + "5- " + facialHygiene[4].productName + "\n" + "6- " + facialHygiene[5].productName + "\n" + "7- " + facialHygiene[6].productName + "\n" + "8- " + facialHygiene[7].productName);
//     switch(option3) {
//     case 1: hairCare [0];
//     case 2: hairCare [1];
//     case 3: hairCare [2];
//     case 4: hairCare [3];
//     case 5: hairCare [4];
// }
// break;
// case 4: corporalCare("Cuidado Corporal");
// switch(corporalCare) {
//     case 1: corporalCare [0];
//     case 2: corporalCare [1];
//     case 3: corporalCare [2];
//     case 4: corporalCare [3];
//     case 5: corporalCare [4];
//     case 6: corporalCare [5];
//     case 7: corporalCare [6];
// }
// break;
// case 5: therapeutic("Terapeuticos");
// switch(therapeutic) {
//     case 1: therapeutic [0];
//     case 2: therapeutic [1];
//     case 3: therapeutic [2];
//     case 4: therapeutic [3];
//     case 5: therapeutic [4];
//     case 6: therapeutic [5];
//     case 7: therapeutic [6];
// }
// break;
// case 6: ecoAccesories("Eco Accsesorios");
// switch(sw) {
//     case 1: ecoAccesories [0];
//     case 2: ecoAccesories [1];
//     case 3: ecoAccesories [2];
//     case 4: ecoAccesories [3];
//     case 5: ecoAccesories [4];
// }
// break;
default:
    alert ("Algo mas que quieras agregar?")
}
}while (option !==9 || "Salir");

let total = 0
let freeShipping = (price >= 5000);
let paidShipping = (price <= 4999);

function shippingForfree() {
    while (total >= 5000) {
        alert("Tenes envio Gratis");
        if (total <= 4999) {
        alert("Con $5000 o mas tendrias el envio gratis :D");
        }
    }
}
}

productList();

function addToShoppingCart(){
addToShoppingCart.push
}


// Payment method Script

const seleccionDePago = () => {
    do {
        paymentMethod = parseInt(prompt('Como desea pagar?\n1- Contado en el Showroom\n2- 3 cuotas fijas (Sin Interes)\n3- Cancelar Compra'));
        switch (paymentMethod) {
            case 1:
                alert('Acercate al showroom con el Nro. de compra para abonar!');
                break;

            case 2:
                let costoEnCuotas = Math.round(nuevoPerfil.subTotal / 3); // ACA TENGO UN PROBLEMA CON OBTENER EL VALOR DEL OBJETO.PROPIEDAD...
                alert('Su pago será de 3 cuotas de $' + costoEnCuotas);
                alert('El pago a sido realizado con exito!');
                break;

            case 3:
                alert('La compra a sido cancelada\n\nGracias por utilizar Tienda Cluster Efectos 1.4.22, BYE!');
                opcionesDeInicio = 2;
                break;

            default:
                alert('Opcion Incorrecta, Intente nuevamente.');
                break;
        }

    } while (paymentMethod !== 1 && paymentMethod !== 2 && paymentMethod !== 3);
}


// Creacion de usuario
do {
  newUserName = prompt("Ingresá un nuevo nombre de Usuarix");

  switch (newUserName) {
    case "":
      alert("Error en la matrix, tenes que ingresar un nombre de Usuarix");
      break;
    case null:
      alert("Error en la matrix, tenes que ingresar un nombre de Usuarix");
      break;
    default:
      break;
  }
} while (newUserName == "" || newUserName == null);

do {
  newPassword = prompt("Ingrese una nueva contraseña");

  switch (newPassword) {
    case "":
      alert("Es necesario que ingreses una contraseña");
      break;
    case null:
      alert("Es necesario que ingreses una contraseña");
      break;
    default:
      break;
  }
} while (newPassword == "" || newPassword == null);

const newProfile = new User(newUserName, newPassword);

alert(
  "Usuarix Registradx con exito\n" +
    "Usuarix: " +
    newProfile.id +
    "\nPassword: " +
    newPassword.pass +
    "\nRecomendacion: Anotalos para no olvidarlos :)"
);

console.log(newUserName);
console.log(newPassword);
console.log(newProfile);

// INICIO Etapa de compra.
newProfile.agregarAlCarrito();
newProfilex.calcularTotal();
seleccionDePago();

// INNERTEXT

let titulo = document.getElementsByClassName("titulo_gea"); // Hola Mundo!!!

// titulo.innerText = "Hola Coder!!!";

const nombreUsuario = prompt("Bienvenidx a Gea BioCosmetica: ");

titulo.innerText = "Hola " + nombreUsuario + "!!!";

alert(titulo.innerText);

//Modal Carrito compras

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

// close.addEventListener("click", () => {
//   modal_container.classList.remove("show");
// });

  // window.onclick = function (event) {
  //   if (event.target == modal_container) {
  //     modal_container.style.display = "none";
  //   }
  // };

