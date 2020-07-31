import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';


window.revisar = function(elemento) {
    if (elemento.value == "") {
        elemento.className = "form-control is-invalid"
        return false;
    } else {
        elemento.className = "form-control is-valid"
        return true;
    }
}
 window.revisarApellido = function(elemento) {
    if (elemento.value == "") {
        elemento.className = "form-control is-invalid"
        return false;
    } else {
        elemento.className = "form-control is-valid"
        return true;
    }
}
window.validarEmail = function (input) {
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}
window.validarUsuario = function (input) {
    let expresion = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}
window.validarNumeros = function (input) {
    if (input.value != "" && !isNaN(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
window.revisarContraseña = function (input) {
    let expresion = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}
let checkTerminos = document.getElementById("terminos");
window.validarCheckbox = function () {
    if (checkTerminos.checked) {
        checkTerminos.className = "form-check-input is-valid";
        return true;
    } else {
        checkTerminos.className = "form-check-input is-invalid";
        return false;
    }
}
checkTerminos.addEventListener("change", validarCheckbox);

window.validarGemeral = function (event) {
    event.preventDefault();
    if (revisar(document.getElementById("nombre")) && revisarApellido(document.getElementById("apellido")) &&
        validarEmail(document.getElementById("email")) &&
        validarNumeros(document.getElementById("telefono")) &&
        validarUsuario(document.getElementById("usuario")) &&
        revisarContraseña(document.getElementById("contraseña"))
    ) {
        enviarEmail();

    } else {
        alert("Se produjo un Error en el Envio")
    }
}
window.limpiarFormulario = function () {
    if (confirm('¿Estas seguro de enviar este formulario?')){
        document.tuformulario.submit()
 }
	document.getElementById('formulario').reset;
}
window.enviarEmail = function() {
     if (confirm('¿Estas seguro de enviar este formulario?')){
           document.tuformulario.submit()
    }
} 