import PropTypes from 'prop-types';
import { ActorItem, ActorImg, ActorName, ActorRole } from './CastList.styled';

export default function CastList({ actor }) {
  const { name, profile_path, character } = actor;

  return (
    <div>
      <ActorItem>
        <ActorImg src={profile_path} alt={name} height="450" width="250" />
        <ActorName> {name}</ActorName>
        <ActorRole>Role: {character}</ActorRole>
      </ActorItem>
    </div>
  );
}

CastList.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }),
};
