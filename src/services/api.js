const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '5eedd9576ab43a008551d36a9f8b0c8a';

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export function fetchPopularMovie() {
  return;
  fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

export function fetchMovieByQuery(query) {
  return;
  fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

export function fetchMovieById(movieId) {
  return;
  fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

export function fetchMovieCast(movieId) {
  return;
  fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

export function fetchMovieRewiew(movieId) {
  return;
  fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    },
  );
}
