import { BoardProvider } from './context/BoardContext';
import { TasksProvider } from './context/TasksContext';
import { UsersProvider } from './context/UsersContext';
import Spirnt from './pages/Pages.Board/Pages.Board';
import GlobalStyle from './themes/GlobalStyles';
import { ToastContainerStyled } from './themes/Toaster.Styled.Jsx';

function BoardContent() {
  return (
    <TasksProvider>
      <UsersProvider>
        <BoardProvider>
          <GlobalStyle />
          <Spirnt />
          <ToastContainerStyled theme='dark' />
        </BoardProvider>
      </UsersProvider>
    </TasksProvider>
  );
}

export default BoardContent;
