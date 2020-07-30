import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';


function revisar(elemento) {
    if (elemento.value == "") {
        elemento.className = "form-control is-invalid"
        return false;
    } else {
        elemento.className = "form-control is-valid"
        return true;
    }
}
function revisarApellido(elemento) {
    if (elemento.value == "") {
        elemento.className = "form-control is-invalid"
        return false;
    } else {
        elemento.className = "form-control is-valid"
        return true;
    }
}
function validarEmail(input) {
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}
function validarUsuario(input) {
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}
function validarNumeros(input) {
    if (input.value != "" && !isNaN(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
function validarContraseña(input) {
    if (texto.value != "" && texto.value.length >= 10) {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}
let checkTerminos = document.getElementById("terminos");
function validarCheckbox() {
    if (checkTerminos.checked) {
        checkTerminos.className = "form-check-input is-valid";
        return true;
    } else {
        checkTerminos.className = "form-check-input is-invalid";
        return false;
    }
}
checkTerminos.addEventListener("change", validarCheckbox);

function validarGeneral(event) {
    event.preventDefault();
    if (revisar(document.getElementById("nombre")) && revisarApellido(document.getElementById("apellido")) &&
        validarEmail(document.getElementById("email")) &&
        validarNumeros(document.getElementById("telefono")) &&
        validarUsuario(document.getElementById("usuario")) &&
        validarContraseña(document.getElementById("contraseña"))
    ) {
        enviarEmail();

    } else {
        alert("Se produjo un Error en el Envio")
    }
}
function enviarEmail() {
    let template_params = {
        "from_name": document.getElementById("nombre").value,
        "message_html": `Mensaje: ${document.getElementById("usuari").value} - Email ${document.getElementById("email").value} - Contraseña ${document.getElementById("contraseña")}`
    }

    let service_id = "default_service";
    let template_id = "template_sEfoCHH2";
    emailjs.send(service_id, template_id, template_params).then(
        function (response) {
            console.log("Respuesta se envio" + response);
            document.getElementById("msjEnvio").className = "alert alert-warning my-4";
            document.getElementById("msjEnvio").innerText = "Su respuesta fue enviada"
        }, function (error) {
            console.log("Se produjo un error" + error);
            document.getElementById("msjEnvio").className = "alert alert-Danger my-4";
            document.getElementById("msjEnvio").innerText = "Ocurrio un Error en el Envio"
        }
    )
}