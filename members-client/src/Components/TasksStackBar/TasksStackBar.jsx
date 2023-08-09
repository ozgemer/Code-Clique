import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Divider, Tooltip } from '@mui/material';
import {
  getAllBoards,
  getAllTasks,
} from '../../../utils/services/MembersData.service';
import { Stack } from '@mui/material';

const Bar = styled('div')`
  display: flex;
  background: #131331;
  border-radius: 0.5rem;
  height: 1.5rem;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
const Section = styled('div')`
  width: ${(props) => props.width};
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function TasksStackBar({ tasks, columns }) {
  const totalAmount = tasks.length;
  const closedTasksAmount = tasks.filter((t) => t.status === 'closed').length;
  const Progress = Math.round((100 * closedTasksAmount) / totalAmount);

  if (totalAmount === 0)
    return (
      <Stack direction="column" spacing={0.5}>
        <span>Progress: None</span>
        <Bar>No Tasks</Bar>
      </Stack>
    );
  return (
    <Stack direction="column" spacing={0.5}>
      <span>Progress: {Progress + '%'}</span>
      <Bar>
        {columns.map((col) => {
          const { title, color } = col;
          const thisAmount = tasks.filter((t) => t.status === title).length;
          if (thisAmount > 0)
            return (
              <>
                <Tooltip
                  title={`${thisAmount} ${title}`}
                  placement={'top'}
                  id={col._id}
                  arrow
                >
                  <Section
                    id={col._id}
                    width={(100 * thisAmount) / totalAmount + '%'}
                    color={color}
                  >
                    {thisAmount}
                  </Section>
                </Tooltip>
              </>
            );
        })}
      </Bar>
    </Stack>
  );
}
