// Shopping Cart Development










    // Stating the inital variables that I'm so far guessing I'll use.
let productName = "";
let amount = 0;
let unit = 0;
let price = 0;

function productList() {

    let option;
    let option1;
    let option2;
    let option3;
    let option4;
    let option5;
    let option6;

    do {
        option = parseInt(prompt("Seleccione la lista que desea ver.\n1 - Cuidado Facial\n2 - Higiene Facial\n3 - Cuidado Capilar\n4 - Cuidado Corporal\n5 - Terapeuticos\n6 - Eco Acesorios"))
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
    }while (option !==6);

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
 push
}


