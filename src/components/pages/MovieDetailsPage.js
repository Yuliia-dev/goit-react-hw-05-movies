import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiService from 'components/service/movies-api';
// import Cast from './Cast';
// import Reviews from './Reviews';

const newApi = new ApiService();

export default function MovieDetailsPages() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    newApi
      .fetchMovieDetails(movieId)
      .then(results => setMovie(results))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <img
            src={
              'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' +
              movie.poster_path
            }
            alt={movie.title}
            height="600"
            width="400"
          />
          <h1> {movie.title}</h1>
          <p>User Score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      )}

      {error && <div>Not Found</div>}

      {/* <Routes>
        <Route path="movies/:movieId" element={<Cast />} />
        <Route path="movies/:movieId" element={<Reviews />} />
      </Routes> */}

      <Outlet />
    </>
  );
}
