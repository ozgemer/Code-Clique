import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material"

const StyledUserCard = styled("div")`
    display: flex;
    justify-content: flex-end; 
    background-color: #121231;
    height: 10rem;
    width: 15rem;
`;
const StyledUserData = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%; 
    width: 100%; 
    & * {
       padding: 1.5rem;    
    }
`;
const StyledTypography = styled(Typography)`
    color: #F6C927;
`;
const StyledTopDecoration = styled("div")`
    width: 100%;
    height: 25%;
    background-color: #21213E; 
    padding: 0;
`;

export { StyledUserCard, StyledUserData, StyledTypography, StyledTopDecoration };
