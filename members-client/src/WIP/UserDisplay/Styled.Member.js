import { styled } from "@mui/material/styles";
import Popover from '@mui/material/Popover';
import { Badge } from "@mui/material";
const StyledPopover = styled(Popover)` 
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    z-index: -1;
`;
const StyledBadge = styled(Badge)`
    & .MuiBadge-badge {
        background-color: green;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        padding: 0;
        min-width: 0;
        min-height: 0;
        top: 1.75rem;
        left: 1.75rem;
    }
`;

export { StyledPopover, StyledBadge };

