import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

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