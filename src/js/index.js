import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
import './infoJuegos'

let listaJuegos = [];
leerJuego();

function leerJuego() {
    if (localStorage.length > 0) {
        let arregloJuego = JSON.parse(localStorage.getItem('juegoKey'));
        if (listaJuegos.length == 0) {
            listaJuegos = arregloJuego;
        }
        dibujarCard();
    }
}

function dibujarCard() {
    let infoJuego = document.getElementById("catalogo");
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
    </article>`
        infoJuego.innerHTML += codHtml;
    }
}