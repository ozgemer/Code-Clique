import { useContext, useState } from 'react';
import BoardContext from '../../../../context/BoardContext';
import { InputStyled } from '../../../Task/Task.Common.Styled';
import { Title } from './Board.Button.AddColumn.Styled';

// eslint-disable-next-line react/function-component-definition
const AddColumnBtn = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newStatus, setNewStatus] = useState();
  const { addColumn } = useContext(BoardContext);

  const handleChange = (event) => {
    setNewStatus(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (newStatus) addColumn(newStatus);
      setIsEditing(!isEditing);
    }
  };

  return (
    <Title>
      {isEditing ? (
        <InputStyled
          id='title'
          placeholder='Enter A Name'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          sx={{ width: '8rem' }}
        />
      ) : (
        <span onClick={() => setIsEditing(!isEditing)}>+</span>
      )}
    </Title>
  );
};

export default AddColumnBtn;
