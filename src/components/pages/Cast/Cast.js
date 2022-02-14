import ApiService from 'components/service/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastList from 'components/CastList/CastList';
import { FormatCast } from 'components/service/GetFormatData';
import { CardActors, ActorList, ContainerError } from './Cast.styled';

const newApi = new ApiService();

export default function Cast() {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    newApi
      .fetchMovieActors(movieId)
      .then(({ cast }) => {
        const formats = FormatCast(cast);
        setActors(formats);
      })
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      <CardActors>
        <ActorList>
          {actors &&
            actors.map(actor => <CastList key={actor.id} actor={actor} />)}
        </ActorList>
      </CardActors>

      {error && (
        <ContainerError>
          Sorry, there was an error, please try again
        </ContainerError>
      )}
    </>
  );
}
