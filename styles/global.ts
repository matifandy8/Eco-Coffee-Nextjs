import { createGlobalStyle } from 'styled-components'



export default createGlobalStyle`

  *{
    margin: 0;
    padding:0;
    box-sizing:border-box
  }
  html {
    height: 100%;
  }
  body {
    background: ${props => props.theme.colors.background};
    height: 100%;
  }
  h1 {
    font-family: ${props => props.theme.fontTitle.fontFamily};
    font-size: 26px;
  }
  p {
    font-family: ${props => props.theme.fontSubtitle.fontFamily};
  }
  #__next {
  height: 100%;
  }
`