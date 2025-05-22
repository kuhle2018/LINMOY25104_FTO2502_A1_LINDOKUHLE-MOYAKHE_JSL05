import { getTasksFromStorage, saveTasksToStorage } from "./storage.js";
import { renderTasks } from "./tasks.js";

const modal = document.getElementById("task-modal");
const closeBtn = document.getElementById("close-modal-btn");
const addTaskBtn = document.getElementById("add-task-btn");
const form = document.getElementById("task-form");

/**
 * Opens the task modal with empty fields for new task creation.
 */
function openNewTaskModal() {
  form.reset();
  modal.showModal();
}

/**
 * Closes the modal when the close button is clicked.
 */
function setupModalCloseHandler() {
  closeBtn.addEventListener("click", () => modal.close());
}

/**
 * Handles form submission and adds a new task.
 */
function handleTaskSubmission(event) {
  event.preventDefault();
  
  const taskTitle = document.getElementById("task-title").value;
  const taskDesc = document.getElementById("task-desc").value;
  const taskStatus = document.getElementById("task-status").value;

  const newTask = {
    id: Date.now(),
    title: taskTitle,
    description: taskDesc,
    status: taskStatus
  };

  const tasks = getTasksFromStorage();
  tasks.push(newTask);
  saveTasksToStorage(tasks);
  
  renderTasks();
  modal.close();
}

addTaskBtn.addEventListener("click", openNewTaskModal);
form.addEventListener("submit", handleTaskSubmission);
setupModalCloseHandler();
