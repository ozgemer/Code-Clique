import React, { useRef, useState } from 'react';
import {
  StyledTableCell,
  SpecDescription,
  SpecTableRow,
  TableButton,
  AvatarContainer,
  AvatarMore,
} from './SpecsTable.styled';
import SpecTableAvatar from './SpecTableAvatar';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import SpecsStatusDropdown from './SpecsStatusDropdown';
import { useEffect } from 'react';

function SpecsTableRow({ spec, select, index, onDelete, statusOptions }) {
  const [avatars, setAvatars] = useState([]);
  const description = useRef({
    first: '',
    second: '',
  });

  const getCleanText = (str) => str.replace(/<\/?[^>]+(>|$)/g, '');

  async function setDescription() {
    try {
      if (spec.doc.blocks[0])
        description.current.first = getCleanText(spec.doc.blocks[0].data.text);
      if (spec.doc.blocks[1])
        description.current.second = getCleanText(spec.doc.blocks[1].data.text);
    } catch (e) {}
  }

  const getAvatars = () => {
    setAvatars(
      spec?.participants.map((user, index) => (
        <SpecTableAvatar name={user.name} key={index} image={user.image} />
      ))
    );
  };

  setDescription();
  useEffect(() => getAvatars(), []);

  return (
    <SpecTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <StyledTableCell component='th' scope='row'>
        <AvatarContainer>
          {new Date(spec?.date).toLocaleDateString()}
        </AvatarContainer>
      </StyledTableCell>
      <StyledTableCell onClick={() => select(index)}>
        <div className='selectable' data-testid={`spec-preview-${index}`}>
          <h1>{description.current.first}</h1>
          <SpecDescription>{description.current.second}</SpecDescription>
        </div>
      </StyledTableCell>
      <StyledTableCell align='center'>
        <SpecsStatusDropdown spec={spec} options={statusOptions} />
      </StyledTableCell>
      <StyledTableCell>
        <AvatarContainer>
          <div style={{ display: 'flex', marginRight: '10px' }}>
            {avatars.length > 4 ? avatars.slice(0, 4) : avatars}
          </div>
          {avatars.length > 4 && (
            <AvatarMore>{`and ${avatars.length - 4} more...`}</AvatarMore>
          )}
        </AvatarContainer>
      </StyledTableCell>
      <StyledTableCell align='center' title='delete'>
        <AvatarContainer>
          <TableButton onClick={() => onDelete(index)}>
            <DeleteForeverOutlinedIcon />
          </TableButton>
        </AvatarContainer>
      </StyledTableCell>
    </SpecTableRow>
  );
}

export default SpecsTableRow;
