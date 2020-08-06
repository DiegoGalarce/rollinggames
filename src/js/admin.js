import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css'
import Juego from './juego.js'
import $ from 'jquery'
import '@fortawesome/fontawesome-free/js/all.min.js'

let listaJuegos = [];
leerJuegos();

let juegoExistente = false;

window.agregarJuego = function agregarJuego() {

    let codigo = document.getElementById('codigo').value;
    document.getElementById('codigo').removeAttribute("readonly");
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;

    //validar general de todos los datos

    console.log(document.getElementById('a'));
    let juegoNuevo = new Juego(codigo, nombre, categoria, descripcion, imagen);

    listaJuegos.push(juegoNuevo);

    localStorage.setItem('juegoKey', JSON.stringify(listaJuegos));

    leerJuegos();

    limpiarFormulario();

    let ventanaModal = document.getElementById('modal');
    $(ventanaModal).modal('hide');

};

window.validarGeneral = function (event) {
    event.preventDefault();
    console.log("Desde validar general");

    if (validarCodigo(document.getElementById('codigo')) &&
        validarNombre(document.getElementById('nombre')) &&
        validarCategoria(document.getElementById('categoria')) &&
        validarDescripcion(document.getElementById('descripcion'))) {
            decidir();
    } else {
        alert("Hay un error en el formulario")
    }
}

window.validarCodigo = function (input) {
    if (input.value == "") {
        input.className = "form-control is-invalid"
        return false;
    } else {
        input.className = "form-control is-valid"
        return true;
    }
}

window.validarNombre = function (input) {
    if (input.value == "") {
        input.className = "form-control is-invalid"
        return false;
    } else {
        input.className = "form-control is-valid"
        return true;
    }
}

window.validarCategoria = function (input) {
    if (input.value == "") {
        input.className = "form-control is-invalid"
        return false;
    } else {
        input.className = "form-control is-valid"
        return true;
    }
}

window.validarDescripcion = function (input) {
    if (input.value == "") {
        input.className = "form-control is-invalid"
        return false;
    } else {
        input.className = "form-control is-valid"
        return true;
    }

}

function leerJuegos() {
    if (localStorage.length > 0) {
        let arregloJuego = JSON.parse(localStorage.getItem('juegoKey'));

        if (listaJuegos.length == 0) {
            listaJuegos = arregloJuego;
        }
        //borrar filas de la tabla
        borrarFilas();
        //dibujar filas
        dibujarFilas(arregloJuego);
    }
}

function dibujarFilas(arregloJuego) {
    let tabla = document.getElementById('tablaProductos');
    for (let i in arregloJuego) {
        let codHTML = `<tr>
    <th scope="row">${arregloJuego[i].codigo}</th>
    <td>${arregloJuego[i].nombre}</td>
    <td>${arregloJuego[i].categoria}</td>
    <td>${arregloJuego[i].descripcion}</td>
    <td>${arregloJuego[i].imagen}</td>
    <td>
        <button class="btn botontabla" id="publicado" onclick="marcarPublicado(event)"><i class="fas fa-check" style="color: #C8C8C5"></i></button>
    </td>
    <td>
        <button class="btn btn-danger"><i class="fas fa-trash-alt" onclick="eliminarJuego(${arregloJuego[i].codigo})"></i></button>
        <button class="btn btn-primary"><i class="far fa-edit" onclick="prepararJuego(${arregloJuego[i].codigo})"></i></button>
        <button class="btn botontabla" id="btn" onclick="destacarJuego(event)"><i class=" far fa-star" style="color: #C8C8C5"></i></button>
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

window.limpiarFormulario = function () {
    let formulario = document.getElementById('formulario');
    formulario.reset();
    juegoExistente = false;
}

window.eliminarJuego = function (codigo) {
    let arregloFiltrado = listaJuegos.filter(function (juego) {
        return juego.codigo != codigo;
    });
    localStorage.setItem("juegoKey", JSON.stringify(arregloFiltrado))
    listaJuegos = arregloFiltrado;

    leerJuegos();
}

window.prepararJuego = function (codigo) {

    let juegoEncontrado = listaJuegos.find(function (producto) {
        return producto.codigo == codigo;
    })
    document.getElementById('codigo').value = juegoEncontrado.codigo;
    document.getElementById('codigo').setAttribute("readonly","true");
    document.getElementById('nombre').value = juegoEncontrado.nombre;
    document.getElementById('categoria').value = juegoEncontrado.categoria;
    document.getElementById('descripcion').value = juegoEncontrado.descripcion;
    document.getElementById('imagen').value = juegoEncontrado.imagen;

    let ventanaModal = document.getElementById('modal');
    $(ventanaModal).modal('show');

    juegoExistente = true;
}

window.decidir = function () {
    if (juegoExistente == false) {
        agregarJuego();
    } else {
        modificarProducto();
    }
}

function modificarProducto() {
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;

    for (let i in listaJuegos) {
        if (listaJuegos[i].codigo == codigo) {
            listaJuegos[i].nombre = nombre;
            listaJuegos[i].categoria = categoria;
            listaJuegos[i].descripcion = descripcion;
            listaJuegos[i].imagen = imagen;
        }
    }
    localStorage.setItem("juegoKey", JSON.stringify(listaJuegos));
    leerJuegos();
    limpiarFormulario();

    let ventanaModal = document.getElementById('modal');
    $(ventanaModal).modal('hide');
}

window.destacarJuego = function (e) {
    var target = e.target,
        count = +target.dataset.count;

    target.style.backgroundColor = count === 1 ? "#F3F3F1" : '#FFFF76';
    target.dataset.count = count === 1 ? 0 : 1;
}

window.marcarPublicado = function (e) {
    var target = e.target,
        count = +target.dataset.count;

    target.style.backgroundColor = count === 1 ? "#F3F3F1" : '#57D757';
    target.dataset.count = count === 1 ? 0 : 1;
}