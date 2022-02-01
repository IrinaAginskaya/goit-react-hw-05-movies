import { useLocation, useNavigate } from 'react-router-dom';
import { PreviewStyle } from './Preview.styled';

const MoviePreview = ({ movie }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const photo = 'https://image.tmdb.org/t/p/w500';
  const defaultPhoto = '../../../src/image/960.jpg';

  const onGoBack = () => {
    location.state && location.state.from ? navigate(location.state.from) : navigate('/');
  };

  const { title, poster_path, overview, genres, vote_average } = movie;
  return (
    <PreviewStyle>
      <div>
        <button type="button" onClick={onGoBack}>
          Back
        </button>
      </div>
      <div>
        {poster_path ? (
          <img src={`${photo}${poster_path}`} alt={title} />
        ) : (
          <img src={defaultPhoto} alt="" />
        )}
      </div>
      <div>
        <h2>{title}</h2>
        <span>User score: {vote_average && vote_average * 10}%</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <div>
          <h3>Genres</h3>
          {genres && (
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </PreviewStyle>
  );
};

export default MoviePreview;
