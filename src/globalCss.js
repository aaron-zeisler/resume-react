import {injectGlobal} from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: #333;
  }
  html, body, #root {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid transparent;
  }
  a:hover {
    color: #1565C0;
  }

  .mdi-icon {
    /* Set this to have the color match the current text color */
    fill: currentColor;
    /* Set this to have the icon size match the current font size */
    /* width: 1.5em; */
    /* height: 1.5em; */
  }
`;
