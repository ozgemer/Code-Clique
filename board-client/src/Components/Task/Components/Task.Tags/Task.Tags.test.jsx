import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TasksProvider } from '../../../context/TasksContext';
import Tags from './Task.Tags';

const task = {
  id: 123,
  status: 'todo',
  title: 'Add a daily schedule will include components of meetings.',
  description: '',
  tags: ['bug'],
  assignee: 'Sorer',
  index: [],
  createdAt: '2022-07-29',
};

const tags = [
  { title: 'fronted', color: '#2638d8' },
  { title: 'design', color: '#d418c4' },
  { title: 'backend', color: '#47d634' },
  { title: 'bug', color: '#d41e18' },
];

describe('TaskTags', () => {
  test('', () => {
    render(
      <TasksProvider>
        <Tags taskId={task.id} tags={tags} />
      </TasksProvider>
    );

    const headingElement = screen.getByRole('heading', {
      name: 'Add a daily schedule will include components of meetings.',
    });
    expect(headingElement).toBeVisible();
  });
});
