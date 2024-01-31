import{createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: none;
  }
  :root {
    font-family: Inter;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: ${({theme})=>theme.COLORS.gray_600};
  }
  `