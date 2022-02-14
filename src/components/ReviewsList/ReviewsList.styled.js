import styled from 'styled-components';

export const ReviewsItem = styled.li`
  padding: 10px;
  list-style: none;
  background: ${props => props.theme.colors.bgGrey};
  border: 1px solid ${props => props.theme.colors.white};
  margin-bottom: 20px;
`;

export const ReviewsAuthor = styled.h2`
  margin: 0;
  padding: 10px;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.baseColor};
`;

export const ReviewsText = styled.p`
  margin: 0;
  padding: 5px 10px;
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.04em;
`;
