import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as apiService from '../../services/api';
import Loader from '../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReview();
  }, [movieId]);

  const fetchMovieReview = () => {
    setLoader(true);

    apiService
      .fetchMovieRewiew(movieId)
      .then(({ results }) => setReviews(results))

      .catch(error => {
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  return (
    <>
      {loader && <Loader />}
      {
        <div>
          <ul>
            {reviews.length > 0 ? (
              reviews.map(({ content, author, id }) => (
                <li key={id}>
                  <p>Author: {author}</p>
                  <p>{content}</p>
                </li>
              ))
            ) : (
              <p>We don't have any reviews for this movie</p>
            )}
          </ul>
        </div>
      }
    </>
  );
};

export default Reviews;
