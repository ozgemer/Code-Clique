import { Button, IconButton, Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import colors from '../../../themes/Colors';
import { Title } from '../Components/Column/Column.Styled';
import ColorsChoose from './ColorsChoose';
import { SettingContainer } from './CreateBoardStyles';

const ListItem = styled('div')`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const InputStyled = styled(Input)`
  color: ${colors.white};
`;

function ColumnsSettings() {
  const [columns, setColumns] = useState([
    {
      id: uuidv4(),
      title: 'todo',
      color: '#36B176',
      tasks: [],
    },
    {
      id: uuidv4(),
      title: 'in progress',
      color: '#3685B1',
      tasks: [],
    },
    {
      id: uuidv4(),
      title: 'review',
      color: '#EE786C',
      tasks: [],
    },
    {
      id: uuidv4(),
      title: 'closed',
      color: '#F6C927',
      tasks: [],
    },
  ]);

  const addColumn = () => {
    setColumns([
      ...columns,
      {
        id: uuidv4(),
        title: 'Add A Title',
        color: '#65848d',
        tasks: [],
      },
    ]);
  };

  const deleteColumn = (index) => {
    setColumns(columns.filter((c) => c.id !== columns[index].id));
  };

  const changeColor = (index, color) => {
    const temp = [...columns];
    temp[index].color = color;
    setColumns(temp);
  };

  const handleChange = (e) => {
    const temp = [...columns];
    temp[e.target.id].title = e.target.value;
  };

  return (
    <SettingContainer>
      <Title> Columns </Title>
      {columns.map((c, index) => (
        <ListItem key={c.title + index}>
          <ColorsChoose
            index={index}
            circleColor={c.color}
            change={c.change}
            changeColor={changeColor}
          />
          <InputStyled
            id={index}
            defaultValue={c.title}
            onChange={handleChange}
          />
          <IconButton onClick={() => deleteColumn(index)}> delete </IconButton>
        </ListItem>
      ))}
      <Button variant='contained' onClick={addColumn}>
        {' '}
        Add Column{' '}
      </Button>
    </SettingContainer>
  );
}

export default ColumnsSettings;
