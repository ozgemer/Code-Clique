import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StyledRolesTitle = styled(Typography)`
  color: white;
  padding: 0.5rem;
`;
const StyledRolesTitleContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-bottom: 0;
`;
const StyledTabPanelContainer = styled('div')`
  width: 100%;
`;
const StyledTabPanelContentContainer = styled(Box)``;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <StyledTabPanelContentContainer>
          {children}
        </StyledTabPanelContentContainer>
      )}
    </div>
  );
}
const StyledRolesContainer = styled('div')`
  display: flex;
  overflow: auto;
`;
const StyledTabs = styled(Tabs)`
  & .Mui-selected {
    background-color: #121231;
  }
  & .MuiTabs-indicator {
    background-color: #f6c927;
  }
  padding: 1rem;
  padding-top: 0.5rem;
  cursor: pointer;
`;
const StyledContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: strech;
`;
const StyledTabsContainer = styled(Box)`
  border-right: 0.1rem solid #f6c927;
`;
const StyledTabPanel = styled(TabPanel)`
  padding: 1rem;
`;
export {
  StyledRolesContainer,
  StyledTabs,
  StyledContainer,
  StyledTabsContainer,
  StyledTabPanel,
  StyledTabPanelContainer,
  StyledRolesTitleContainer,
  StyledRolesTitle,
};
