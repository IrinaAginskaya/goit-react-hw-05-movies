import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import * as apiService from '../../services/api';
import MoviePreview from '../../components/Preview/Preview';
import Loader from '../../components/Loader/Loader';
import { MovieStyle } from './MovieDetailes.styled';
import { NavLinkStyle } from '../../components/Navigation/Navigation.styled';

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
        alert('Something is going wrong');
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

      <MovieStyle>Additional information</MovieStyle>
      <div>
        {movie && (
          <nav>
            <NavLinkStyle to={`/movies/${movie.id}/cast`} state={{ from: location.state.from }}>
              Cast
            </NavLinkStyle>
            <NavLinkStyle to={`/movies/${movie.id}/reviews`} state={{ from: location.state.from }}>
              Reviews
            </NavLinkStyle>
            <Outlet />
          </nav>
        )}
      </div>
    </>
  );
};
export default MovieDetailsPage;
