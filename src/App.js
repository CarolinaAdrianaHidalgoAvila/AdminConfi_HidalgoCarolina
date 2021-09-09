
const tarea = document.querySelector("#tarea-input");
const tareaTipo = document.querySelector("#tipoTarea");
const form = document.querySelector("#Tareas-form");
const tarea_output = document.querySelector("#show-tarea");
form.addEventListener("submit", event => {
  event.preventDefault();
  tarea_output.innerHTML = "Tarea: " + tarea.value;
  if(tareaTipo.value ="Work"){
    tarea_output.innerHTML = "Tarea: " + tarea.value + "[Work]";
  }else{
    tarea_output.innerHTML = "Tarea: " + tarea.value + "[Personal]";
  }
  
});

