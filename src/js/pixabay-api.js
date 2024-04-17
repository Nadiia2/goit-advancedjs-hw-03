export async function fetchImages(value) {
  const BASE_URL = 'https://pixabay.com/api';

  const searchParams = new URLSearchParams({
    key: '43435649-9580751e4a32127232b1b0155',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const response = await fetch(`${BASE_URL}/?${searchParams}`);
  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();
  return data.hits;
}
