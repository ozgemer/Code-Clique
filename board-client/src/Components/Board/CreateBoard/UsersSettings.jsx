import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as React from 'react';
import { useContext } from 'react';
import UsersContext from '../../context/UsersContext';
import { SettingContainer } from './CreateBoardStyles';

function UsersSettings() {
  const { users } = useContext(UsersContext);
  const [checked, setChecked] = React.useState([true, false]);

  const handleChangeAll = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChangeOne = (event) => {
    console.log(event.target);
    setChecked([event.target.checked, checked[event.target.id]]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {users.map((u, index) => (
        <FormControlLabel
          key={u + index}
          label={u.name}
          control={
            <Checkbox
              id={index}
              checked={checked[index]}
              onChange={handleChangeOne}
            />
          }
        />
      ))}
    </Box>
  );

  return (
    <SettingContainer>
      <FormControlLabel
        label='Parent'
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChangeAll}
          />
        }
      />
      {children}
    </SettingContainer>
  );
}

export default UsersSettings;
