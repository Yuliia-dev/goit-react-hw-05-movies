import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ApiService from '../../service/movies-api';
import { FormatMovieDetailsPage } from '../../service/GetFormatData';
import MovieDetailsPageMarkup from '../../components/MovieDetailsPageMarkup/MovieDetailsPageMarkup';
import Loader from '../../components/Loader/Loader';
import { ContainerError } from './MovieDetailsPage.styled';

const newApi = new ApiService();

export default function MovieDetailsPages() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const ref = useRef(location);

  useEffect(() => {
    setLoading(true);
    newApi
      .fetchMovieDetails(movieId)
      .then(results => {
        const formats = FormatMovieDetailsPage(results);
        setMovie(formats);
      })
      .catch(error => setError(error))
      .finally(setLoading(false));
  }, [movieId]);

  let refTo = ref.current.state?.from
    ? ref.current.state?.from.pathname + ref.current.state?.from.search
    : '/';

  return (
    <>
      {loading && <Loader />}
      {!loading && movie && (
        <MovieDetailsPageMarkup movie={movie} pathTo={refTo} />
      )}
      {!loading && error && (
        <ContainerError>
          Sorry, there was an error, please try again
        </ContainerError>
      )}
    </>
  );
}
