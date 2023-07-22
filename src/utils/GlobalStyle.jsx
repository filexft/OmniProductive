import {createGlobalStyle} from 'styled-components'

const GlobalStyleCss = createGlobalStyle`
body{
    
  box-sizing: border-box;
  margin: 0;
  padding:0;
  background-color: #e8ffce;
  & *{
    border-radius : 5px;
  }
}
`

export const  GlobalStyle = () => {
    return (<GlobalStyleCss />)
}