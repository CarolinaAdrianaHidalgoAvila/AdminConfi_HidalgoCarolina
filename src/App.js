
const tarea = document.querySelector("#tarea-input");
const tareaTipo = document.querySelector("#tipoTarea-input");
const form = document.querySelector("#Tareas-form");
const tarea_output = document.querySelector("#show-tarea");
const tipo_output = document.querySelector("#show-tipo");
form.addEventListener("submit", event => {
  event.preventDefault();
  tarea_output.innerHTML = "Tarea: " + tarea.value;
  tipo_output.innerHTML = "Tipo: " + tareaTipo.value;
  
});

