

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