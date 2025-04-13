import axios from 'axios';

const API_KEY = '49660874-601210469fa4941a8e9bed6bf';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
