import { useLocation } from 'react-router-dom';
import {
  MovieItem,
  MovieLink,
  MovieImg,
  MovieName,
} from 'components/TrendingMovieItem/TrendingMoveItem.styled';

export default function SearchMovieItem({ movie }) {
  const location = useLocation();
  const { id, title, poster_path } = movie;

  return (
    <MovieItem>
      <MovieLink to={`${id}`} state={{ from: location }}>
        <MovieImg src={poster_path} alt={title} />
      </MovieLink>
      <MovieName>{title}</MovieName>
    </MovieItem>
  );
}
