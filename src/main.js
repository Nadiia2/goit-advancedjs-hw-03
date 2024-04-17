import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { generateImageHTML } from './js/render-functions.js';

const form = document.querySelector('.form');
const imageList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
});

// gallery.on('shown.simplelightbox', () => {
//   const wrapper = document.querySelector('.sl-wrapper');
//   const counter = document.querySelector('.sl-counter');
//   const closeBtn = document.querySelector('.sl-close');
//   const navigation = document.querySelectorAll(
//     '.sl-wrapper .sl-navigation button'
//   );
//   wrapper.style.backgroundColor = 'rgba(46, 47, 66, 0.8)';
//   counter.style.color = '#fff';
//   counter.style.top = '16px';
//   closeBtn.style.color = '#fff';
//   navigation.forEach(item => (item.style.color = '#fff'));
// });

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const searchRequest = event.currentTarget.elements.input.value;

  imageList.innerHTML = '';

  if (!searchRequest.trim()) {
    iziToast.show({
      theme: 'light',
      message: `Search field can not be empty!`,
      messageSize: '20px',
      messageColor: '#f80303',
      backgroundColor: '#ebe268',
      position: 'topRight',
      timeout: 5000,
    });
    return;
  }

  loader.classList.remove('hidden-loader');

  fetchImages(searchRequest)
    .then(data => {
      if (data.length === 0) {
        iziToast.show({
          theme: 'dark',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageSize: '16px',
          messageColor: '#f80303',
          backgroundColor: '#ebe268',
          position: 'topRight',
          timeout: 5000,
        });
      }
      imageList.innerHTML = generateImageHTML(data);
      gallery.refresh();
    })
    .catch(handleError)
    .finally(() => loader.classList.add('hidden-loader'));

  event.currentTarget.reset();
}

function handleError(err) {
  console.error(err);
  imageList.innerHTML = '';
  iziToast.show({
    theme: 'dark',
    message: 'Sorry, there is a problem with connection to the server.',
    messageSize: '16px',
    messageColor: 'white',
    backgroundColor: '#EF4040',
    position: 'center',
    timeout: 5000,
  });
}
