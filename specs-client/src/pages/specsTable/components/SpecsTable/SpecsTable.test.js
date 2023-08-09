import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpecsTable from './SpecsTable';

describe('SpecsTable', () => {
  test('should render table', async () => {
    render(<SpecsTable specList={[]} />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('should show correct amount of specs', async () => {
    const specs = data;
    render(<SpecsTable specList={specs} />);
    const tableRows = screen.queryAllByTestId(/spec-preview/i);
    expect(tableRows.length).toBe(specs.length);
    const tableFooterPaging = screen.getByText(
      new RegExp(`of ${tableRows.length}`, 'i')
    );
    expect(tableFooterPaging).toBeInTheDocument();
  });
});

const data = [
  {
    date: 1599760471270,
    status: 'done',
    participants: ['Alon Fayler', 'Amnon Ashkenazy'],
    doc: {
      blocks: [
        {
          type: 'header',
          data: { level: 1, text: 'Code Clique' },
        },
        {
          type: 'paragraph',
          data: {
            text: 'A task manager that is easy to operate and has simple functionality.For managing a small project and for our use.',
          },
        },
      ],
    },
  },
  {
    date: 1599560471270,
    status: 'review',
    participants: ['Oz Gemer', 'Amit Paz', 'Bar Shoshani'],
    doc: {
      blocks: [
        {
          type: 'header',
          data: { level: 1, text: 'Group Finder' },
        },
        {
          type: 'paragraph',
          data: {
            text: 'meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening every day—join the fun.',
          },
        },
      ],
    },
  },
  {
    date: 1599460471270,
    status: 'in-progress',
    participants: ['Alon Manshari', 'Sapir Moskovich'],
    doc: {
      blocks: [
        {
          type: 'header',
          data: { level: 1, text: 'Task List Generator' },
        },
        {
          type: 'paragraph',
          data: {
            text: 'produce (a set or sequence of items) by performing specified mathematical or logical operations on an initial set.',
          },
        },
      ],
    },
  },
];
