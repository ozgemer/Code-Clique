/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
import { useContext, useEffect, useState } from 'react';

// Components
import Board from '../../Components/Board/Components/Board/Board';
import LinearIndeterminate from '../../Components/LoadingComp/LoadingComp';
import AssigneeFilter from '../../Components/OptionsBar/Buttons/AssigneeFilter';
import SortByBtn from '../../Components/OptionsBar/Buttons/SortByBtn';
import BoardContext from '../../context/BoardContext';
import TasksContext from '../../context/TasksContext';
import { getAllData } from '../../utils/services/fetchBoardData';

// Styles
import {
  BoardBar,
  BoardContainer,
  Container,
  SorterContainer,
} from './Pages.Board.Styled';

function Spirnt() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);
  const { setBoard } = useContext(BoardContext);
  const { setTasks, setTags } = useContext(TasksContext);

  const fetchAllData = async () => {
    const { boards, tasks, tags } = await getAllData();
    setBoard(boards[0].columns);
    setTasks(tasks);
    setTags(tags);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  addEventListener('resize', (event) => {
    setWidth(event.target.innerWidth);
  });

  if (isLoading)
    return (
      <Container>
        <LinearIndeterminate />
      </Container>
    );

  return (
    <Container width={width}>
      <BoardBar>
        <p>Our First Sprint</p>
      </BoardBar>
      <SorterContainer>
        <AssigneeFilter />
        <SortByBtn />
      </SorterContainer>
      <BoardContainer>
        <Board />
      </BoardContainer>
    </Container>
  );
}

export default Spirnt;
