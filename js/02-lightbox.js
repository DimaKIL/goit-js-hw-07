import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const globalDiv = document.querySelector('.gallery');
for(let galleryItem of galleryItems){
    globalDiv.insertAdjacentHTML('beforeend',`<a class="gallery__link" onclick="return false" href="${galleryItem.original}"> <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}"  alt="${galleryItem.description}" /></a>`);
    console.log(globalDiv);
}
// const dataValue = evt.target.getAttribute('data-source');
new SimpleLightbox('.gallery a');

//  gallery.on('show.simplelightbox', function () {
//      `<img class="gallery__item" src="${dataValue}" alt="Картинка не подгружаеться">`
//  });
