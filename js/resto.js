// Conecto con el archivo JSON
fetch('json/resto_arg.json')
// Espero respuesta y la convierto a JSON
.then(response => response.json())
// Cuando obtengo la conversión a un array de objetos, puedo comenzar a utilizarlos
.then(data => {
    
    for (let i of data) {

        if (i.id == localStorage.getItem("num_resto")) {
            document.querySelector('.main_resto').innerHTML+=
            `<section class="link_resto">
            <div class="pic_resto">
                <img src="./img/resto_2.jpg" alt="">
            </div>
            <div class="name_resto">
                <div class="vaina">
                    <h2>
                        ${i.nombre}
                    </h2>
                    <h5 class="gris_txt">${i.ubicacion}</h5>
                </div>
                <div class="precio verde_txt">

                 ${`<i class="iconos">attach_money</i>`.repeat(i.costo)}
                 ${`<i class="iconos gris_txt">attach_money</i>`.repeat(3- i.costo)}
                


                </div>

            </div>

            <div class="puntu_resto">${i.calificacion}</div>

        </section>
        <section class="desresto">
            <ul class="datos">
                <li class="btn-cat">

                    <i class="iconos f30 ">fmd_good</i>
                    1.5km

                </li>

                <li class="btn-cat">

                    <i class="iconos f30 ">timer</i>
                    ${i.horario}

                </li>

                <li class="btn-cat">

                    <i class="iconos f30 ">delivery_dining</i>
                    Delivery

                </li>
            </ul>
            <p>${i.caracter}</p>
        </section>

`;
            }
        }
    }
)
