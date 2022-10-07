import { galleryItems } from './gallery-items.js';

const globalDiv = document.querySelector('.gallery');
function createGalleryMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item"><a class="gallery__link" onclick="return false" href="${original}"> <img class="gallery__image" src="${preview}" data-source="${original}"  alt="${description}" /></a></div>
      `;
      })
      .join("");
  }

  globalDiv.innerHTML = createGalleryMarkup(galleryItems);

  new SimpleLightbox('.gallery a');

