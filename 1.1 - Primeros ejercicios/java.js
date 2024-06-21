// 1
// const obtenerNombreCompleto = () => "Xvi Campos";
// console.log( obtenerNombreCompleto());

// // 2
// function Funcion1 ( variable1 = true){
//     console.log(variable1);
// }

// let hola = false;
// Funcion1();
// Funcion1(hola);

// //3
// function infinito (...valores) {
//     valores.forEach(element => {
//             console.log(element)
//     });
// };

// infinito(45, "hola", "delta", false);

// function caraCruz () {
//     let CarayCruz = Math.round(Math.random());

//     if(CarayCruz == 0){
//         console.log("Cruz el valor és " + CarayCruz);
//     }else{
//         console.log("Cara el valor és " + CarayCruz);
//     }
// }

// caraCruz();

// //Switch
// function mostrarMes(n) {
//     switch (n) {
//         case 1:
//             console.log("Enero");
//             break;
//         case 2:
//             console.log("Febrero");
//             break;
//         case 3:
//             console.log("Marzo");
//             break;
//         case 4:
//             console.log("Abril");
//             break;
//         case 5:
//             console.log("Mayo");
//             break;
//         case 6:
//             console.log("Junio");
//             break;
//         case 7:
//             console.log("Julio");
//             break;
//         case 8:
//             console.log("Agosto");
//             break;
//         case 9:
//             console.log("Septiembre");
//             break;
//         case 10:
//             console.log("Octubre");
//             break;
//         case 11:
//             console.log("Noviembre");
//             break;
//         case 12:
//             console.log("Diciembre");
//             break;
//         default:
//             console.log("Número de mes inválido");
//     }
// }

// // Ejemplo de uso:
// let numeroMes = parseInt(prompt("Introduce el número del mes (1 al 12): "));
// mostrarMes(numeroMes);

// Switch que tranforma string a numero
// function convertirStringANumero(str) {
//     let numero;
//     switch (str) {
//         case "1":
//             numero = 1;
//             break;
//         case "2":
//             numero = 2;
//             break;
//         case "3":
//             numero = 3;
//             break;
//         case "4":
//             numero = 4;
//             break;
//         case "5":
//             numero = 5;
//             break;
//         default:
//             console.log("Cadena inválida");
//             return;
//     }
//     console.log(`La cadena "${str}" se convierte al número ${numero}`);
// }

// // Ejemplo de uso:
// let cadena = prompt("Introduce un número del 1 al 5 en formato string:");
// convertirStringANumero(cadena);

// MATH

// for (let index = 0; index < 500; index++) {
//     alert(Math.round(Math.random()));
// }

// Redondear el número de pi
// function redondear(numero, decimales) {
//     let factor = Math.pow(10, decimales);
//     return Math.round(numero * factor) / factor;
// }

// let pi = 3.1415;
// let piRedondeado = redondear(pi, 3);
// console.log(piRedondeado);

// Funcion sustituye las a por o
// function AporO(palabra) {
//     return palabra.replace(/a/g, "o");
// }

// let palabra = "La malandra de la policia estatal";

// alert(AporO(palabra));

// function empiezaAca (string){
//     alert(string.startsWith("aca"));
// }

// let academia = "academia";
// let escuela = "escuela";

// empiezaAca(academia);
// empiezaAca(escuela);

// Saludar 3 veces

// function saludar3 (hola){
//     if(hola.includes("Hola")){
//         for(let contador = 0; contador < 3; contador++){
//             alert("Hola");
//         }
//     }
// }

// let sal = "Hola";

// saludar3(sal);

// While y for

// for (let index = 0; index < 10; index++) {
//     console.log("I ❤ code");
// }

// let contador = 0;
// while(contador < 10){
//     console.log("I ❤ code");
//     contador++;
// }

// Crear un array y despues recorer cada uno con un for ecah

// lista = ["a","b","c","d","e"];

// lista.forEach(element => {
//     console.log(element);
// });

// let numero = 5;

// for (let index = 0; index < 5; index++) {
//     console.log(numero);
//     numero= numero-1;
// }

// Array sim

// let array = ["🍔", "🍺", "🍣", "🍕", "🍜", "🍙", "🍙", "🥑"];

// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);
// }

// console.log("Separación");

// let pizza = false; 

// for (let index = 0; index < array.length; index++) {
//   if (pizza) {
//     array[index] = "🍺";
//   }

//   if (array[index] === "🍕") {
//     pizza = true;
//   }
// }

// // Imprime el array modificado
// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);
// }

// let array1 = ["🍔", "🍺", "🍣", "🍕", "🍜", "🍙", "🍙", "🥑"];
// let array2 = ["🍕","🍕","🍕", "🍍","🍕","🍕","🍕",];

// console.log(array1.includes("🍍"));

// console.log(array2.includes("🍍"));



// let array = ["🍕", "🍕", "🍕", "🍍", "🍕", "🍕", "🍕"];

// // Eliminar todas las ocurrencias de "🍍"
// array = array.filter(item => item !== "🍍");

// console.log(array); // ["🍕", "🍕", "🍕", "🍕", "🍕", "🍕"]

// Array inicial
// let fruits = ['🍓', '🍑', '🍓', '🍑', '🍓'];


// let arraysinmelones = fruits.map(function(fruits){
//     if(fruits === '🍑'){
//         return '🍄';
//     }else{
//         return fruits;
//     }
// });


// console.log(arraysinmelones);

// // Array inicial
// let items = ['🌶️', '🥛', '🌶️', '🥛', '🌶️', '🥛'];

// // Añadir el icono de galleta después de cada chile
// let itemsTransformados = items.reduce((acc, item) => {
//   // Añadir el elemento actual al acumulador
//   acc.push(item);
//   // Si el elemento actual es un chile, añadir una galleta después
//   if (item === '🌶️') {
//     acc.push('🍪');
//   }
//   return acc; // Devolver el acumulador para la próxima iteración
// }, []); // El acumulador empieza como un array vacío []

// console.log(itemsTransformados);


// let cartas = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
// let resultado = [];

// cartas.forEach((value, position, array) => {
//     resultado.push(value);

//     if (value === "🎴" && position < array.length - 1 && array[position + 1] === "🎴") {
//         resultado.push("🃏");
//     }
// });

// console.log(resultado); 


// let cartas = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
// let resultado = [];


// cartas.forEach((value, position, array) => {
//     resultado.push(value);

//     if(value === "🎴" && position < array.length - 1 && array[position + 1] === "🎴"){
//         resultado.push("🃏");
//     }
// });

// console.log(resultado);