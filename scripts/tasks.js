import { getTasksFromStorage } from "./storage.js";

/**
 * Creates a single task DOM element.
 * @param {Object} task - Task data object.
 * @returns {HTMLElement} The created task div element.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  // Clicking on task opens modal
  taskDiv.addEventListener("click", () => openTaskModal(task));

  return taskDiv;
}

/**
 * Renders tasks in their respective columns.
 */
export function renderTasks() {
  const tasks = getTasksFromStorage();
  
  // Clear previous tasks before re-rendering
  document.querySelectorAll(".tasks-container").forEach((container) => container.innerHTML = "");

  tasks.forEach((task) => {
    const container = document.querySelector(`.column-div[data-status="${task.status}"] .tasks-container`);
    if (container) container.appendChild(createTaskElement(task));
  });
}
