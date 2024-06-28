function Resto(id) {
    localStorage.setItem("num_resto", id);
}

//conecto con el archivo json
//fetch('UBICACION - puede ser local o remoto')
fetch('json/resto_arg.json')
//espero respuesta
.then(response => {
    //almacena los datos obtenidos convertidos a json
    return response.json()
})
// cuando devuelve la conversión a un array de objetos podemos comenzar a utilizarlos.
// utilizamos una variable, en ésta oportunidad ocupamos el nombre DATA
.then(data => {
    
    for (let i = 0; i < 4; i++) {
        console.log(data[i].nombre)
        console.log(data[i].id)
        document.querySelector('.restaurantes').innerHTML +=
        `<a href="resto.html" class="resto" id="resto-${data[i].id}" onclick="Resto(${data[i].id})" >
            <article>
                <div class="imagen_resto">
                <img src="${data[i].urllogo}" class="ajustar" alt="" >
                </div>
                <div class="desc_resto">
                    <h4>${data[i].nombre}</h4>
                    <h6>${data[i].horario}</h6>
                    <h6>${data[i].ubicacion}</h6>
                    
                    <div class="precio_val">
                        <div class="valoracion">
                            <span id="span">
                            ${`<i class="iconos">star</i>`.repeat(data[i].estrellas)}
                            ${`<i class="iconos gris_txt">star</i>`.repeat(5 - data[i].estrellas)}
                            </span>
                        </div>
                        <div class="precio">

                        ${`<i class="iconos">attach_money</i>`.repeat(data[i].costo)}
                        ${`<i class="iconos gris_txt">attach_money</i>`.repeat(3- data[i].costo)}
                            

                        </div>
                    </div>
                </div>
                <div class="puntuacion f20">${data[i].valoracion}</div>
                <div class="distancia">${data[i].valoracion}KM</div>
            </article>
        </a>`
        // let enlace = document.querySelector(".resto")    
        // enlace.addEventListener("click", Resto(data[i].id) ) 
        // let enlace = document.querySelector(`#resto-${data[i].id}`);
        // enlace.addEventListener("click", function (event) {
        //     event.preventDefault(); // Previene la acción por defecto del enlace
        //     Resto(data[i].id);
        // });

    }

})