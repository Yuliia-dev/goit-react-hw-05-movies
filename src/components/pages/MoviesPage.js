import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ApiService from 'components/service/movies-api';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchMovieLink from 'components/SearchMovieLink/SearchMovieLink';
import { FormatMovie } from 'components/service/GetFormatData';
import Loader from 'components/Loader/Loader';

const newApi = new ApiService();

export default function MoviesPages() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  searchParams.get('query');

  useEffect(() => {
    if (movieName) {
      setLoading(true);
      setTimeout(() => {
        setMovies(null);
        newApi
          .fetchMovieForQuery(movieName)
          .then(({ results }) => {
            const formats = FormatMovie(results);
            setMovies(formats);
            setSearchParams({ query: movieName });
          })
          .catch(error => setError(error))
          .finally(setLoading(false));
      }, 100);
    }
  }, [movieName, setSearchParams]);

  const handleFormSubmit = name => {
    setMovieName(name);
  };

  return (
    <>
      {<SearchForm onSubmit={handleFormSubmit} />}
      {loading && <Loader />}
      <ul>
        {!loading &&
          movies &&
          movies.map(movie => <SearchMovieLink key={movie.id} movie={movie} />)}
      </ul>
      {!loading && error && (
        <div>Sorry, there was an error, please try again</div>
      )}
    </>
  );
}
