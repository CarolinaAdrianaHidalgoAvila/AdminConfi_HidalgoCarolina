
const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const form = document.querySelector("#saludador-form");

form.addEventListener("submit", event => {
    mensaje = "Hola ";
    hombreJoven = "joven ";
    hombreAdulto = "señor ";
    mujerJoven = "señorita ";
    mujerAdulta = "señora ";

  if(edad.value>30){
      if(genero.value ="Mujer"){
        mensaje = mensaje + mujerAdulta;
      }else{
        mensaje = mensaje + hombreAdulto;
      }
  }else{
    if(genero.value = "Mujer"){
        mensaje = mensaje + mujerJoven;
      }else{
        mensaje = mensaje + hombreJoven;
      }
  }
    alert(mensaje + nombre.value);

});

