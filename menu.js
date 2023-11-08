const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");
const icon = document.getElementById("icon");

toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  icon.classList.toggle("rotate-90"); // Agregar o quitar la clase de rotación
});

document.addEventListener("click", (event) => {
  if (event.target !== toggleMenu && !menu.contains(event.target)) {
    menu.classList.add("hidden");
    icon.classList.remove("rotate-90"); // Quitar la clase de rotación al cerrar el menú
  }
});
