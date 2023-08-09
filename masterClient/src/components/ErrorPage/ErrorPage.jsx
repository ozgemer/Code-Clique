import { StyledErrorPage } from './ErrorPage.styled';

function ErrorPage({ error }) {
  return (
    <StyledErrorPage>
      <h1>Whoops...</h1>
      {error && <h2>Error: ${error}</h2>}
      {!error && <h2>The requested URL was not found</h2>}
    </StyledErrorPage>
  );
}

export default ErrorPage;
