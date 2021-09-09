import { createGlobalStyle } from 'styled-components';

import Roboto_woff2 from './Roboto.woff2';
import Roboto_woff from './Roboto.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto_woff2'), local('Roboto_woff'),
        url(${Roboto_woff2}) format('woff2'),
        url(${Roboto_woff}) format('woff');
        font-weight: 300;
        font-style: normal;
        color:#424749;
    }
   
`;