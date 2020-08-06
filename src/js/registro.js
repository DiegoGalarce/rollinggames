import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';


window.revisar = function (elemento) {
    if (elemento.value == "") {
        elemento.className = "form-control is-invalid"
        return false;
    } else {
        elemento.className = "form-control is-valid"
        return true;
    }
}
window.revisarApellido = function (elemento) {
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

window.validarGeneral = function (e) {

    event.preventDefault();

    if (revisar(document.getElementById("nombre")) && revisarApellido(document.getElementById("apellido")) &&
        validarEmail(document.getElementById("email")) &&
        validarNumeros(document.getElementById("telefono")) &&
        validarUsuario(document.getElementById("usuario")) &&
        revisarContraseña(document.getElementById("contraseña")) &&
        validarCheckbox()

    ) {
        enviarEmail();

    } else {
    }
}
function enviarEmail() {
    let template_params = {
        "from_name": document.getElementById("nombre").value,
        "message_html": `Mensaje: ${document.getElementById("apellido").value} - Email ${document.getElementById("email").value} - Telefono ${document.getElementById("telefono").value} - Usuario ${document.getElementById("usuario").value} - Contraseña ${document.getElementById("contraseña").value}`
    }

    let service_id = "default_service";
    let template_id = "template_ATUE1tUl";
    emailjs.send(service_id, template_id, template_params).then(
        function (response) {
            console.log("Respuesta se envio" + response);
            document.getElementById("msjEnvio").className = "alert alert-warning my-4";
            document.getElementById("msjEnvio").innerText = "La solicitud fue enviada Correctamente"
        }, function (error) {
            console.log("Se produjo un error" + error);
            document.getElementById("msjEnvio").className = "alert alert-Danger my-4";
            document.getElementById("msjEnvio").innerText = "Ocurrio un Error en el Envio"
        }
    )
}