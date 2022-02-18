import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  margin-left: 20px;
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
`;

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
  color: ${props => props.theme.colors.baseColor};
`;

export const MovieClause = styled.h3`
  margin: 0;
  padding: 5px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: ${props => props.theme.colors.baseColor};
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
  color: ${props => props.theme.colors.baseColor};
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
  background-color: ${props => props.theme.colors.baseColor};
`;

export const InfoLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  border-radius: 3%;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;

  &.active {
    color: ${props => props.theme.colors.orange};
  }
`;
