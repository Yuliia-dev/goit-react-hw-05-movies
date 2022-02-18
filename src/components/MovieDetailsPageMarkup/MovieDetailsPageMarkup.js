import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ContainerSection,
  BackLink,
  CardMovie,
  MovieImg,
  MovieName,
  MovieClause,
  MovieInfo,
  GenresList,
  GenresItem,
  InfoContainer,
  InfoTitle,
  InfoList,
  InfoItem,
  InfoLink,
} from './MovieDetailsPageMarkup.styled';

export default function MovieDetailsPageMarkup({ movie, location }) {
  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <ContainerSection>
      <BackLink to={location?.state?.from ?? '/'}>⬅Back</BackLink>
      <CardMovie>
        <MovieImg src={poster_path} alt={title} height="500" width="300" />
        <div>
          <MovieName> {title}</MovieName>
          <MovieClause>User Score: </MovieClause>
          <MovieInfo>{vote_average}%</MovieInfo>
          <MovieClause>Overview:</MovieClause>
          <MovieInfo>{overview}</MovieInfo>
          <MovieClause>Genres:</MovieClause>
          <GenresList>
            {genres.map(({ id, name }) => {
              return <GenresItem key={id}>{name}</GenresItem>;
            })}
          </GenresList>
        </div>
      </CardMovie>
      <InfoContainer>
        <InfoTitle>Additional information</InfoTitle>
        <div>
          <InfoList>
            <InfoItem>
              <InfoLink to="cast">Actors</InfoLink>
            </InfoItem>
            <InfoItem>
              <InfoLink to="reviews">Reviews</InfoLink>
            </InfoItem>
          </InfoList>
        </div>
      </InfoContainer>

      <Outlet />
    </ContainerSection>
  );
}

MovieDetailsPageMarkup.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
