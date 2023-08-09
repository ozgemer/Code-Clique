import { styled } from '@mui/material/styles';

const StyledPageLayout = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledPageWidth = styled('div')`
  width: 100%;
`;

const StyledContentLayout = styled('div')`
  padding: 2rem;
  max-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledDefaultHeader = styled('h2')`
  font-size: 1rem;
`;

export {
  StyledPageLayout,
  StyledPageWidth,
  StyledContentLayout,
  StyledDefaultHeader,
};
