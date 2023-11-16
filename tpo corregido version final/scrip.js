// cambio imagen logo

window.addEventListener('load', iniciar, false);

function iniciar() {

    var imagen = document.getElementById('logo03');

    imagen.addEventListener('mouseover', cambio, false);
    imagen.addEventListener('mouseout', restaurar, false);
}

function cambio() {
    var imagen = document.getElementById('logo03').src = "img/camera.png";

}

function restaurar() {
    var imagen = document.getElementById('logo03').src = "img/logo03.png";
}



//validacion formulario

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  if (nombre.length === 0 || apellido.length === 0 || email.length === 0  || mensaje.length === 0 ) {
      evento.preventDefault(); // Evita que se envíe el formulario
      alert("Por favor, completa correctamente todos los campos.");
      return;
    }

}


let boton01 = document.getElementById("borrar");
boton01.onclick = function borrarform() {

   document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensaje").value = "";
}
  