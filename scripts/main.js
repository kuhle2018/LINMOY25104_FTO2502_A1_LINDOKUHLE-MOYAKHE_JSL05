import { initTasks } from "./tasks.js";
import { setupModalCloseHandler } from "./modal.js";

// Initialize everything when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  initTasks();
  setupModalCloseHandler();
});
