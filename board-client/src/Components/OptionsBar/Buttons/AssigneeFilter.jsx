/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, AvatarGroup, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import BoardContext from '../../../context/BoardContext';
import UsersContext from '../../../context/UsersContext';

const AvatarSelected = styled(Avatar)`
  .MuiAvatar-root {
    border: 2px solid #ffffff;
  }
  filter: ${(props) => (props.selected ? null : 'brightness(0.5)')};
  cursor: pointer;
`;

export default function AssigneeFilter() {
  const { users } = useContext(UsersContext);
  const { setFilterParams, filterParams } = useContext(BoardContext);

  const handleSelect = (name) => {
    if (filterParams.find((n) => n === name))
      setFilterParams(filterParams.filter((n) => n !== name));
    else setFilterParams([...filterParams, name]);
  };

  return (
    <AvatarGroup max={8}>
      {users.map((u) => (
        // eslint-disable-next-line no-underscore-dangle
        <Tooltip title={u.name ?? 'No Name'} arrow placement='top' key={u._id}>
          <AvatarSelected
            alt={u.name}
            src={u.image}
            selected={
              filterParams.length < 1
                ? true
                : filterParams.find((n) => n === u.name)
            }
            onClick={() => handleSelect(u.name)}
          />
        </Tooltip>
      ))}
    </AvatarGroup>
  );
}
