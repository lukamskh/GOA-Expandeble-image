const container = document.querySelector(".container");
const images = container.querySelectorAll("img");

images.forEach((img) => img.setAttribute("tabindex", "0"));

images.forEach((img) => {
  img.addEventListener("focus", () => {
    images.forEach((i) => i.classList.remove("expanded"));
    img.classList.add("expanded");
  });
  img.addEventListener("blur", () => {
    img.classList.remove("expanded");
  });
});
