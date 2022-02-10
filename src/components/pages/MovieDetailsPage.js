import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiService from 'components/service/movies-api';
import { FormatMovieDetailsPage } from '../service/GetFormatData';
import MovieDetailsPageMarkup from 'components/MovieDetailsPageMarkup/MovieDetailsPageMarkup';
import Loader from 'components/Loader/Loader';

const newApi = new ApiService();

export default function MovieDetailsPages() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      newApi
        .fetchMovieDetails(movieId)
        .then(results => {
          const formats = FormatMovieDetailsPage(results);
          setMovie(formats);
        })
        .catch(error => setError(error))
        .finally(setLoading(false));
    }, 100);
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <Link to={location?.state?.from ?? '/'}>Back</Link>
      {!loading && movie && <MovieDetailsPageMarkup movie={movie} />}
      {!loading && error && (
        <div>Sorry, there was an error, please try again</div>
      )}
    </>
  );
}
