import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpecControlBar from './SpecControlBar';

describe('SpecControlBar', () => {
  test('should render add button', async () => {
    render(<SpecControlBar />);
    const buttonElement = screen.getByText(/add/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
