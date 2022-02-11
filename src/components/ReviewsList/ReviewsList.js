import { ReviewsItem, ReviewsAuthor, ReviewsText } from './ReviewsList.styled';

export default function ReviewsList({ review }) {
  const { author, content } = review;

  return (
    <ReviewsItem>
      <ReviewsAuthor> {author}</ReviewsAuthor>
      <ReviewsText>{content}</ReviewsText>
    </ReviewsItem>
  );
}
