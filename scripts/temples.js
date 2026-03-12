const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    menuButton.textContent = "X";
  } else {
    menuButton.textContent = "☰";
  }
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  "Last Modified: " + document.lastModified;
