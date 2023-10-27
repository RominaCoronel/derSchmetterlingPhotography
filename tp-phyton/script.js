
window.onload = function () {


    elemH = document.querySelectorAll('.Gallery');


    for (var i = 0; i < elemH.length; i++) {
        elemH[i].onmouseover = function () { return this.style.color = "white"; }
        elemH[i].onmouseout = function () { return this.style.color = "#a8aca4"; }
    }

}




window.addEventListener('load', iniciar, false);

function iniciar() {

    var imagen = document.getElementById('logo03');

    imagen.addEventListener('mouseover', cambio, false);
    imagen.addEventListener('mouseout', restaurar, false);
}

function cambio() {
    var imagen = document.getElementById('logo03').src = "camera.png";

}

function restaurar() {
    var imagen = document.getElementById('logo03').src = "logo03.png";
}

//ESTA ES LA PARTE DE LA VALIDACION
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    // Detén el envío del formulario
    event.preventDefault();

    // Realiza la validación
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar los datos al servidor
        this.submit();
    }
});

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    // Realiza las validaciones, por ejemplo:
    if (nombre === "" || email === "" || !esValidoEmail(email)) {
        alert("Por favor, completa los campos correctamente.");
        return false;
    }

    return true;
}

function esValidoEmail(email) {
    // Realiza la validación del formato del correo electrónico
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}