import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BoardIcon from '../../assets/images/board-icon.svg';
import CalenderIcon from '../../assets/images/calender-icon.svg';
import DashboardIcon from '../../assets/images/dashboard-icon.svg';
import SmallLogo from '../../assets/images/logo-small.svg';
import Logo from '../../assets/images/logo.svg';
import MembersIcon from '../../assets/images/members-icon.svg';
import SettingsIcon from '../../assets/images/settings-icon.svg';
import SpecsIcon from '../../assets/images/specs-icon.svg';
import FeedBackIcon from '../../assets/images/feedback-icon.svg';
import {
  useSelectedPage,
  useSetSelectedPage,
} from '../../contexts/PageContext';
import Button from '../Button/Button';
import Feedback from '../Feedback/Feedback';
import {
  StyledList,
  StyledLogo,
  StyledSidebar,
  StyledLogoContainer,
} from './Sidebar.styled';

function Sidebar({ openstate, ismediumscreen, issmallscreen }) {
  const { open, setOpen } = openstate;
  const selectedPage = useSelectedPage();
  const setSelectedPage = useSetSelectedPage();
  const [feedbackDialog, setfeedbackDialog] = useState(false);
  useEffect(() => {
    if (ismediumscreen || issmallscreen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [ismediumscreen, issmallscreen]);

  const navigate = useNavigate();

  const pages = [
    { name: 'Dashboard', icon: DashboardIcon },
    { name: 'Board', icon: BoardIcon },
    { name: 'Specs', icon: SpecsIcon },
    { name: 'Members', icon: MembersIcon },
    { name: 'Calender', icon: CalenderIcon },
    // { name: 'Settings', icon: SettingsIcon },
  ];

  const handleButtonClick = (button) => {
    navigate(button.toLowerCase());
    setSelectedPage(button);
    if (issmallscreen) setOpen(!open);
  };

  const handleLogoClick = () => {
    setOpen(!open);
  };

  return (
    <StyledSidebar
      variant={issmallscreen ? 'persistent' : 'permanent'}
      open={open}
      issmallscreen={issmallscreen}
    >
      <StyledLogoContainer
        onClick={handleLogoClick}
        issmallscreen={issmallscreen}
      >
        <StyledLogo
          open={open}
          issmallscreen={issmallscreen}
          src={open ? Logo : SmallLogo}
          alt='CodeClique'
        />
        {open && (
          <ChevronLeftIcon
            sx={{ margin: '0.3rem 0 0 0.2rem' }}
            color='primary'
          />
        )}
      </StyledLogoContainer>

      <nav style={{ width: '100%', height: '100%' }}>
        <StyledList issmallscreen={issmallscreen}>
          {pages.map((page) => {
            return (
              <li key={uuidv4()}>
                <Button
                  variant='sidebar'
                  size={open ? 'lg' : 'sm'}
                  selected={selectedPage === page.name}
                  onClick={() => handleButtonClick(page.name)}
                >
                  <img src={page.icon} alt={`${page.name} icon`} />
                  {page.name}
                </Button>
              </li>
            );
          })}
          <li key={uuidv4()}>
            <Button
              variant='sidebar'
              size={open ? 'lg' : 'sm'}
              onClick={() => setfeedbackDialog(true)}
            >
              <img src={FeedBackIcon} alt={`Feedback icon`} />
              feedback
            </Button>
          </li>
          <li key={uuidv4()}>
            <Button
              variant='sidebar'
              size={open ? 'lg' : 'sm'}
              selected={selectedPage === 'Settings'}
              onClick={() => handleButtonClick('Settings')}
            >
              <img src={SettingsIcon} alt={`settings icon`} />
              settings
            </Button>
          </li>
        </StyledList>
      </nav>
      <Feedback open={feedbackDialog} setOpen={setfeedbackDialog} />
    </StyledSidebar>
  );
}

export default Sidebar;
