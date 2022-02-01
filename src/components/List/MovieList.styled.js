import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieListStyle = styled.ul`
  display: block;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: 30px;
  margin-right: auto;
  font-color: darkviolet;
  text-decoration: none;

  li {
    list-style: none;
  }
`;

export const LinkStyle = styled(Link)`
  font-color: darkviolet;
`;
