import { useSelectedPage } from '../../contexts/PageContext';
import useScrollPosition from '../../hooks/useScrollPosition';
import UserSection from '../UserSection/UserSection';
import { StyledHeaderContainer, StyledHeader } from './Header.styled';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

function Header({ openstate, issmallscreen }) {
  const { open, setOpen } = openstate;
  const selectedPage = useSelectedPage();
  const [scrollPosition] = useScrollPosition();

  const handleMenuClick = () => setOpen(!open);

  return (
    <StyledHeaderContainer scrollposition={scrollPosition}>
      <StyledHeader scrollposition={scrollPosition}>
        <Box display='flex' alignItems='center'>
          {issmallscreen && (
            <MenuIcon
              color='primary'
              sx={{ marginRight: '0.5rem' }}
              onClick={handleMenuClick}
            />
          )}
          <h1>{selectedPage}</h1>
        </Box>
        <UserSection />
      </StyledHeader>
    </StyledHeaderContainer>
  );
}

export default Header;
