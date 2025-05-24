import { initialTasks } from "./initialData.js";

/**
 * Creates a single task DOM element.
 * @param {Object} task - Task data object.
 * @param {string} task.title - Title of the task.
 * @param {number} task.id - Unique task ID.
 * @param {string} task.status - Status column: 'todo', 'doing', or 'done'.
 * @returns {HTMLElement} The created task div element.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}

/**
 * Finds the task container element based on task status.
 * @param {string} status - The task status ('todo', 'doing', or 'done').
 * @returns {HTMLElement|null} The container element, or null if not found.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders all tasks from initial data to the UI.
 * Groups tasks by status and appends them to their respective columns.
 * @param {Array<Object>} tasks - Array of task objects.
 */
function renderTasks(tasks) {
  tasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  });
}

/**
 * Opens the modal dialog with pre-filled task details.
 * @param {Object} task - The task object to display in the modal.
 */
function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

/**
 * Sets up modal close behavior.
 */
function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("add-new-task-btn");
  const taskModal = document.getElementById("task-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const createTaskBtn = document.getElementById("create-task-btn");
  const body = document.body;

  // Open Task Modal
  addTaskBtn.addEventListener("click", () => {
    taskModal.showModal();
  });

  // Close Task Modal
  closeModalBtn.addEventListener("click", () => {
    taskModal.close();
  });

  // Create Task and Append to Column
  createTaskBtn.addEventListener("click", () => {
    const taskTitle = document.getElementById("task-title").value;
    const taskDesc = document.getElementById("task-desc").value;
    const taskStatus = document.getElementById("task-status").value;

    if (taskTitle.trim()) {
      const taskElement = document.createElement("div");
      taskElement.className = "task-card";
      taskElement.innerHTML = `<h4>${taskTitle}</h4><p>${taskDesc}</p>`;
      taskElement.style.backgroundColor = "#6A0DAD"; // Purple styling

      document.querySelector(`[data-status="${taskStatus}"] .tasks-container`).appendChild(taskElement);
      taskModal.close();
    }
  });

  // Theme Toggle using a Clickable Bar
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Save preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // On load, set theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  // Hide sidebar functionality (if you want to keep it)
  const hidebarBtn = document.getElementById("hidebar");
  if (hidebarBtn) {
    hidebarBtn.addEventListener("click", () => {
      document.getElementById("side-bar-div").classList.toggle("hidden");
    });
  }

  // Ensure Buttons Stay Purple
  document.querySelectorAll(".task-card, .board-btn").forEach(element => {
    element.style.backgroundColor = "#6A0DAD"; // Ensures consistent purple styling
  });

  // Initialize board and modal handlers
  clearExistingTasks();
  renderTasks(initialTasks);
  setupModalCloseHandler();
});

// (No more code after this)