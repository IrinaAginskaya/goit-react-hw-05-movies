import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as apiServices from '../../services/api';
import MoviesList from '../../components/List/MovieList';
import Loader from '../../components/Loader/Loader';

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
        toast('Trouble. Something is wrong :(');
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  return (
    <>
      {loader && <Loader />}
      {movies && (
        <>
          <h1>Trending today</h1>
          <MoviesList movies={movies} />
        </>
      )}
    </>
  );
};

export default HomePage;
