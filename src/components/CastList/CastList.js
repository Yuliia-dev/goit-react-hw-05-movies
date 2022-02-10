export default function CastList({ actor }) {
  const { name, profile_path, character } = actor;

  return (
    <div>
      <ul>
        <li>
          <h1> {name}</h1>
          <img src={profile_path} alt={name} height="450" width="250" />
          <p>Role: {character}</p>
        </li>
      </ul>
    </div>
  );
}
