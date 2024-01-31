import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  ol, ul {
    list-style: none;
  }
  select:focus {
    outline: none;
  }
`
