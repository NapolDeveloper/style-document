import { createGlobalStyle } from 'styled-components';

import Colors from '../style/Colors';

const GlobalStyle = createGlobalStyle`
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  a{
    text-decoration: none;
  }
  button{
    text-decoration: none;
    border: none;
  }
  // markdown rendering styling
  blockquote {
    color: ${Colors.colorBlack};
    margin: 0;
    padding: 1em 1em 1em 2em;
    border-left: 0.5em ${Colors.colorLightBlue} solid;
    margin-bottom: 1rem;
  }
  h3{
    margin-bottom: 1rem;
  }
  h4{
    margin-bottom: 1rem;
  }
  ul
  {
    margin-bottom: 1rem;
  }
  li{
    margin-left: 2rem;
  }
`;

export default GlobalStyle;
