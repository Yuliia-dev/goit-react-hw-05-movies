import { useEffect, useState } from 'react';
import ApiService from '../service/movies-api';
import TrendingMovieLink from 'components/TrendingMovieLink/TrendingMovieLink';
import { FormatMovie } from 'components/service/GetFormatData';
import Loader from 'components/Loader/Loader';

const newApi = new ApiService();

export default function HomePages() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      newApi
        .fetchTrendingMovies()
        .then(({ results }) => {
          const formats = FormatMovie(results);
          setMovies(formats);
        })
        .catch(error => setError(error))
        .finally(setLoading(false));
    }, 100);
  }, []);

  return (
    <>
      <div>
        <h1>Trending today</h1>
        {loading && <Loader />}
        <ul>
          {movies &&
            movies.map(movie => (
              <TrendingMovieLink key={movie.id} movie={movie} />
            ))}
        </ul>
      </div>
      {!loading && error && (
        <div>Sorry, there was an error, please try again</div>
      )}
    </>
  );
}
