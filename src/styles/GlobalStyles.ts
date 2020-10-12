import {createGlobalStyle} from 'styled-components';
import {colors} from './theme';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;

}
*, ::before, ::after {
  box-sizing: inherit;
}

body {
  display: grid;
  grid-template-rows: 80px 1fr;
  background-color: ${colors.backgroundColor};
  color: ${colors.whiteContainer};
}
`;
