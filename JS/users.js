// user constructor  -   no se donde esta el error acá
class User  {
    constructor (id, pass){
    this.username =  id;
    this.password = pass;
    this.cartList = [];
    this.subtotal = 0;
}
}
console.log(User)
// Product Creation

class Product {
    constructor (productName, productDescription, unit, price) {
    this.productName = productName;
    this.productDescription = productDescription;
    this.unit = unit;
    this.price = price;
}
}

// User creation script (Stolen i must admit)

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
    };

}while (newUserName == "" || newUserName == null);

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

alert("Usuarix Registradx con exito\n" + "Usuarix: " + newProfile.id + "\nPassword: " + newPassword.pass + "\nRecomendacion anotalos para no olvidarlos :)");

console.log(newUserName);
console.log(newPassword);
console.log(newProfile);
