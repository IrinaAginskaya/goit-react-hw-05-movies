import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { CastStyle } from './Cast.styled';

import * as apiService from '../../services/api';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const photo = 'https://image.tmdb.org/t/p/w500';
  const defaultPhoto = '../../../src/image/960.jpg';

  useEffect(() => {
    fetchMovieCast();
  }, [movieId]);

  const fetchMovieCast = () => {
    setLoader(true);

    apiService
      .fetchMovieCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(error => {
        setError(error);
      })
      .finally(setLoader(false));
  };

  return (
    <>
      {loader && <Loader />}
      {cast && (
        <div>
          <CastStyle>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                {profile_path ? (
                  <img src={`${photo}${profile_path}`} alt={name} />
                ) : (
                  <img src={defaultPhoto} alt="" />
                )}
                {name}
                <span>Character: {character}</span>
              </li>
            ))}
          </CastStyle>
        </div>
      )}
    </>
  );
};

export default Cast;
