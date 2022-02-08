import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px;
`;
const NavLinkPage = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export default function Navigation() {
  return (
    <>
      <Nav>
        <NavLinkPage to="/">Home page</NavLinkPage>
        <NavLinkPage to="/movies">Movies page</NavLinkPage>
      </Nav>
      <hr />
    </>
  );
}
