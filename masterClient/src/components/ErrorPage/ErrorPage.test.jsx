import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should render error if it was passed as a prop', () => {
    render(<ErrorPage error='error number 1' />);
    const headingElement = screen.getByText(/error:/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('should render default error if no error was passed as a prop', () => {
    render(<ErrorPage />);
    const headingElement = screen.getByText(/the requested url was not found/i);
    expect(headingElement).toBeInTheDocument();
  });
});
