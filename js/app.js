const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-open");
  sidebarToggle.classList.toggle("sidebar-toggle-open");
});

document.addEventListener("click", (event) => {
  const isInsideSidebar = sidebar.contains(event.target);
  const isInsideToggle = sidebarToggle.contains(event.target);

  if (!isInsideSidebar && !isInsideToggle) {
    sidebar.classList.remove("sidebar-open");
    sidebarToggle.classList.remove("sidebar-toggle-open");
  }
});
