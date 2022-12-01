const sidebarOpen = document.querySelector("#open");
const sidebarClose = document.querySelector("#close");
const navbar = document.querySelector("nav");

sidebarOpen.addEventListener("click", open);
sidebarClose.addEventListener("click", close);

function open() {
  navbar.classList.remove("hide");
  sidebarOpen.classList.add("hide");
}

function close() {
  navbar.classList.add("hide");
  sidebarOpen.classList.remove("hide");
}
