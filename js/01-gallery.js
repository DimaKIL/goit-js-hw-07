import { galleryItems } from './gallery-items.js';

console.log(galleryItems);



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

globalDiv.addEventListener('click', (evt) =>{
  if(evt.target.nodeName == "IMG"){
    const dataValue = evt.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
	<img class="gallery__item" src="${dataValue}" alt="Картинка не подгружаеться">
`)
instance.show(() => console.log('lightbox now visible'))
  }

});


