import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskCard from './TaskCard';
import  { TasksProvider } from '../../../context/TasksContext';
import  { UsersProvider } from '../../../context/UsersContext';

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

const user = {
  _id: 456,
  name: 'Bar Shoshani',
  email: 'barshoshani274@gmail.com',
  status: false,
  image:
    'https://pps.whatsapp.net/v/t61.24694-24/145432493_469217677787567_4489...',
};

describe('TaskCard', () => {
  test('should reneder title', () => {
    render(
      <UsersProvider>
        <TasksProvider>
          <TaskCard task={task} />
        </TasksProvider>
      </UsersProvider>
    );

    const headingElement = screen.getByRole('heading', {
      name: 'Add a daily schedule will include components of meetings.',
    });
    expect(headingElement).toBeVisible();
  });
});
