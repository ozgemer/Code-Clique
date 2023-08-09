import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const ToastContainerStyled = styled(ToastContainer)`
  .Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
  .Toastify__toast-theme--dark {
    background: #0a0a1b;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
  }
  .Toastify__close-button--dark {
    color: #ffffff;
    opacity: 0.3;
  }
  .Toastify__progress-bar-theme--dark {
    background: #f6c927;
  }
`;

export { ToastContainerStyled };
