import { fetchTasks } from "./api.js";
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from "./storage.js";

/**
 * Renders tasks into their respective columns.
 * @param {Array} tasks - List of tasks.
 */
function renderTasks(tasks) {
  document.querySelectorAll(".tasks-container").forEach(container => {
    container.innerHTML = "";
  });

  tasks.forEach(task => {
    const taskElement = document.createElement("div");
    taskElement.className = "task-div";
    taskElement.textContent = task.title;
    taskElement.dataset.taskId = task.id;

    const container = document.querySelector(`.column-div[data-status="${task.status}"] .tasks-container`);
    if (container) container.appendChild(taskElement);
    
    taskElement.addEventListener("click", () => openTaskModal(task));
  });
}

/**
 * Initializes tasks from API or local storage.
 */
export async function initTasks() {
  const tasks = await fetchTasks();
  renderTasks(tasks);
  saveTasksToLocalStorage(tasks);
}

document.addEventListener("DOMContentLoaded", initTasks);
