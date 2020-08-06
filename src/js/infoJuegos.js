import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';

let juegoEncontrado = JSON.parse(localStorage.getItem("juegoEncontrado"));

dibujarJuego(juegoEncontrado);

function dibujarJuego(juegoEncontrado) {
    let juegoJuego = document.getElementById("detalleJuego");
    let codHtml = `<article id="${juegoEncontrado.codigo}"
        <div class="row no-gutters">
        <div class="col-md-4">
            <img src="img/${juegoEncontrado.imagen}" class="card-img" alt="${juegoEncontrado.nombre}">
        </div>
        <div class="col-md-8">
            <div class="card-body mx-4">
                <h2 class="card-title my-5"> <strong>${juegoEncontrado.nombre}</strong> </h2>
                <h4 class="card-text">${juegoEncontrado.descripcion}</h4>
            </div></div></div>
            </article>`;
    juegoJuego.innerHTML += codHtml;
}