import styled from '@emotion/styled';

export const SearchBarStyle = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: violet;
  border-radius: 1px;
  border-color: darkviolet;
  overflow: hidden;

  button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url('https://img.icons8.com/search');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }
  button:hover {
    opacity: 1;
    fill: yellow;
  }
  input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    color: darkviolet;
  }
  input::placeholder {
    font: inherit;
    font-size: 18px;
    color: darkviolet;
  }
  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;
