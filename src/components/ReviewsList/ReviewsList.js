export default function ReviewsList({ review }) {
  const { author, content } = review;

  return (
    <div>
      <ul>
        <li>
          <h2> {author}</h2>
          <p>{content}</p>
        </li>
      </ul>
    </div>
  );
}
