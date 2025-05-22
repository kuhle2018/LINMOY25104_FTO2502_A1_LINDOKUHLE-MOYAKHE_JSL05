/**
 * Fetches tasks from an API endpoint.
 * @returns {Promise<Array<Object>>} A promise resolving to an array of tasks.
 */
export async function fetchTasksFromAPI() {
  try {
    const response = await fetch("https://example.com/tasks"); // Replace with actual API URL
    if (!response.ok) throw new Error("Failed to fetch tasks");
    
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("API Error:", error);
    return []; // Return empty array in case of failure
  }
}
