import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationStyle = styled.nav`
  position: sticky;
  z-index: 1100;
  display: flex;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  color: #fff;
  background-color: violet;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavLinkStyle = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 600;
  font: Open Sans;
  color: darkviolet;
  font-size: 28px;
  &:active,
  &:hover {
    color: yellow;
  }
`;
