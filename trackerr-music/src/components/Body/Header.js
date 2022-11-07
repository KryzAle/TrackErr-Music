import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <SearchIcon />
                <input
                    type="Text"
                    placeholder="Search for Artists, Songs, or Podcasts"
                />
            </HeaderLeft>
            <HeaderRight>
                <Avatar />
                <h4>KryzAle</h4>
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;
