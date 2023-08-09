import React from "react";
import { MembersBarContainer } from "./MembersBar.Styled";
import AddOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SearchBar from "../SearchBar/SearchBar";

function MembersBar({ searchQuery, setSearchQuery }) {
    return (
        <MembersBarContainer>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        </MembersBarContainer>
    );
}

export default MembersBar;