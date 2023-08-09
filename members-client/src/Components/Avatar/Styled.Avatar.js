import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import stringToColor from "./Util/stringToColor";

const StyledAvatar = styled(Avatar)`
    position: relative;
    width: ${({size}) => size}rem;
    height: ${({size}) => size}rem;
    text-align: center;
    background-color: ${({string}) => string ? stringToColor(string) : "transparent"};
    border: 0.25rem solid #121231;
`;

export { StyledAvatar };
