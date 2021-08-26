
const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const form = document.querySelector("#saludador-form");

form.addEventListener("submit", event => {
    mensaje = "Hola ";
  if(edad.value>30){
      mensaje = mensaje + "señor(a)";
  }

    alert(mensaje + nombre.value);

});

