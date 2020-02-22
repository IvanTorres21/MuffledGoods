/*
    JAVASCRIPT PARA LA PÁGINA WEB BOOTSTRAP 
    AUTOR: IVÁN TORRES DE OSES
    VERSION: 1.1.0          FECHA: 20/02/2020
*/


/* SMOOTH SCROLL SNIPPET DE W3SCHOOLS*/
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/* FUNCIÓN PARA COMPROBAR QUE LAS CONTRASEÑAS SEAN IGUALES Y ACTUALIZAR LOS MENSAJES*/

function comprobarRegistro(form) {

  var passwCheck = document.getElementById("missmatch");

  if (form.password.value != "" && form.password.value != form.passwordC.value) { // Comprobamos que sean iguales

    passwCheck.classList.remove('d-none'); //En caso de que no sean iguales se muestra un mensaje
    return false;
  } else {

    if (passwCheck.classList.contains('d-none')) { //En caso de que sea igual comprobamos si el mensaje esta
                                                   //visible para saber si hay que ocultarlo
      document.getElementById("success").classList.add("d-none");
    } else {

      document.getElementById("success").classList.remove("d-none"); //Mostramos un mensaje de registro aceptado
      return true;

    }
  }
}