import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import ApiService from 'components/service/movies-api';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchMovieItem from 'components/SearchMovieItem/SearchMovieItem';
import { FormatMovie } from 'components/service/GetFormatData';
import Loader from 'components/Loader/Loader';
import {
  Container,
  MovieList,
  ContainerError,
} from '../HomePage/HomePage.styled';

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
            if (results.length === 0) {
              setMovies(null);
              toast.error(
                `Sorry,there are no movie on request ${movieName}. Please try again`
              );
              return;
            }
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
      <Container>
        <MovieList>
          {!loading &&
            movies &&
            movies.map(movie => (
              <SearchMovieItem key={movie.id} movie={movie} />
            ))}
        </MovieList>
      </Container>
      {!loading && error && (
        <ContainerError>
          Sorry, there was an error, please try again
        </ContainerError>
      )}
    </>
  );
}
