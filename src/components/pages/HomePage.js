import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../service/movies-api';

const newApi = new ApiService();

export default function HomePages() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    newApi
      .fetchTrendingMovies()
      .then(({ results }) => setMovies(results))
      .catch(error => setError(error));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`movies/${id}`}>{title}</Link>
              </li>
            );
          })}
      </ul>
      {error && <div>Not Found</div>}
    </div>
  );
}
