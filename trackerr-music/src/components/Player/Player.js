import React from "react";
import { SpotifyBody } from "./styles";
import SideBar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

const Player = () => {
    return (
        <>
        <SpotifyBody>
            <SideBar />
            <Body />
        </SpotifyBody>
        <Footer/>
        </>
    );
};

export default Player;
