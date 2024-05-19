const buttonMenuOpener = document.querySelector("#menu-opener");
const header = document.querySelector("header#main-header");

buttonMenuOpener.addEventListener("click", () => {
  if (header.style.height === "120px") {
    header.style.height = "100vh";
    return;
  }

  header.style.height = "120px";
});
