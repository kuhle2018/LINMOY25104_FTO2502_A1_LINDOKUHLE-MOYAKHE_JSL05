/**
 * Saves the task list to local storage.
 * @param {Array<Object>} tasks - The array of tasks.
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Retrieves tasks from local storage.
 * @returns {Array<Object>} The stored tasks or an empty array.
 */
export function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}
