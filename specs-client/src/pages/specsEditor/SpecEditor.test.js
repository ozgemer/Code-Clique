import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpecDoc from './SpecDoc';
import SpecPageControlBar from './SpecPageControlBar';

const mockFunction = jest.fn();

describe('SpecDoc', () => {
  test('should render EditorJS', async () => {
    render(<SpecDoc />);
    const editorJS = screen.getByTestId('editorjs');
    expect(editorJS).toBeInTheDocument();
  });
});

describe('SpecPageControlBar', () => {
  test('should render editor control bar', async () => {
    render(<SpecPageControlBar />);
    const goBackButton = screen.getByTitle(/back/i);
    const editButton = screen.getByTitle(/edit/i);
    expect(goBackButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });

  test('should change bar buttons on edit mode', async () => {
    render(<SpecPageControlBar changeEditMode={mockFunction} />);
    const editButton = screen.getByTitle(/edit/i);
    fireEvent.click(editButton);
    expect(editButton).not.toBeInTheDocument();
    const editOffButton = screen.getByTitle(/cancel/i);
    const saveButton = screen.getByTitle(/save/i);
    expect(editOffButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  test('should return to default bar on edit-off', async () => {
    render(
      <SpecPageControlBar
        changeEditMode={mockFunction}
        setSave={mockFunction}
      />
    );
    fireEvent.click(screen.getByTitle(/edit/i));
    const editOffButton = screen.getByTitle(/cancel/i);
    fireEvent.click(editOffButton);
    expect(editOffButton).not.toBeInTheDocument();
    const editButton = screen.getByTitle(/edit/i);
    expect(editButton).toBeInTheDocument();
  });

  test('should return to default bar on save', async () => {
    render(
      <SpecPageControlBar
        changeEditMode={mockFunction}
        setSave={mockFunction}
      />
    );
    fireEvent.click(screen.getByTitle(/edit/i));
    const saveButton = screen.getByTitle(/save/i);
    fireEvent.click(saveButton);
    expect(saveButton).not.toBeInTheDocument();
    const editButton = screen.getByTitle(/edit/i);
    expect(editButton).toBeInTheDocument();
  });
});
