import { Link, Outlet } from 'react-router-dom';
export default function MovieDetailsPageMarkup({ movie }) {
  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <div>
      <img src={poster_path} alt={title} height="500" width="300" />
      <h1> {title}</h1>
      <p>User Score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <Link to="cast">Actors</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}
