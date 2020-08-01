import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

console.log("si funciona admin");

let listaProductos = [];

window.agregarproducto = function agregarproducto() {
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    //validar general

    let productoNuevo = new Juego(codigo, nombre, categoria, descripcion);

    listaProductos.push(productoNuevo);

    localStorage.setItem('juegoKey', JSON.stringify(listaProductos));

    //mostrar arreglo

    //Cerrar ventana modal
};

function leerProductos() {
    if (localStorage.length > 0) {
        let arregloJuego = JSON.parse(localStorage.getItem('juegoKey'));

        if (listaProductos.length == 0) {
            listaProductos = arregloJuego;
        }
        //borrar filas de la tabla
        borrarFilas();
        //dibujar filas
    }
}

function dibujarFila() {
    let tabla = document.getElementById('tablaProductos');
    for (let i in arregloJuego) {
        let codHTML = `<tr>
    <th scope="row">${arregloJuego[i].codigo}</th>
    <td>${arregloJuego[i].nombre}</td>
    <td>${arregloJuego[i].categoria}</td>
    <td>${arregloJuego[i].descripcion}</td>
    <td>
        <button class="btn btn-outline-success"><i class="far fa-check-square"></i></button>
    </td>
    <td>
        <button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        <button class="btn btn-primary"><i class="far fa-edit"></i></button>
        <button class="btn btn-outline-warning"><i class="far fa-star"></i></button>
    </td>
</tr>`

        tabla.innerHTML += codHTML;
    }
}

function borrarFilas() {
    let tabla = document.getElementById('tablaProductos');
    if (tabla.children.length > 0) {
        while (tabla.firstChild) {
            tabla.removeChild(tabla.firstChild)
        }
    }
}

