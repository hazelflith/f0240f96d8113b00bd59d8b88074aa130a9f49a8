import styled, { createGlobalStyle , css } from 'styled-components';
import Roboto_woff2 from './../fonts/Roboto.woff2';
import Roboto_woff from './../fonts/Roboto.woff';


export const theme1 = {
    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#eb238e',
    light: '#f4f4f4',
    dark: '#222'
  };
  
  export const theme2 = {
    primary: '#6e27c5',
    secondary: '#ffb617',
    danger: '#f16623',
    light: '#f4f4f4',
    dark: '#222'
  };

  
export const  GlobalStyle = createGlobalStyle `
  body {
      padding: 0;
      margin: 0;
      font-family: 'Roboto';
      src: local('Roboto_woff2'), local('Roboto_woff'),
      url(${Roboto_woff2}) format('woff2'),
      url(${Roboto_woff}) format('woff');
      font-weight: 300;
      font-style: normal;
    }
`;

export const Button = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  cursor: pointer;
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primary};
      color: white;
    `};
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    background: #424749;
  }
  
`;



