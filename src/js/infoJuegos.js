import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';

leerJuegos();

function leerJuegos() {
    if (localStorage.length > 0) {
        let listaJuegos = JSON.parse(localStorage.getItem("juegoKey"));

        for (let i in listaJuegos) {

            let codHtml = `<article class="ol-sm-12 col-md-3 col-md-3 d-flex justify-content-between juegoInicio my-3" id="${listaJuegos[i].codigo}">
                       <div class="c">
                   <div class="card borde">
                           <img class="card-img-top" src="img/${listaJuegos[i].imagen}"
                               alt="${listaJuegos[i].nombre}">
                          <div class="card-body text-center cajaCategoria">
                            <h5 class="titulo">${listaJuegos[i].nombre}</h5>
                             <button class="btn botonredondeado azul2 px-5 text-light shadow" onclick="mostrarjuego(${listaJuegos[i].codigo})">Ver más</button>
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


window.mostrarjuego = function (codigo) {
    let listaJuegos = JSON.parse(localStorage.getItem('juegoKey'));
    let juegoEncontrado = listaJuegos.find(function (producto) {
        return producto.codigo == codigo;
    })
    localStorage.setItem("juegoEncontrado", JSON.stringify(juegoEncontrado));

    window.location = "http://127.0.0.1:5501/dist/infoJuegos.html"
console.log(juegoEncontrado)

    dibujarJuego(juegoEncontrado);

    
}
function dibujarJuego(juegoEncontrado) {

    let juegoJuego = document.getElementById("detalleJuego");

    for (let i in juegoEncontrado) {
        let codHtml = `<article id="${juegoEncontrado[i].codigo}"
        <div class="row no-gutters">
        <div class="col-md-4">
            <img src="img/${juegoEncontrado[i].imagen}" class="card-img" alt="${juegoEncontrado[i].nombre}">
        </div>
        <div class="col-md-8">
            <div class="card-body mx-4">
                <h2 class="card-title my-5"> <strong>${juegoEncontrado[i].nombre}</strong> </h2>
                <h4 class="card-text">${juegoEncontrado[i].descripcion}</h4>
            </div></div></div>
            </article>`;
            juegoJuego.innerHTML += codHtml;
    }

}
