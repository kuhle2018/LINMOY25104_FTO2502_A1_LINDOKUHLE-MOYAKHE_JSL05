const API_URL = "https://jsl-kanban-api.vercel.app/";

/**
 * Fetches tasks from the API with error handling.
 * @returns {Promise<Array>} List of tasks or an error message.
 */
export async function fetchTasks() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch tasks");
    const tasks = await response.json();
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Store locally
    return tasks;
  } catch (error) {
    console.error(error);
    return JSON.parse(localStorage.getItem("tasks")) || []; // Use fallback data
  }
}
