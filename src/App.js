
const tarea = document.querySelector("#tarea-input");
const form = document.querySelector("#Tareas-form");
const tarea_output = document.querySelector("#show-tarea");
form.addEventListener("submit", event => {
  event.preventDefault();
  tarea_output.innerHTML = "Tarea: " + tarea.value;
  
});

