import { useEffect, useState } from 'react';
import ApiService from '../../service/movies-api';
import TrendingMovieItem from '../../components/TrendingMovieItem/TrendingMovieItem';
import { FormatMovie } from '../../service/GetFormatData';
import Loader from '../../components/Loader/Loader';
import { Container, Title, MovieList, ContainerError } from './HomePage.styled';

const newApi = new ApiService();

export default function HomePages() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    newApi
      .fetchTrendingMovies()
      .then(({ results }) => {
        const formats = FormatMovie(results);
        setMovies(formats);
      })
      .catch(error => setError(error))
      .finally(setLoading(false));
  }, []);

  return (
    <>
      <Container>
        <Title>Trending today</Title>
        {loading && <Loader />}
        <MovieList>
          {movies &&
            movies.map(movie => (
              <TrendingMovieItem key={movie.id} movie={movie} />
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
