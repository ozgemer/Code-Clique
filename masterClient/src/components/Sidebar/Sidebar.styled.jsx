import { Drawer, List, Box } from '@mui/material';
import { css, styled } from '@mui/material/styles';

const StyledSidebar = styled(Drawer)`
  ${({ theme }) => {
    const { palette } = theme;
    return css`
      position: sticky;
      top: 0;
      left: 0;
      background-color: none;
      padding: 1rem 0 1rem 0.5rem;
      height: 100vh;
      width: 15rem;

      .MuiDrawer-paper {
        position: relative;
        align-items: center;
        padding: 1rem 0.5rem 0 0.5rem;
        background-color: #0a0a1b6f;
        border-radius: 1rem;
        border: 0.1rem solid ${palette.border.main};
        backdrop-filter: blur(5px);

        &:hover {
          box-shadow: 0 0 20px -5px #1f1f53;
        }
      }
    `;
  }}

  ${({ open }) => {
    if (!open) {
      return css`
        width: 4.5rem;
        padding: 1rem 0.5rem;

        .MuiDrawer-paper {
          border-radius: 0.5rem;
        }

        button {
          margin: 1rem 0;
        }

        button:first-of-type {
          margin-top: 0;
        }
      `;
    }
  }}

  /* mobile */
  ${({ issmallscreen, open }) => {
    if (issmallscreen) {
      return css`
        position: fixed;
        height: 100vh;
        width: ${open ? '80vw' : '0'};
        padding: 0;
        flex-direction: row;
        z-index: 9999;

        .MuiDrawer-paper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.5rem;
          border-radius: 0 1rem 1rem 0;

          button {
            margin: 0;
          }
        }
      `;
    }
  }}
`;

const StyledLogo = styled('img')`
  width: 11rem;
  ${({ open, issmallscreen }) => {
    if (issmallscreen) return ``;
    if (!open) {
      return css`
        width: 2rem;
        margin-right: 0;
      `;
    }
  }}
`;

const StyledList = styled(List)`
  height: 100%;
  padding: 0;

  li:last-of-type {
    position: absolute;
    bottom: 1rem;
    width: 100%;
  }

  /* mobile */
  /* ${({ issmallscreen }) => {
    if (issmallscreen) {
      return css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        li:last-of-type {
          position: static;
          width: auto;
        }
      `;
    }
  }} */
`;

const StyledLogoContainer = styled(Box)`
  display: flex;
  margin-bottom: 1rem;

  ${({ issmallscreen }) => {
    if (issmallscreen) {
      return css`
        margin: 2rem 0;
        width: 100%;
        justify-content: space-between;
      `;
    }
  }}
`;

export { StyledSidebar, StyledLogo, StyledList, StyledLogoContainer };