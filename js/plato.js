// Conecto con el archivo JSON
fetch('json/resto_arg.json')
    // Espero respuesta y la convierto a JSON
    .then(response => response.json())
    // Cuando obtengo la conversión a un array de objetos, puedo comenzar a utilizarlos
    .then(data => {
        data.forEach(resto=>{
            if (resto.id == localStorage.getItem("Resto")) {
                resto.menu.forEach(plato=>{
                    if (plato.id == localStorage.getItem("plato")) {
                        let vegano = (plato.vegan === "true") ? "Apto para veganos" : "No es apto para veganos"
                        document.querySelector(".contenedor_img").querySelector("img").setAttribute("src",plato.image)
                        document.querySelector(".vaina").querySelector("h2").innerText = vegano
                        document.querySelector(".vaina").querySelector("h5").innerText = plato.plato
                        document.querySelector(".vaina").querySelector(".precio").innerHTML =  `
                        ${`<i class="iconos">attach_money</i>`.repeat(plato.costo)}
                        ${`<i class="iconos gris_txt">attach_money</i>`.repeat(3- plato.costo)}`
                        document.querySelector(".puntu_resto").innerText = plato.price
                        document.querySelector(".desresto").querySelector("p").innerText = plato.description
                    }
                })
            }
        })
    })

    




    
let catidad = document.getElementById("cantidad") 
let  cant=1
let btnrestar=document.getElementById("restar")
let btnsumar=document.getElementById("sumar")
let subtotal=document.getElementById("subtotal")
let precioUnit=document.querySelector(".puntu_resto")
let unit=1890
precioUnit.innerText=`$${unit}`
cantidad.innerText=cant
btnrestar.innerText="block"
function restar(){
  if (cant>1){
    btnrestar.innerText="remove";
    cant=cant-1
    cantidad.innerText=cant
  }
  if(cant==1){
    btnrestar.innerText="block"
  }
  if(cant<15){
    btnsumar.innerText="add"
  }
}
function sumar(){
  if(cant<15){
    btnsumar.innerText="add"
    cant=cant+1    
    cantidad.innerText=cant
  }
  if(cant==15){
    btnsumar.innerText="block"
  }
  if(cant>1){
    btnrestar.innerText="remove";
  }

}
