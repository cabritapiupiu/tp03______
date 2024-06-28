//conecto con el archivo json
//fetch('UBICACION - puede ser local o remoto')
fetch('json/resto_arg.json')
    //espero respuesta
    .then(response => {
        //almacena los datos obtenidos convertidos a json
        return response.json()
    })
    // cuando devuelve la conversión a un array de objetos podemos comenzar a utilizarlos.
    // utilizamos una variable, en ésta oportunidad ocupamos el nombre resena

    .then(data => {




        let resto = localStorage.getItem("num_resto");

        let menuHTML = "";

        for (let i of data) {

            if (i.id == localStorage.getItem("num_resto")) {
                document.querySelector('.header_menu').querySelector('h3').innerHTML = 
                i.nombre
            }
        }

        for (let i of data) {
            for (let x = 0; x < 8; x++) {
                if (i.id == localStorage.getItem("num_resto")) {

                    let vegano = (i.menu.vegan === "true") ? "Apto para veganos" : "No es apto para veganos";

                    document.querySelector('.menu_resenia').innerHTML +=
                        `
                    <a href="resto.html" class="plato">
                        <div class="comida">
                            <div class="platillo">
                            
                            
                            <img src=${i.resenas[x].foto} class="ajustar" alt="">
                            
                        </div>
                        <div class="datos_platillo">
                            <div class="info_plato">
                            <h4>${i.resenas[x].name}</h4>
                            <h6>${i.resenas[x].comentario}</h6>
                            </div>
                            <div class="puntaje">
                            <span id="span">
                            ${`<i class="iconos">star</i>`.repeat(i.resenas[x].calif)}
                            ${`<i class="iconos gris_txt">star</i>`.repeat(5 - i.resenas[x].calif)}
                            </span>
                        </div>
                            
                            
                        </div>
                    </a>`;

                }
            }
        }
    })