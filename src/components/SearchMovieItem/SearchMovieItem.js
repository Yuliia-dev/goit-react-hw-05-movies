import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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

SearchMovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};
