import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #00584e;
  margin-bottom: 15px;
`;
export const NavLinkPage = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.62;
  letter-spacing: 0.06em;
  text-shadow: 2px 1px;
  color: white;
  &.active {
    color: orange;
  }
`;
