import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropdownMenu from './DropdownMenu';

const mockMenuOptions = [
  { text: 'test1', url: 'localhost:3000/test1' },
  { text: 'test2', url: 'localhost:3000/test2' },
];

describe('DropdownMenu', () => {
  it('should render drowpdown menu options', () => {
    render(<DropdownMenu itemsArray={mockMenuOptions} />);
    const buttonElement = screen.getByRole('button', { name: '...' });
    fireEvent.click(buttonElement);
    mockMenuOptions.map((item) => {
      const menuElement = screen.getByRole('menuitem', { name: item.text });
      return expect(menuElement).toBeInTheDocument();
    });
  });
});
