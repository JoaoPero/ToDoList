let painelTasks = document.querySelector("#painelTasks");
let tasks = document.querySelector("#tasks");
painelTasks.classList.add("show");
tasks.classList.add("show");
let totalTasks = 0;

document.querySelector("#push").addEventListener("click", () => {
  let newLi = document.createElement("li");
  let newTask = document.querySelector("#newtask input");

  //verficando se o input esta preenchido
  if (newTask.value == "") {
    alert("Preencha uma tarefa");
    newTask.focus();
  } else {
    newLi.innerHTML = `${newTask.value} <span class="btn-del">&#128465;</span> `;
    totalTasks += 1;
    tasks.appendChild(newLi);
    newTask.focus();
    newTask.value = "";

    //Exibindo os paineis
    painelTasks.classList.remove("show");
    tasks.classList.remove("show");
    painelTasks.innerHTML = `Tarefas pendentes: ${totalTasks}`;
  }

  newLi.querySelector(".btn-del").addEventListener("click", () => {
    newLi.remove();
    totalTasks -= 1;
    if (totalTasks > 0) {
      painelTasks.innerHTML = `Tarefas pendentes: ${totalTasks}`;
    } else {
      //Ocultandoo os paineis se as tarefas forem = 0
      painelTasks.classList.add("show");
      tasks.classList.add("show");
    }
  });
});
