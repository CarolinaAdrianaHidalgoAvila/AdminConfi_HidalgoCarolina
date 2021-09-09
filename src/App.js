
const tarea = document.querySelector("#tarea-input");
const tarea_output = document.querySelector("#show-tarea");
form.addEventListener("submit", event => {
  event.preventDefault();
  quantity_output.innerHTML = "Tarea: " + tarea.value;
  
});

