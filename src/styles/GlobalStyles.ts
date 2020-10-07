import {createGlobalStyle} from 'styled-components';

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
  font-family: 'Lato', sans-serif;
  background-color:hsl(220, 82%, 16%);
  color:hsl(0, 0%, 100%);

}
`;
