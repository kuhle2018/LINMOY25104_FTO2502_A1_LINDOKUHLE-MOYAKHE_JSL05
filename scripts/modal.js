import { renderTasks } from "./tasks.js";

const modal = document.getElementById("task-modal");
const closeBtn = document.getElementById("close-modal-btn");
const addTaskBtn = document.getElementById("add-task-btn");
const form = document.getElementById("task-form");

/**
 * Opens the modal with task details and hides Add Task button.
 * @param {Object} task - The task object.
 */
function openTaskModal(task) {
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;

  addTaskBtn.style.display = "none"; // Hide the Add Task button
  modal.showModal();
}

/**
 * Close modal and show Add Task button again.
 */
closeBtn.addEventListener("click", () => {
  modal.close();
  addTaskBtn.style.display = "block"; // Show the Add Task button again
});

/**
 * Setup modal close behavior.
 */
function setupModalCloseHandler() {
  closeBtn.addEventListener("click", () => modal.close());
}

setupModalCloseHandler();
