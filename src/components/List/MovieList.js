import { useLocation } from 'react-router-dom';
import { MovieListStyle, LinkStyle } from './MovieList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListStyle>
      {movies.map(movie => (
        <li key={movie.id}>
          <LinkStyle to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </LinkStyle>
        </li>
      ))}
    </MovieListStyle>
  );
};
export default MoviesList;
