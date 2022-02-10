import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function TrendingMovieLink({ movie }) {
  const location = useLocation();
  const { id, title, poster_path } = movie;

  return (
    <li>
      <Link to={`movies/${id}`} state={{ from: location }}>
        <img src={poster_path} alt={title} height="200" width="150" />
        {title}
      </Link>
    </li>
  );
}
