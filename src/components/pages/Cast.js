import ApiService from 'components/service/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastList from 'components/CastList/CastList';
import { FormatCast } from 'components/service/GetFormatData';

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
      {actors && actors.map(actor => <CastList key={actor.id} actor={actor} />)}
      {error && <div>Sorry, there was an error, please try again</div>}
    </>
  );
}
