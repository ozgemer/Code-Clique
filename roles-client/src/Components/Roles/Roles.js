import React, { useContext } from 'react';
import { RolesContext } from '../../context/RolesContext';
import TabContext from '@mui/lab/TabContext';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DraggableTab from '../DraggableTab/DraggableTab';
import Stack from '@mui/material/Stack';
import {
  StyledRolesContainer,
  StyledTabs,
  StyledContainer,
  StyledTabsContainer,
  StyledTabPanel,
  StyledTabPanelContainer,
  StyledRolesTitleContainer,
  StyledRolesTitle,
} from './Roles.styled';
import Role from '../Role/Role';
import RoleSettings from '../RoleSettings/RoleSettings';
import CreateRole from '../CreateRole/CreateRole';

function Roles() {
  const { teamRoles, setRoles, value, setValue } = useContext(RolesContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newRoles = Array.from(teamRoles);
    const draggedRole = newRoles.splice(result.source.index, 1)[0];
    newRoles.splice(result.destination.index, 0, draggedRole);
    setRoles(false, newRoles);
  };

  const _renderTabList = (droppableProvided) => (
    <StyledTabs
      value={value}
      orientation='vertical'
      onChange={handleChange}
      aria-label='Draggable Tabs'
      variant='scrollable'
    >
      {teamRoles.map((role, index) => {
        return (
          <DraggableTab
            label={role.name}
            value={role._id}
            index={index}
            key={index}
            draggableId={index}
            component={
              <Role teamrole={role} onclick={setValue} selectedvalue={value} />
            }
          />
        );
      })}
      {droppableProvided ? droppableProvided.placeholder : null}
    </StyledTabs>
  );

  const _renderTabListWrappedInDroppable = () => (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledRolesContainer>
        <Droppable droppableId='1' direction='vertical'>
          {(droppableProvided) => (
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {_renderTabList(droppableProvided)}
            </div>
          )}
        </Droppable>
      </StyledRolesContainer>
    </DragDropContext>
  );

  return (
    <StyledContainer>
      <TabContext value={value}>
        <StyledTabsContainer>
          <StyledRolesTitleContainer>
            <StyledRolesTitle>Roles</StyledRolesTitle>
            <CreateRole />
          </StyledRolesTitleContainer>
          <Stack direction='column'>{_renderTabListWrappedInDroppable()}</Stack>
        </StyledTabsContainer>
        <StyledTabPanelContainer>
          {teamRoles.map((role, index) => (
            <StyledTabPanel value={value} index={role._id} key={index}>
              <RoleSettings teamrole={role} />
            </StyledTabPanel>
          ))}
        </StyledTabPanelContainer>
      </TabContext>
    </StyledContainer>
  );
}

export default Roles;
