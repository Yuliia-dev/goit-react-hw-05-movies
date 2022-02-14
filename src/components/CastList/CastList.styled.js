import styled from 'styled-components';

export const ActorItem = styled.li`
  padding: 10px;
  max-width: 300px;
  max-height: 550px;
  list-style: none;
  background: ${props => props.theme.colors.bgGrey};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 3%;
  margin-bottom: 20px;
`;

export const ActorImg = styled.img`
  min-width: 300px;
  height: 424px;
  margin-right: 20px;
  border-radius: 3%;
  overflow: hidden;
`;

export const ActorName = styled.h2`
  margin: 0;
  padding: 10px 0;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.baseColor};
`;

export const ActorRole = styled.h3`
  margin: 0;
  padding: 5px 0;
  font-style: italic;
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: ${props => props.theme.colors.baseColor};
`;
