import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import ApiService from '../../service/movies-api';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchMovieItem from '../../components/SearchMovieItem/SearchMovieItem';
import { FormatMovie } from '../../service/GetFormatData';
import Loader from '../../components/Loader/Loader';
import {
  Container,
  MovieList,
  ContainerError,
} from '../HomePage/HomePage.styled';

const newApi = new ApiService();

export default function MoviesPages() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = searchParams.get('query');
  const location = useLocation();
  const ref = useRef(location);

  useEffect(() => {
    if (movieName) {
      setLoading(true);
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
    }
    if (query) {
      setLoading(true);
      setMovies(null);
      newApi
        .fetchMovieForQuery(query)
        .then(({ results }) => {
          const formats = FormatMovie(results);
          setMovies(formats);
          if (results.length === 0) {
            setMovies(null);
            toast.error(
              `Sorry,there are no movie on request ${query}. Please try again`
            );
            return;
          }
        })
        .catch(error => setError(error))
        .finally(setLoading(false));
    }
  }, [movieName, query, setSearchParams]);

  const handleFormSubmit = name => {
    setMovieName('');
    setMovieName(name);
  };

  return (
    <>
      {<SearchForm onSubmit={handleFormSubmit} />}
      {loading && <Loader />}
      <Container>
        <MovieList>
          {movies &&
            ref.current &&
            movies.map(movie => (
              <SearchMovieItem
                key={movie.id}
                movie={movie}
                location={ref.current}
              />
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
