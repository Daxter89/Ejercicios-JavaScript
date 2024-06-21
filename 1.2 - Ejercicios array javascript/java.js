document.addEventListener("DOMContentLoaded", function () {
  let array = [
    "🎆",
    "🎋",
    "🎗",
    "🎨",
    "🥼",
    "🎓",
    "🥎",
    "🥌",
    "🎿",
    "🛶",
    "🏓",
    "🏑",
    "🥋",
    "🕹",
    "🎴",
  ];
  let arrayRandom = [
    "🎆",
    "🎋",
    "🎗",
    "🎨",
    "🥼",
    "🥽",
    "🦺",
    "🕶",
    "👓",
    "🎎",
    "🎑",
    "🎃",
    "👢",
    "💋",
    "🎓",
    "🥎",
    "🥌",
    "🎿",
    "🛶",
    "🏓",
    "🏑",
    "🥋",
    "🕹",
    "🎴",
  ];

  let pushButton = document.getElementById("push");
  let unshiftButton = document.getElementById("unshift");
  let insertAtButton = document.getElementById("insert_at");
  let popButton = document.getElementById("pop");
  let shiftButton = document.getElementById("shift");
  let removeAtButton = document.getElementById("remove_at");

  // Mostrar el array al cargar la página
  function mostrarArray() {
    let divArray = document.getElementById("mostrarArray");
    divArray.innerHTML = array.join(" ");
  }

  mostrarArray();
  /*
    alert(array[Math.floor(Math.random() * ((array.length - 1) - 0 + 1))])
    */

  // Get te value of the input
  function obtenerValorInput(id) {
    return document.getElementById(id).value;
  }

  // Function that lets you put a random simbol at the end of the array
  pushButton.onclick = function () {
    array.push(
      arrayRandom[Math.floor(Math.random() * (arrayRandom.length - 1 - 0 + 1))]
    );
    mostrarArray();
  };

  // Function that lets you put a random simbol at the beginning of the array
  unshiftButton.onclick = function () {
    array.unshift(
      arrayRandom[Math.floor(Math.random() * (arrayRandom.length - 1 - 0 + 1))]
    );
    mostrarArray();
  };

  // Funciont that depens on the number that you put at the first input lets you insert a new simbol,
  // if the number you put is not on the array.length it shows an error. 
  insertAtButton.onclick = function () {
    let primerValor = obtenerValorInput("number1");

    if (primerValor <= array.length && primerValor >= 0) {
      array.splice(
        primerValor,
        0,
        arrayRandom[
        Math.floor(Math.random() * (arrayRandom.length - 1 - 0 + 1))
        ]
      );
    } else {
      alert("El número se sale del array");
    }
    mostrarArray();
  };


  // Funtion that lest you delete the last simbol of the array
  popButton.onclick = function () {
    array.pop(
      arrayRandom[Math.floor(Math.random() * (arrayRandom.length - 1 - 0 + 1))]
    );
    mostrarArray();
  };

  // Funtion that lest you delete the first simbol of the array
  shiftButton.onclick = function () {
    array.shift(
      arrayRandom[Math.floor(Math.random() * (arrayRandom.length - 1 - 0 + 1))]
    );
    mostrarArray();
  };

  // Funciont that depens on the number that you put at the second input lets you delete the simbol,
  // if the number you put is not on the array.length it shows an error. 
  removeAtButton.onclick = function () {
    let primerValor = obtenerValorInput("number2");

    if (primerValor <= array.length && primerValor >= 0) {
      array.splice(primerValor,1);
    } else {
      alert("El número se sale del array");
    }
    mostrarArray();
  };

  mostrarArray();
});
