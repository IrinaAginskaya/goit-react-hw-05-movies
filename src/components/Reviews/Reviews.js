import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as apiService from '../../services/api';
import Loader from '../Loader/Loader';
import { ReviewsStyle } from './Reviews.styled';

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
          <ReviewsStyle>
            {reviews.length > 0 ? (
              reviews.map(({ content, author, id }) => (
                <li key={id}>
                  <p>Author: {author}</p>
                  <p>{content}</p>
                </li>
              ))
            ) : (
              <p>There are no reviews for this movie</p>
            )}
          </ReviewsStyle>
        </div>
      }
    </>
  );
};

export default Reviews;
