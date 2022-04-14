// INNERTEXT

let titulo = document.getElementsByClassName("titulo_gea"); // Hola Mundo!!!

// titulo.innerText = "Hola Coder!!!";

const nombreUsuario = prompt("Bienvenidx a Gea BioCosmetica: ");

titulo.innerText = "Hola " + nombreUsuario + "!!!"

alert(titulo.innerText);
//Modal

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});