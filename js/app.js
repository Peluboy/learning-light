const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-open");
  sidebarToggle.classList.toggle("sidebar-toggle-open"); // Add this line
});

document.addEventListener("click", (event) => {
  const isInsideSidebar = sidebar.contains(event.target);
  const isInsideToggle = sidebarToggle.contains(event.target);

  if (!isInsideSidebar && !isInsideToggle) {
    sidebar.classList.remove("sidebar-open");
    sidebarToggle.classList.remove("sidebar-toggle-open"); // Add this line
  }
});

// document.addEventListener("click", (event) => {
//   // Check if the clicked element is inside the sidebar or sidebar toggle button
//   const isInsideSidebar = sidebar.contains(event.target);
//   const isInsideToggle = sidebarToggle.contains(event.target);

//   // If the clicked element is outside the sidebar and sidebar toggle button, close the sidebar
//   if (!isInsideSidebar && !isInsideToggle) {
//     sidebar.classList.remove("sidebar-open");
//   }
// });
