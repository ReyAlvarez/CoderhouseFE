// el primer alert es para probar que el JS esta linkeado correctamente
// alert("Bienvenidx a GEA BIOCOSMETICA un sitio donde encontrarás: Cursos, productos y materia prima para el cuidado de tu piel");


// Desafio complementario  N1
// let validUserproductName = "rey"

// let userproductName = prompt("Ingrese su usuario.")
//     while (userproductName !="") {
//     if (userproductName === validUserproductName) {
//         alert("Hola" + " " + userproductName +" bienvenidx a la plataforma! ");
//         break;
//         }
//         else {alert("Usuario registrado requerido, reingrese su usuario.")
//         userproductName = prompt("Ingrese su usuario.");
//         }

//     }

//Desafio Entregable N1

// let total = 0;
// let precio = 0;
// let otroCurso = false;

// function agregarAlCarrito() {

//     do {

//         let curso = prompt("Queres hacer un curso con nosotras de Shampoo Solido y acondicionadores, curso cremas o completo? 'Escribí: Shampoo, Cremas, Brumas o Completo'");
//         let cantidad = parseInt(prompt("Cuantos cursos queres hacer, podes obsequiar alguno", 0));
        
//         switch(curso){
//             case "Shampoo":
//                 precio = 3000;
//                 break;
//             case "Cremas":
//                 precio = 3000;
//                 break;
//             case "Brumas":
//                 precio = 2000;
//                 break;
//             case "Completo":
//                 precio = 6000;
//                 break;

//             default:
//                 alert("Algo no quedo claro...");

//                 precio = 0;
//                 cantidad = 0;
//         }
//         total = total + precio * cantidad;
//     }
//         while (otroCurso);
//        console.log(total);

// }

// agregarAlCarrito();


// // Menu para Sitio de Cosmetica Natural
// alert("Hola Bienvenidx")
// do {
//     option = parseInt(prompt("1 - Quiero ir al sitio Principal\n2 - Llevame al sitio de compras.\n3 - Quiero hacer un curso.\n4 - Necesito contactarme con ustedes.\5 - Salir."));

//     switch (option) {
//     case 1: string.link("https://reyalvarez.github.io/CoderhouseFE/");
//     break;
//     case 2: string.link("https://geabiocosmetica.com");
//     break;
//     case 3: prompt("Esta sección esta en construcción...");
//     break;
//     case 4: string.link("https://wa.me/542236242912");
//     break;
//     case 5: alert("Hasta la proxima!");
//     break;
// }
// } while (option !==5);


// Shopping Cart Development

// Arrays of itmes on the store divided by type of products

const facialCare = [
    {id:1, productName:"Solucion micelar", productDescription: "Limpia, tonifica e hidrata. Las micelas atrapan como un imán las impurezas, células muertas, sebo y restos de maquillaje sin irritar. Con aceite de ricino y manzanilla. Colocar en un algodón y pasar por el rostro. No necesita enjuague. *Agitar antes de usar", amount: 125, unit: "Ml", price: 610},
    {id:2, productName:"Tónico calmante", productDescription: "Nuestro paso 2 en la rutina facial ✨🙌 Infaltable para regular el pH y así restablecer la acidez de la piel & eliminar los restos de grasa o bacterias que pueden haber quedado luego incluso de la limpieza. El tónico mejora la textura, aumenta la irrigación sanguínea provocando la revitalización de los tejidos, aporta luminosidad y refresca nuestro rostro. Este en especial tiene agua de rosas, hidrolato orgánico de lavanda y tilo, por lo cual nos brinda también una sensación de alivio y frescura con unas notas de amor y dulzura para seguir el día con las emociones renovadas. Presentación por 100ml", amount: 100, unit: "Ml", price: 500},
    {id:3, productName:"Jabones de coco", amount: 80, unit: "Gr", price: 230},
    {id:4, productName:"Jabón detox", amount: 80, unit: "Gr", price: 200}
];

const facialHygiene = [
    {id:1, productName:"Balsamo labial", productDescription: "Repara, hidrata y calma los labios resecos y agrietados. Con manteca de cacao, karate, aceite de almendras, aceite de coco y pigmento natural rojizo que realza el brillo natural de los labios.", amount: 15, unit: "Gr", price: 335},
    {id:2, productName:"Roll on tensor", productDescription: "Serum hidratante y anti age. Una sinergia de activos que hidratan profundamente la piel, reduciendo líneas de expresión y arrugas. El aplicador roll on permite masajear aquellas zonas que más lo necesitan (contorno de ojos y labios, frente, etc) logrando un efecto lifting. Compuesto por: Ácido Hialurónico: pertenece al grupo de los glicosaminoglicanos. Forma parte de la sustancia fundamental de la dermis. Está comprometido con la retención de H2O que llena el espacio entre las células y fibras de colágeno y elastina. En forma tópica, produce un film viscoelástico sobre la piel que mejora la retención de humedad e incrementa su nivel hídrico. Retiene humedad en forma de esponja molecular. Aceite de Argán: conocido como \"oro liquido\" se obtiene mediante la presión de semillas maduras de la baya de este árbol. Se utiliza para mantener hidratada y suave la piel. Debido a la gran cantidad y diversidad de ácidos grasos y vitamina E, este aceite es perfecto para cuidar la piel de forma natural. Se absorbe rápidamente y no es pegajoso tiene un alto porcentaje de ácidos grasos esenciales, Omega 6 y 9. Es antioxidante. Aceite esencial de geranio: estimula la formación de células nuevas en la piel ayudando en la regeneración del tejido, suavizando arrugas y líneas de expresión. Vitamina E: potente antioxidante, nutritivo. Presentación en envase de vidrio de 10cc, retornable y deducible de tu próxima compra!", amount: 10, unit: "Ml", price: 500},
    {id:3, productName:"Serum bifasico", productDescription: "Compuesto por aceite orgánico de Jojoba, hidrolato orgánico de Lavanda, hidroglicerinado de Hibiscus, Lavanda & hongos Reishi y aceite esencial de Azahar Adaptogeno se adapta a todas las pieles brindandole lo que está precisando en ese momento, equilibrio, inmunidad y descongestión. Antioxidante, hidratante & desinflamatorio. Tiene un potente efecto anti-envejecimiento gracias a su contenido en polisacaridos y antioxidantes que combaten los efectos nocivos de los radicales libres en las celulas. Aporta vitamina E & nutrientes esenciales para el buen funcionamiento de está barrera cutánea. Presentacion en envase de vidrio reutilizable de 30cc.", amount: 30, unit: "Ml", price: 720},
    {id:4, productName:"HidroBase", amount: 30, unit: "Ml", price: 640},
    {id:5, productName:"Protector solar facial", productDescription: "¿SABÍAS QUE LOS DERMATOLOGOS RECOMIENDAN USAR PROTECTOR SOLAR FACIAL TODO EL AÑO? HAYA SOL O ESTE NUBLADO? Nosotras también, pero queremos que lo hagas de manera natural y cuidando al medioambiente por eso creamos emulsión liviana con protección solar alta (45-50). Vegana & libre de parabenos 🐰🐭 Con extracto de URUCUM, agua de ROSAS, aceite de pepitas de UVA & aceite de SESAMO 🌷🌴🌾 Protege, hidrata & suaviza el rostro. Previene el envejecimiento prematuro. No obstruye los poros ni deja sensación grasa. Apto para todo tipo de piel ✨ Envase de 125cc reutilizable ♻️", amount: 125, unit: "Ml", price: 710},
    {id:6, productName:"Eterna(Anti age)", productDescription: "Emulsión facial hidratante profunda y delicada.Ideal para pieles secas o con signos de envejecimiento. Reduce las líneas de expresión, regenera, reafirma. Suaviza y da luminosidad. Con un exquisito aroma a jazmín, que levanta él animo y expande la belleza desde el interior. Rosa mosqueta para atenuar manchas y aportar ácidos esenciales como el omega 6, omega 3, linoléico y vitamina A. Y todas las propiedades nutritivas e hidratantes del argán, el coco y la manteca de karité. •Presentación en 50cc •Envase de vidrio reutilizable", amount: 50, unit: "Gr", price: 670},
    {id:7, productName:"Equilibra(Piel grasa)", productDescription: "Compuesta por: Aceite de jojoba premium, extraido de arboles cuidados y respetados en una finca nacional en la provincia de La Rioja. Este aceite penetra muy bien en la piel, es antioxidante y ayuda a prevenir arrugar y neutralizar los radicales libres. También se recomienda como remedio para el acne y para tratar las pieles grasas. Extracto botanico de Aloe Vera, con sus multiples y favorables propiedades para la piel, regenerante y cicatrizante entre otras. Cera vegetal que actua reforzando la proteccion de la barrera cutanea y la hace apta para veganxs. Y aceite esencial de tea tree que minimiza la apariencia de los poros, tiene efecto astringente y antiseptico. Si tu piel es mixta o grasa esta crema es la ideal para vos! Presentacion en envase de vidrio de 50cc. Retornable. Animate a probarla y contanos tu experiencia!!", amount: 50, unit: "Gr", price: 670},
    {id:8, productName:"Calma (Piel sensible)", amount: 50, unit: "Gr", price: 670}
];

const hairCare = [
    {id:1, productName:"Shampoo hidratante",  amount: 80, unit: "Gr", price: 500},
    {id:2, productName:"Shampoo fortalecedor", amount: 80, unit: "Gr", price: 500},
    {id:3, productName:"Shampoo reparador", amount: 80, unit: "Gr", price: 500},
    {id:4, productName:"Acondicionador solido", amount: 60, unit: "Gr", price: 500},
    {id:5, productName:"Reparador de puntas", amount: 30, unit: "Ml", price: 600}
];

const corporalCare = [
    {id:1, productName:"Desodorante lata", amount: 50, unit: "Gr", price: 400},
    {id:2, productName:"Pasta dental solida", amount: 30, unit: "Gr", price: 260},
    {id:3, productName:"Emulsion corporal", amount: 200, unit: "Gr", price: 700},
    {id:4, productName:"Protector Solar", amount: 200, unit: "Gr", price: 800},
    {id:5, productName:"Repelente spray", amount: 100, unit: "Ml", price: 400},
    {id:6, productName:"Elixir intimo", amount: 30, unit: "Ml", price: 720},
    {id:7, productName:"Blend para pestañas y cejas", amount: 7, unit: "Ml", price: 650}
];

const therapeutic = [
    {id:1, productName:"Sagrada", amount: 50, unit: "Gr", price: 620},
    {id:2, productName:"Amazonica", amount: 50, unit: "Gr", price: 620},
    {id:3, productName:"Ungüento respirar", amount: 50, unit: "Gr", price: 450},
    {id:4, productName:"Ungüento suavidad", amount: 50, unit: "Gr", price: 450},
    {id:5, productName:"Ungüento sagrado", amount: 50, unit: "Gr", price: 500},
    {id:6, productName:"Tattoo", amount: 30, unit: "Gr", price: 400},
    {id:7, productName:"Brumas auricas", amount: 100, unit: "Ml", price: 750}
];

const ecoAccesories = [
    {id:1, productName:"Jabonera madera simple", amount: 1, unit: "U", price: 450},
    {id:2, productName:"Cepillo dental de bamboo", amount: 1, unit: "U", price: 280},
    {id:3, productName:"Cepillo capilar de bamboo", amount: 1, unit: "U", price: 1050},
    {id:4, productName:"Hilo dental vegano", amount: 1, unit: "U", price: 530},
    {id:5, productName:"Toallitas de tela", amount: 50, unit: "Gr", price: 620}
];
// Console logging to check if everythigns is well written
    console.log (corporalCare);
    console.log (ecoAccesories);
    console.log (ecoAccesories,2); // no se como llamarlo para mostrar algo puntual con el console.log



    // Stating the inital variables that I'm so far guessing I'll use.
let productName = "";
let amount = 0;
let unit = 0;
let price = 0;

function addToShoppingCart() {
    alert("Hola Bienvenidx al sector de compras de Gea BioCosmetica");

    do {
    option = parseInt(prompt("Seleccione la lista que desea ver.\n1 - Cuidado Facial\n2 - Higiene Facial\n3 - Cuidado Capilar\n4 - Cuidado Corporal\n5 - Terapeuticos\n6 - Eco Acesorios"))
    switch (option) {
    case 1: facialCare;
    break;
    case 2: facialHygiene;
    break;
    case 3: hairCare;
    break;
    case 4: corporalCare;
    break;
    case 5: therapeutic;
    break;
    case 6: ecoAccesories; 
    }
}
} while (option !==6);

// Complementary work - Push -

// const userNames = ["marcela36", "alejandra19", "alejandndro.magno"];

// userNames.push("satoshi_nakamoto");

// console.log(userNames);







