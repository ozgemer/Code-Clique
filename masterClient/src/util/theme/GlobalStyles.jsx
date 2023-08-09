import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import bgimage from '../../assets/images/app-background.png';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${colors.darkestBlue};
    background-image: url(${bgimage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    color: ${colors.white};
  }

  button {
    border: none;
    font-size: 1rem;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar { 
    width: 0.4vw;
    height: 1.3vh;
  }

 ::-webkit-scrollbar-track {
    background-color: none;
    border-radius: 50rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.darkestBlue};
    border-radius: 50rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.yellow};
  }

 ::-webkit-scrollbar-corner {
    background-color: none;
 }

`;

export default GlobalStyle;
