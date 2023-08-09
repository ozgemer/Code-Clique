import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TitleIcon from '@mui/icons-material/Title';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import SendIcon from '@mui/icons-material/Send';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const icons = {
  arrowUp: <KeyboardArrowUpIcon />,
  arrowDown: <KeyboardArrowDownIcon />,
  calendar: <CalendarMonthIcon />,
  account: <AccountCircleIcon />,
  title: <TitleIcon />,
  status: <TaskAltIcon />,
  delete: <DeleteOutlineIcon />,
  edit: <EditIcon />,
  tag: <SellOutlinedIcon />,
  moreHoriz: <MoreHorizIcon sx={{ color: 'white' }} />,
  archive: <ArchiveIcon />,
  send: <SendIcon />,
  add: <AddCircleIcon />,
};

export default icons;
