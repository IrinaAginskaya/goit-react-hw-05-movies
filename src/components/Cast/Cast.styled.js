import styled from '@emotion/styled';

export const CastStyle = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  justify-content: flex-start;

  li {
    display: flex;
    flex-direction: column;
    color: darkviolet;
    font-size: 22px;
    font-weight: 700;
    align-items: start;
    text-align: center;
  }

  img {
    height: 320px;
  }
`;
