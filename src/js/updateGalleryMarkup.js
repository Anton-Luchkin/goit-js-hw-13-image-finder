import cardTpl from '../tamplates/imgCardTpl.hbs';

const refs = {
    galleryContainer: document.querySelector('.gallery'),
  };

function updateGalleryMarkup(hits) {
    const markup = cardTpl(hits);
  
    refs.galleryContainer.insertAdjacentHTML('beforeend', markup);

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth'
    });
    
  }

   export default updateGalleryMarkup;