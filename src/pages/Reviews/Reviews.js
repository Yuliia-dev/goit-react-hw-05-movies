import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../../service/movies-api';
import ReviewsList from '../../components/ReviewsList/ReviewsList';
import { ContainerReviews } from './Reviews.styled';

const newApi = new ApiService();

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    newApi
      .fetchMovieReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      <div>
        <ul>
          {reviews &&
            reviews.map(review => (
              <ReviewsList key={review.id} review={review} />
            ))}
        </ul>
      </div>

      {!error && reviews && reviews.length === 0 && (
        <ContainerReviews>
          We don't have any reviews for this movie
        </ContainerReviews>
      )}
      {error && (
        <ContainerReviews>
          Sorry, there was an error, please try again
        </ContainerReviews>
      )}
    </>
  );
}
