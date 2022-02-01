import { NavigationStyle, NavLinkStyle } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationStyle>
      <NavLinkStyle to="/">Home</NavLinkStyle>
      <NavLinkStyle to="/movies">Movies</NavLinkStyle>
    </NavigationStyle>
  );
};
export default Navigation;
