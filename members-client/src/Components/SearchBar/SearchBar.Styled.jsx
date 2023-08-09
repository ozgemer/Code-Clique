import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const StyledBox = styled(Box)`
    background-color: #121231; 
    margin-bottom: 1rem;
    height: 3.75rem;
    width: 100%;
    border-radius: 0.75rem;
    padding-left: 1rem;
`;
const StyledSearchBar = styled(TextField)`
    & input {
        padding: 0;
    }
`;

export { StyledBox, StyledSearchBar };