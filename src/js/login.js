import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

let usuario = document.getElementById("inputUsuario");
let pass = document.getElementById("inputPassword");

window.validarUsuario = function(input) {
    if (input.value == ""){
        input.className = "form-control is-invalid w-75";
        return false;
    }else{
        input.className = "form-control is-valid w-75";
        return true;
    }
}

window.validarPass = function(input) {
    if (input.value == "") {
        input.className = "form-control is-invalid w-75";
        return false;
    } else {
        input.className = "form-control is-valid w-75";
        return true;
    }
}

function ingresar(){ 
    event.preventDefault();
    if(usuario.value == "admin" && pass.value == "admin"){
        window.location.href = "admin.html";
    }else{
        document.getElementById("alertaError").className = "alert alert-danger my-4";
        document.getElementById("alertaError").innerText = "El usuario o contraseña es incorrecto. Intente de nuevo."
    }
}

window.validarForm = function(){
    if (usuario && pass){
        ingresar();
    }else{
        alert("Hay un error.");
    }
}