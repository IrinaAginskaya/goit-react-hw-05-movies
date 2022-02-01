import { useState, useEffect } from 'react';
import * as apiServices from '../../services/api';
import MoviesList from '../../components/List/MovieList';
import Loader from '../../components/Loader/Loader';
import { TitleStyle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPopularMovie();
  }, []);

  const fetchPopularMovie = () => {
    setLoader(true);

    apiServices
      .fetchPopularMovie()
      .then(({ results }) => setMovies(results))
      .catch(error => {
        alert('Something is going wrong');
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  return (
    <>
      {loader && <Loader />}
      {movies && (
        <>
          <TitleStyle>Trending today</TitleStyle>
          <MoviesList movies={movies} />
        </>
      )}
    </>
  );
};

export default HomePage;
