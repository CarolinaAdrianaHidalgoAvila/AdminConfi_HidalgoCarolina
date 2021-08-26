
const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const hora = document.querySelector("#hora-input");
const form = document.querySelector("#saludador-form");

form.addEventListener("submit", event => {
    mensaje = "Hola, ";
    hombreJoven = " joven ";
    hombreAdulto = " señor ";
    mujerJoven = " señorita ";
    mujerAdulta = " señora ";

  if(edad.value>30){
      if(genero.value ="Mujer"){
        mensajeg =  mujerAdulta;
      }else{
        mensajeg = hombreAdulto;
      }
  }else{
    if(genero.value = "Mujer"){
        mensajeg = mujerJoven;
      }else{
        mensajeg = hombreJoven;
      }
  }
  if(hora.value<"12:00"){
      mensajeh = " Buenos dias "
  }else{
    mensajeh = " Buenos tardes "
  }
    alert(mensaje + mensajeh + mensajeg + nombre.value);

});

