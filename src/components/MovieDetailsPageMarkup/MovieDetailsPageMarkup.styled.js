import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerSection = styled.section`
  padding: 0 20px;
`;

export const CardMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 15px 20px;
`;

export const MovieImg = styled.img`
  min-width: 300px;
  height: 424px;
  margin-right: 20px;
  border-radius: 3%;
  overflow: hidden;
`;

export const MovieName = styled.h2`
  margin: 0;
  padding: 5px 0;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 1, 2;
  letter-spacing: 0.02em;
  color: #00584e;
`;

export const MovieClause = styled.h3`
  margin: 0;
  padding: 5px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: #00584e;
`;

export const MovieInfo = styled.p`
  margin: 0;
  padding: 5px 10px;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
`;

export const GenresList = styled.ul`
  display: flex;
  margin: 0;
  padding: 5px 10px;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
`;

export const GenresItem = styled.li`
  display: flex;
  list-style: none;
  padding: 0 5px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoTitle = styled.h3`
  margin: 15px 0;
  padding: 5px 0;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 1, 2;
  letter-spacing: 0.02em;
  color: #00584e;
`;

export const InfoList = styled.ul`
  display: flex;
  margin: 0;
  padding: 5px 10px;
`;
export const InfoItem = styled.li`
  padding: 15px;
  margin-right: 5px;
  list-style: none;
  min-height: 20px;
  min-width: 120px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  background-color: #00584e;
`;

export const InfoLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  border-radius: 3%;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;

  &.active {
    color: orange;
  }
`;
