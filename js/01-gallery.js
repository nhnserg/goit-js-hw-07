import * as basicLightbox from "basiclightbox";
import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery", "./gallery-items.js");

gallery.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") return;

  event.preventDefault();
  const source = event.target.src;
  const instance = basicLightbox.create(`
  <img src="${source}" alt="Image description">
`);

  instance.show();


  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.visible()) {
      lightbox.close();
    }
  });
});
console.log(galleryItems);
