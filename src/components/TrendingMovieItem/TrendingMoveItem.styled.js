import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieItem = styled.li`
  padding: 10px;
  max-width: 300px;
  max-height: 550px;
  list-style: none;
  background: #e9f1f1;
  border: 5px solid orange;
  border-radius: 3%;
  margin-bottom: 20px;
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 3%;
  overflow: hidden;
`;

export const MovieImg = styled.img`
  min-width: 300px;
  height: 424px;
`;

export const MovieName = styled.p`
  padding: 10px;
  margin: 10px 0 0 0;
  height: 40px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.06em;
  color: #00584e;
`;
