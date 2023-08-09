import NewBoardModal from '../Components/Board/CreateBoard/NewBoardModal';

export default function LandingPage({ setfirst }) {
  return (
    <>
      <div>Welcome To Task Manager Board Click Down To Start A Board</div>
      <NewBoardModal setfirst={setfirst} />
    </>
  );
}
