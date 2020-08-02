import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css'
import Juego from './juego.js'
import $ from 'jquery'
import '@fortawesome/fontawesome-free/js/all.min.js'

let listaProductos = [];
leerProductos();

let juegoExistente = false;

window.agregarProducto = function agregarProducto() {
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    //validar general

    let productoNuevo = new Juego(codigo, nombre, categoria, descripcion);

    listaProductos.push(productoNuevo);

    localStorage.setItem('juegoKey', JSON.stringify(listaProductos));

    //mostrar arreglo
    leerProductos();
    limpiarFormulario();
    //Cerrar ventana modal
    let ventanaModal = document.getElementById('modal');
    $(ventanaModal).modal('hide');
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
    <td>
        <button class="btn btn-outline-success"><i class="far fa-check-square"></i></button>
    </td>
    <td>
        <button class="btn btn-danger"><i class="fas fa-trash-alt" onclick="eliminarJuego(${arregloJuego[i].codigo})"></i></button>
        <button class="btn btn-primary"><i class="far fa-edit" onclick="prepararJuego(${arregloJuego[i].codigo})"></i></button>
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

window.limpiarFormulario = function () {
    let formulario = document.getElementById('formulario');
    formulario.reset();
    juegoExistente = false;
}

window.eliminarJuego = function (codigo) {
    let arregloFiltrado = listaProductos.filter(function (juego) {
        return juego.codigo != codigo;
    });
    localStorage.setItem("juegoKey", JSON.stringify(arregloFiltrado))
    listaProductos = arregloFiltrado;

    leerProductos();
}
    
window.prepararJuego = function (codigo) {
    
    let juegoEncontrado = listaProductos.find(function (producto) {
        return producto.codigo == codigo;
    })
    document.getElementById('codigo').value = juegoEncontrado.codigo;
    document.getElementById('nombre').value = juegoEncontrado.nombre;
    document.getElementById('categoria').value = juegoEncontrado.categoria;
    document.getElementById('descripcion').value = juegoEncontrado.descripcion;

    let ventanaModal = document.getElementById('modal');
    $(ventanaModal).modal('show');

    juegoExistente = true;
}

window.decidir = function (event) {
    event.preventDefault();
    if (juegoExistente == false) {
        agregarProducto();
    } else {
        modificarProducto();
    }
}

function modificarProducto() {
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    
    for (let i in listaProductos) {
        if (listaProductos[i].codigo == codigo) {
            listaProductos[i].nombre = nombre;
            listaProductos[i].categoria = categoria;
            listaProductos[i].descripcion = descripcion;
        }
    }
    
    localStorage.setItem("juegoKey", JSON.stringify(listaProductos))
    leerProductos();
    limpiarFormulario();
    
    let ventanaModal = document.getElementById('modal');
    $(ventanaModal).modal('hide');
}

