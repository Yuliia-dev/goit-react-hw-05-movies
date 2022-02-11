import { Nav, NavLinkPage } from './Navigation.styled';

export default function Navigation() {
  return (
    <>
      <Nav>
        <NavLinkPage to="/">Home page</NavLinkPage>
        <NavLinkPage to="/movies">Movies page</NavLinkPage>
      </Nav>
    </>
  );
}
