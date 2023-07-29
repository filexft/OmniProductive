import {createGlobalStyle} from 'styled-components'

const GlobalStyleCss = createGlobalStyle`
body{
    
  box-sizing: border-box;
  margin: 0;
  padding:20px;
  background-color: #3c87ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align : center;
  min-height: 100vh;

  & *{
    border-radius : 5px;
  }
  @media (max-width : 600px){
  
    padding : 0;
    background-color: blue;
    display: block;
    
  }
}
`

const  GlobalStyle = () => {
    return (<GlobalStyleCss />)
}

export default GlobalStyle