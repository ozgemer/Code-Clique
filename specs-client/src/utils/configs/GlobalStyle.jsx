import { createGlobalStyle } from 'styled-components';
import { styled } from '@mui/material/styles';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    border:none;
    box-sizing: border-box;
    font-family: "Poppins";
  }
`;

const SpecsContentContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & * {
    max-width: 1650px;
  }
`;

export { GlobalStyle, SpecsContentContainer };
