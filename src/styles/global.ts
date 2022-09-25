import { createGlobalStyle } from 'styled-components'



export default createGlobalStyle`

  *{
    margin: 0;
    padding:0;
    box-sizing:border-box
  }
  html {
  }
  body {
    min-height:100vh;
    background: ${props => props.theme.colors.background};
    position: relative; 
  }
  h1 {
    font-family: ${props => props.theme.fontTitle.fontFamily};
    font-size: 26px;
  }
  p {
    font-family: ${props => props.theme.fontSubtitle.fontFamily};
  }
  #__next {
  }
`