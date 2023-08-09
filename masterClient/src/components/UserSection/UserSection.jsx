import {
  StyledUsersection,
  StyledUserImage,
  StyledUserDetails,
} from './UserSection.styled';
import MockUserImage from '../../assets/images/mock-user-image.svg';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { useContext } from 'react';
import { AuthContext } from 'masterClient/authContext';
function UserSection({ img, name, role }) {
  const authContext = useContext(AuthContext);
  const userInfo = authContext.authState.userInfo;
  const DropdownMenuItemsArray = [
    { text: 'Settings', url: null, onClick: null },
    { text: 'Logout', url: 'login', onClick: authContext.logout },
  ];

  return (
    <StyledUsersection>
      <StyledUserDetails>
        <StyledUserImage
          src={userInfo.image || MockUserImage}
          alt='User image'
        />
        <h2>{userInfo.name || 'Emma Taylor'}</h2>
        <h3>{userInfo.roles[0]?.name || 'UX/UI Designer'}</h3>
      </StyledUserDetails>
      <DropdownMenu itemsArray={DropdownMenuItemsArray} />
    </StyledUsersection>
  );
}

export default UserSection;
