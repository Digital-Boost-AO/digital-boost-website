const buttonMenuOpener = document.querySelector("#menu-opener");
const header = document.querySelector("header#main-header");
const buttonIcon = document.querySelector("i#button-icon");

buttonMenuOpener.addEventListener("click", () => {
  if (header.style.height === "100px") {
    header.style.height = "100vh";
    toggleClasses();
    return;
  }

  toggleClasses();
  header.style.height = "100px";
});

function toggleClasses() {
  buttonIcon.classList.toggle("fa-bars");
  buttonIcon.classList.toggle("fa-times");
}
