// consimir API
const API = "https://rickandmortyapi.com/api/character";

// Consumir API
const getData = (api) =>{
    return fetch(api)
        .then(
        (response) => response.json())
        .then(
            (json) =>{
                dibujarData(json.results),
                paginacion(json.info)        
            })
        .catch((error) => {
            console.log("error:" , error);
        })
};

// dibujar card de personajes
const dibujarData = (data) =>  {
    let html = "";

    data.forEach( pj => {
        html += '<div class="col-md-3 tarjeta">'
        html += '<div class="card" style="width: 14rem;">';
        html += `<img src="${pj.image}" class="card-img-top" alt="Img">`;
        html += '<div class="card-body contenedorTexto">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += `<p class="card-text">${pj.gender}</p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });
    document.getElementById("datosPj").innerHTML = html;
};

//paginacion
const paginacion = (data) => {

    let html = `<li class="page-item item ${data.prev ? "" : "disabled"}"><a class="page-link" onclick="(getData('${data.prev}'))">Prev</a></li> <li class="page-item item ${data.next ? "" : "disabled"}"><a class="page-link" onclick="(getData('${data.next}'))">Next</a></li>`;
    
    document.getElementById("paginacion").innerHTML = html;
};

// Ejecutar getData
getData(API);