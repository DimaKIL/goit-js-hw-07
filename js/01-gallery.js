import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const globalDiv = document.querySelector('.gallery');
for(let galleryItem of galleryItems){
    globalDiv.insertAdjacentHTML('beforeend',`<div class="gallery__item"><a class="gallery__link" onclick="return false" href="${galleryItem.original}"> <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}"  alt="${galleryItem.description}" /></a></div>`);
    console.log(globalDiv);
}
globalDiv.addEventListener('click', funk);
function funk(evt){
    const dataValue = evt.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
	<img class="gallery__item" src="${dataValue}" alt="Картинка не подгружаеться">
`)

instance.show(() => console.log('lightbox now visible'))
}