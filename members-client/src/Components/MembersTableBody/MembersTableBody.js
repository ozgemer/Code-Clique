import { Link } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import Action from '../Actions/Action';
import Member from '../Member/Member';
import Roles from '../Roles/Roles';
import TasksStackBar from '../TasksStackBar/TasksStackBar';

function MembersTableBody({
  users,
  searchQuery,
  page,
  rowsPerPage,
  columns,
  tasks,
}) {
  const filteredUsers = users.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const slicedUsers = searchQuery
    ? filteredUsers
    : filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableBody>
      {slicedUsers.map((user, index) => {
        let { email } = user;
        email = `${email[0].toUpperCase()}${email.slice(1).toLowerCase()}`;
        return (
          <TableRow
            key={index}
            sx={{
              background: "#21213E",
              '&:first-of-type, &:last-child td, &:last-child th': {
                border: 0,
              },
            }}
          >
            <TableCell component="th" scope="row">
              <Member user={user} />
            </TableCell>
            <TableCell align="left">
              <Link underline={'hover'} href={`mailto:${email}`}>
                {email}
              </Link>
            </TableCell>
            <TableCell align="center">
              <TasksStackBar
                key={user._id + 1}
                columns={columns}
                tasks={tasks.filter(
                  (task) =>
                    task.assignee === user.name && task.status !== 'archive'
                )}
              />
            </TableCell>
            <TableCell align="center">
              <Roles user={user} />
            </TableCell>
            <TableCell align="center">
              <Action user={user}>Remove</Action>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default MembersTableBody;
