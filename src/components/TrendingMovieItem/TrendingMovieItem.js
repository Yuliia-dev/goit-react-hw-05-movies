import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieItem,
  MovieLink,
  MovieImg,
  MovieName,
} from './TrendingMoveItem.styled';

export default function TrendingMovieItem({ movie }) {
  const location = useLocation();
  const { id, title, poster_path } = movie;

  return (
    <MovieItem>
      <MovieLink to={`movies/${id}`} state={{ from: location }}>
        <MovieImg src={poster_path} alt={title} width="300" />
      </MovieLink>
      <MovieName>{title}</MovieName>
    </MovieItem>
  );
}

TrendingMovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};
