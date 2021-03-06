let botonropas = document.querySelector("#boton-ropa");
botonropas.addEventListener("click", function () {
  let sku3 = document.querySelector("#catropa");
  sku3.classList.toggle("dalee");
})

let botonzapas = document.querySelector("#boton-calzado");
botonzapas.addEventListener("click", function () {
  let sku3 = document.querySelector("#cattextiles");
  sku3.classList.toggle("shoes");
})

let botonaccesorios = document.querySelector("#boton-accesorios");
botonaccesorios.addEventListener("click", function () {
  let sku3 = document.querySelector("#cataccesorios");
  sku3.classList.toggle("accesorios");
})