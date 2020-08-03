import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

window.validarNombre = function (input) {
    if (input.value == "") {
        input.className = "form-control is-invalid"
        return false;
    } else {
        input.className = "form-control is-valid"
        return true;
    }
}

window.validarEmail = function (input) {
    console.log();
    //correo@correo.com  EXPRESIONES REGULARES
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
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

window.validarConsulta = function (texto) {
    if (texto.value != "" && texto.value.length >= 10) {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}

let checkTerminos = document.getElementById(`terminos`);

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

window.validarTodo = function (e) {
    event.preventDefault();
    if (validarNombre(document.getElementById(`nombre`)) &&
        validarEmail(document.getElementById(`email`)) &&
        validarNumeros(document.getElementById(`telefono`)) &&
        validarConsulta(document.getElementById(`consulta`)) &&
        validarCheckbox()
    ) {
        enviarEmail();
    } else {
    }

}

function enviarEmail() {
    let template_params = {
        "from_name": document.getElementById(`nombre`).value,
        "message_html": `Mensaje: ${document.getElementById(`consulta`).value} - Email: ${document.getElementById(`email`).value} - Teléfono: ${document.getElementById(`telefono`).value}`
    }

    let service_id = "default_service";
    let template_id = "template_ATUE1tUl";
    emailjs.send(service_id, template_id, template_params).then(
        function (response) {
            document.getElementById(`msjEnvio`).className = "alert alert-primary my-4";
            document.getElementById(`msjEnvio`).innerText = "Su Consulta fue enviada correctamente";
        }, function (error) {
            console.log("Se Produjo un error" + error);
            document.getElementById(`msjEnvio`).className = "alert alert-danger my-4";
            document.getElementById(`msjEnvio`).innerText = "Ocurrio un error en el envio";

        }
    )
}
