/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import { Grid, Tooltip } from '@mui/material';
import * as React from 'react';
import TasksContext from '../../../../context/TasksContext';
import icons from '../../../../themes/Icons';
import {
  ChipStyled,
  DividerStyled,
  OptionsTitle,
} from '../../Task.Common.Styled';
import { PopoverStyled, TagsBtnStyled } from './Task.Button.Tag.Styled';

export default function TagBtn({ task, size }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { addTag, tags } = React.useContext(TasksContext);

  const handleSelect = (tag) => {
    addTag(task._id, tag);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Tooltip title='Add Tags' arrow placement='top'>
        <TagsBtnStyled
          variant='contained'
          size={size || 'small'}
          aria-describedby={id}
          onClick={handleClick}
        >
          {icons.tag}
        </TagsBtnStyled>
      </Tooltip>
      <PopoverStyled
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <OptionsTitle> Task Tags </OptionsTitle>
        <DividerStyled />
        <Grid
          container
          columnSpacing={1}
          rowSpacing={1}
          columns={3}
          px={2}
          py={1}
          minWidth={200}
          minHeight={100}
          alignContent='center'
          justifyContent='center'
        >
          {tags.map((opt) => {
            if (!task.tags.find((t) => t.title === opt.title))
              return (
                <Grid item key={opt._id}>
                  <ChipStyled
                    label={opt.title}
                    onClick={() => handleSelect(opt)}
                    background={opt.color}
                  />
                </Grid>
              );
          })}
          {tags.length === task.tags.length && <p> No More Tags !</p>}
        </Grid>
      </PopoverStyled>
    </div>
  );
}
