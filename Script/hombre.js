let botonropas = document.querySelector("#boton-ropa");
botonropas.addEventListener("click", function () {
  let sku3 = document.querySelector("#catropa");
  sku3.classList.toggle("dalee");
})

let botonremeras = document.querySelector("#boton-remeras");
botonremeras.addEventListener("click", function () {
  let sku4 = document.querySelector("#remesmostrar");
  sku4.classList.toggle("mostrarremes");
})

let botonpant = document.querySelector("#boton-pant");
botonpant.addEventListener("click", function () {
  let sku5 = document.querySelector("#mostrarpant");
  sku5.classList.toggle("pantmostrar");
})

let botoncamperas = document.querySelector("#boton-camp");
botoncamperas.addEventListener("click", function () {
  let sku6 = document.querySelector("#mostrarcamperas");
  sku6.classList.toggle("campmostrar");
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