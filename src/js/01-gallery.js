// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkUp = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkUp);


 function createGalleryItem (galleryItems) {
     return galleryItems
         .map(({ preview, original, description }) => {
        return `
   <div class="gallery__item">
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
 `;
    })
        .join('');
 }

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


