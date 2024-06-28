function Plato(id) {
    localStorage.setItem("plato", id);
}

// Conecto con el archivo JSON
fetch('json/resto_arg.json')
    // Espero respuesta y la convierto a JSON
    .then(response => response.json())
    // Cuando obtengo la conversión a un array de objetos, puedo comenzar a utilizarlos
    .then(data => {
        let resto = localStorage.getItem("num_resto");

        let menuHTML = "";
        
        for (let i of data) {

            if (i.id == localStorage.getItem("num_resto")) {
            document.querySelector('.header_menu').innerHTML+=
        
        `
            <h3>${i.nombre} </h3>
        `
            }}

        for (let i of data) {
            for (let x = 0; x<8; x++) {
            if (i.id == localStorage.getItem("num_resto")) {
                
                    let vegano = (i.menu[x].vegan === "true") ? "Apto para veganos" : "No es apto para veganos";
                    
                    document.querySelector('.menu_resto'). innerHTML +=
        `
                    <a href="plato.html" class="plato" onclick="plato(id)>
                        <div class="comida">
                            <div class="platillo">
                            
                            
                            <img src=${i.menu[x].image} class="ajustar" alt="">
                                <div class="precio_plato">$${i.menu[x].price}</div>
                            </div>
                        </div>
                        <div class="datos_platillo">
                            <h4>${i.menu[x].plato}</h4>
                            <span>${i.menu[x].description}</span>
                            <h6>${vegano}</h6>
                        </div>
                    </a>`;
                
            }
        }        }
    })
