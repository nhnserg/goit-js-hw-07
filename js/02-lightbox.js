import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  // функція для створення HTML - структури галереї у вигляді рядка
  function createGalleryHTML(items) {
    return items
      .map(
        (item) => `<li class="gallery__item">
          <a class="gallery__link" 
          href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}" />
          </a>
       </li>`
      )
      .join("");
  }
  // створення HTML- структури галереї
  gallery.innerHTML = createGalleryHTML(galleryItems);
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });
});
