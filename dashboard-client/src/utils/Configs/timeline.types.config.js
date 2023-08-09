import DoneIcon from '@mui/icons-material/Done';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const EventTypes = {
  done: {
    color: 'green',
    icon: DoneIcon,
  },
  inProgress: {
    color: 'orange',
    icon: NavigateNextIcon,
  },
  future: {
    color: 'lightgrey',
    icon: QuestionMarkIcon,
  },
};
export default EventTypes;
