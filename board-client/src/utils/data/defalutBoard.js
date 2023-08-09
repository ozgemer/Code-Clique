import { v4 as uuidv4 } from 'uuid';

const columns = [
  {
    id: uuidv4(),
    title: 'todo',
    color: '#36B176',
    tasks: [],
  },
  {
    id: uuidv4(),
    title: 'in progress',
    color: '#3685B1',
    tasks: [],
  },
  {
    id: uuidv4(),
    title: 'review',
    color: '#EE786C',
    tasks: [],
  },
  {
    id: uuidv4(),
    title: 'closed',
    color: '#F6C927',
    tasks: [],
  },
];

export default columns;
