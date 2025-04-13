import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMore();
  showLoader();
  form.reset();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
      if (data.hits.length < totalHits) {
        showLoadMore();
      }
    }
  } catch (error) {
    iziToast.error({
      message: 'Oops! Something went wrong.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();
  hideLoadMore();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / 15);
    if (currentPage >= totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      hideLoadMore();
    } else {
      showLoadMore();
    }

    smoothScroll();
  } catch (error) {
    iziToast.error({
      message: 'Oops! Something went wrong.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});

function showLoadMore() {
  loadMoreBtn.classList.remove('hidden');
}

function hideLoadMore() {
  loadMoreBtn.classList.add('hidden');
}

function smoothScroll() {
  const card = document.querySelector('.gallery-item');
  if (card) {
    const { height } = card.getBoundingClientRect();
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
}
