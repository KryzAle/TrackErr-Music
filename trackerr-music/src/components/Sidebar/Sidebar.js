import React from "react";
import { SidebarContainer } from "./styles";
import logo from "../../img/logo-lr.png";
import SidebarOption from "./SidebarOptions";
import { PlayListsOption } from "./styles";
import {
    HomeOutlined,
    LibraryMusicOutlined,
    SearchOutlined,
} from "@material-ui/icons";
const Sidebar = () => {
    return (
        <SidebarContainer>
            <img src={logo} alt="spotify logo" />
            <SidebarOption title="Home" Icon={HomeOutlined} />
            <SidebarOption title="Search" Icon={SearchOutlined} />
            <SidebarOption title="Home" Icon={LibraryMusicOutlined} />
            <PlayListsOption>PLAYLISTS</PlayListsOption>
            <hr />
            <SidebarOption title="Sample Playlist 1" />
            <SidebarOption title="Sample Playlist 2" />
        </SidebarContainer>
    );
};

export default Sidebar;
