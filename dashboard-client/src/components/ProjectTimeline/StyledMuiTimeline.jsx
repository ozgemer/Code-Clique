import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient(to right, green, orange)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: 'green',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 5,
  },
}));

export const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: 'orange',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundColor: 'green',
  }),
}));

export function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed && <Check />}
      {active && <ArrowDownwardIcon />}
      {!active && !completed && <QuestionMarkIcon />}
    </ColorlibStepIconRoot>
  );
}
