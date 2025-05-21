/**
 * Opens task modal with details.
 * @param {Object} task - Task data.
 */
export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;

  modal.showModal();
}

/**
 * Closes task modal.
 */
export function setupModalCloseHandler() {
  document.getElementById("close-modal-btn").addEventListener("click", () => {
    document.getElementById("task-modal").close();
  });
}
