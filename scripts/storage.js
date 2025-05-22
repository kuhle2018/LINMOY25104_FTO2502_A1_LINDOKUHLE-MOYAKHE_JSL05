/**
 * Saves tasks to local storage.
 * @param {Array} tasks - List of tasks.
 */
export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Loads tasks from local storage or API.
 * @returns {Array} List of stored tasks.
 */
export function loadTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}
