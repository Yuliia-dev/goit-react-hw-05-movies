import ApiService from 'components/service/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsList from 'components/ReviewsList/ReviewsList';

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
      {reviews &&
        reviews.map(review => <ReviewsList key={review.id} review={review} />)}
      {!error && reviews && reviews.length === 0 && (
        <div>Sorry, there was an error, please try again</div>
      )}
    </>
  );
}
