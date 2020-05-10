import './styles.css';
import apiService from './js/apiService.js';
import updateGalleryMarkup from './js/updateGalleryMarkup.js';
import * as basicLightbox from 'basiclightbox';


const refs = {
  fearchForm: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

refs.fearchForm.addEventListener('submit', event => {
  event.preventDefault();
  apiService.query = event.currentTarget.elements.query.value;

  refs.galleryContainer.innerHTML = '';

  apiService.resetPage();

  refs.loadMoreBtn.classList.add('is-hidden');

  apiService.fetchImg().then(updateGalleryMarkup);

  refs.loadMoreBtn.classList.remove('is-hidden');
});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchImg().then(updateGalleryMarkup);
});

refs.galleryContainer.addEventListener('click', () => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="800" height="600">`,
  );
  instance.show();
});
