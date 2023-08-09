import { StyledRole } from "./Role.styled";

function Role({ roledata }) {
    return <StyledRole label={roledata.name} rolecolor={roledata.color} />
}

export default Role;