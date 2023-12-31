import { v4 as uuidv4 } from 'uuid';

const tasks = [
  {
    id: uuidv4(),
    status: 'todo',
    title: 'Add a daily schedule will include components of meetings.',
    description: '',
    tags: [{ title: 'bug', color: '#d41e18' }],
    assignee: 'Sorer',
    index: [],
    createdAt: '2022-07-29',
  },
  {
    id: uuidv4(),
    status: 'in progress',
    title: 'Add Tasks Status Columns',
    description: '',
    tags: [],
    assignee: 'InHumanly',
    index: [],
    createdAt: '2022-08-01',
  },
  {
    id: uuidv4(),
    status: 'review',
    title:
      'Add a chart showing where the tasks currently stand divided by percents.',
    description: '',
    tags: [],
    assignee: 'Vaalius',
    index: [],
    createdAt: '2022-05-01',
  },
  {
    id: uuidv4(),
    status: 'closed',
    title: 'Create design system folder & Create npm organization',
    description: '',
    tags: [{ title: 'bug', color: '#d41e18' }],
    assignee: 'F8_DarQ',
    index: [],
    createdAt: '2022-03-01',
  },
  {
    id: uuidv4(),
    status: 'in progress',
    title: 'Add Tasks Filtering Components',
    description: '',
    tags: [],
    assignee: 'bar shoshani',
    index: [],
    createdAt: '2022-03-01',
  },
  {
    id: uuidv4(),
    status: 'in progress',
    title: 'Add a timeline of the overall project schedule.',
    description: '',
    tags: [],
    assignee: 'Alon manshari',
    index: [],
    createdAt: '2022-08-01',
  },
  {
    id: uuidv4(),
    status: 'todo',
    title: 'Add a chart showing the active bugs by priority.',
    description: '',
    tags: [{ title: 'bug', color: '#d41e18' }],
    assignee: 'Alon manshari',
    index: [],
    createdAt: '2022-08-01',
  },
];

export default tasks;
