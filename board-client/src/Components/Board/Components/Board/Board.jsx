/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import { useContext, useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// Components
import Card from '../../../Task/Layouts/Task.Card/Task.Card';
import Column from '../Column/Column';

// Style
import { Board } from './Board.Styled';

// Data
import BoardContext from '../../../../context/BoardContext';
import TasksContext from '../../../../context/TasksContext';

function Kanban() {
  const [enabled, setEnabled] = useState(false);
  const { board, setBoard, currentParam } = useContext(BoardContext);
  const { tasks, editTask } = useContext(TasksContext);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const sourceColIndex = board.findIndex((e) => e._id === source.droppableId);
    const destColIndex = board.findIndex(
      (e) => e._id === destination.droppableId
    );
    const sourceColIndexName = board[sourceColIndex].title;
    const destColIndexName = board[destColIndex].title;
    const sourceTask = [...board[sourceColIndex].tasks];
    const destTask = [...board[destColIndex].tasks];

    if (source.droppableId !== destination.droppableId) {
      const [removed] = sourceTask.splice(source.index, 1);
      destTask.splice(destination.index, 0, removed);
      removed[currentParam] = destColIndexName;
      board[sourceColIndex].tasks = sourceTask;
      board[destColIndex].tasks = destTask;
      board[sourceColIndex].tasks.map((task, index) => {
        task.index = index;
        editTask(task, true);
      });
      board[destColIndex].tasks.map((task, index) => {
        task.index = index;
        editTask(task, true);
      });
      setBoard(board);
      return;
    }
    const [removed] = sourceTask.splice(source.index, 1);
    removed[currentParam] = sourceColIndexName;
    sourceTask.splice(destination.index, 0, removed);
    board[sourceColIndex].tasks = sourceTask;
    console.log(board[sourceColIndex].tasks);
    setBoard(board);
    board[sourceColIndex].tasks.map((task, index) => {
      task.index = index;
      editTask(task, true);
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Board>
        {tasks &&
          enabled &&
          board.map((section) => (
            <Droppable key={section._id} droppableId={section._id}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <Column section={section}>
                    {section.tasks.map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? '0.5' : '1',
                              // transition: '0.15s',
                            }}
                          >
                            <Card task={task} column={section.title} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Column>
                </div>
              )}
            </Droppable>
          ))}
      </Board>
    </DragDropContext>
  );
}

export default Kanban;
