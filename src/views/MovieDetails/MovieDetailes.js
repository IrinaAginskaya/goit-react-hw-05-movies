import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as apiService from '../../services/api';
import MoviePreview from '../../components/Preview/Preview';
import Loader from '../../components/Loader/Loader';

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieById();
  }, [movieId]);

  const fetchMovieById = () => {
    setLoader(true);

    apiService
      .fetchMovieById(movieId)
      .then(movie => setMovie(movie))
      .catch(error => {
        toast('Something went wrong :(');
        setError(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <>
      {loader && <Loader />}
      {movie && <MoviePreview movie={movie} />}

      <p>Additional information</p>
      <div>
        {movie && (
          <nav>
            <NavLink to={`/movies/${movie.id}/cast`} state={{ from: location.state.from }}>
              Cast
            </NavLink>
            <NavLink to={`/movies/${movie.id}/reviews`} state={{ from: location.state.from }}>
              Reviews
            </NavLink>
            <Outlet />
          </nav>
        )}
      </div>
    </>
  );
};
export default MovieDetailsPage;
