import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';

leerJuegos();

function leerJuegos() {
    if (localStorage.length > 0) {
        let listaJuegos = JSON.parse(localStorage.getItem("juegoKey"));

        for (let i in listaJuegos) {

            let codHtml = `<article class="" id="${listaJuegos[i].codigo}">
                       <div class="col-sm-12 col-md-3 d-flex justify-content-between juegoInicio my-3">
                   <div class="card borde">
                           <img class="card-img-top" src="img/${listaJuegos[i].imagen}"
                               alt="${listaJuegos[i].nombre}">
                          <div class="card-body text-center cajaCategoria">
                            <h5 class="titulo">${listaJuegos[i].nombre}</h5>
                             <a href="#" class="btn botonredondeado azul2 px-5 text-light shadow">Ver más</a>
                             </div>
                    </div>
                 </div>
                </article>`;
            
            switch (listaJuegos[i].categoria) {
                case "Acción":
                   
                    let catalogoAccion = document.getElementById("catalogoAccion");
                    catalogoAccion.innerHTML += codHtml;
                    break;
                case "Aventura":
                    let catalogoAventura = document.getElementById("catalogoAventura");
                    catalogoAventura.innerHTML += codHtml
                    break;
                case "Carreras":
                    let catalogoCarreras = document.getElementById("catalogoCarreras");
                    catalogoCarreras.innerHTML += codHtml;
                    break;
                case "Estrategia":
                    let catalogoEstrategia = document.getElementById("catalogoEstrategia");
                    catalogoEstrategia.innerHTML += codHtml;
                    break;
                case "Plataforma":
                    let catalogoPlataforma = document.getElementById("catalogoPlataforma");
                    catalogoPlataforma.innerHTML += codHtml;
                    break;
                case "Rol":
                    let catalogoRol = document.getElementById("catalogoRol")
                    catalogoRol.innerHTML += codHtml;
            }
        }
    }
}