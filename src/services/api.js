const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '5eedd9576ab43a008551d36a9f8b0c8a';

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export async function fetchPopularMovie() {
  const response = await fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
}

export async function fetchMovieByQuery(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
  );
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
}

export async function fetchMovieById(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
}

export async function fetchMovieCast(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
}

export async function fetchMovieRewiew(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
}
