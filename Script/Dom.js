/* DOM es igual a documento */
let categorias = ["Hombre", "Mujer", "Niño"];

let sumando = "";
for (let index = 0; index < categorias.length; index++) {
    sumando = sumando + '<br><li><a class="secciones" href="/Html/'+categorias[index]+'.html">'+categorias[index]+'</a></li>';
    
    
}
console.log(sumando)

let grupo = document.querySelector("#container-categorias");
grupo.innerHTML = sumando;

let boton = document.querySelector("#boton-cat");
boton.addEventListener("click", function () {
  let sku2 = document.querySelector("#container-categorias");
  sku2.classList.toggle("categorias");
})



//let boton = document.querySelector("#cambia-titulo")

let titulo = document.querySelector(".Titulo principal");

console.log(document);
