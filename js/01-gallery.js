import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const modal = basicLightbox.create("");

  // функція для створення HTML - структури галереї у вигляді рядка
  function createGalleryHTML(items) {
    return items
      .map(
        (item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
      )
      .join("");
  }

  // Функція для відкриття модального вікна з великим зображенням
  function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName === "IMG") {
      const source = event.target.dataset.source;
      const image = `<img src="${source}" alt ="Велике зображення" />`;

      modal.element().innerHTML = image;
      modal.show();

      //Додати обробники подій для закриття модального вікна
      moda.element().addEventListener("click", closeModal);
      document.addEventListener("keydown", closeModalOnEscape);
    }
  }

  // Функція закриття модального вікна
  function closeModal() {
    modal.close();
    modal.element().removeEventListener("click", closeModal);
    document.removeEventListener("keydown", closeModalOnEscape);
  }

  // Функція для закриття модального вікна при натисканні клавіші "Escape"
  function closeModalOnEscape(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  // створення HTML- структури галереї
  gallery.innerHTML = createGalleryHTML(galleryItems);

  // Використання делегування подій для слухання кліків на контейнері галереї
  gallery.addEventListener("click", openModal);
});
