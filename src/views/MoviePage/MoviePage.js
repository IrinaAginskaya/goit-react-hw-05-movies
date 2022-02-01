import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as apiService from '../../services/api';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/List/MovieList';

const MoviesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoader(true);
    if (query.trim() === '') {
      return;
    }
    fetchMovieByQuery();
  }, [query]);

  useEffect(() => {
    const queryBySearch = new URLSearchParams(location.search).get('query') ?? '';
    if (queryBySearch) {
      setQuery(queryBySearch);
    }
  }, [navigate, location]);
  const fetchMovieByQuery = () => {
    setLoader(true);

    apiService
      .fetchMovieByQuery(query)
      .then(({ results }) => setMovies(results))
      .then(
        navigate({
          ...location,
          search: `query=${query}`,
        }),
      )

      .catch(error => {
        alert('Something is going wrong');
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  const onSearchQuery = queryBySearch => {
    setMovies([]);
    setQuery(queryBySearch);
  };

  return (
    <>
      {<SearchBar onSubmit={onSearchQuery} />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
export default MoviesPage;
