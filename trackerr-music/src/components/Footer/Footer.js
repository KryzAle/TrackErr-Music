import { Grid, Slider } from "@material-ui/core";
import {
    PlayCircleOutlineOutlined,
    PlaylistPlay,
    RepeatOneOutlined,
    ShuffleOutlined,
    SkipNextOutlined,
    SkipPreviousOutlined,
    VolumeDownRounded,
} from "@material-ui/icons";
import React from "react";
import {
    FooterCenter,
    FooterContainer,
    FooterLeft,
    FooterRight,
} from "./styles";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft>
                <img
                    //portada el amante
                    src="https://i.pinimg.com/originals/0d/0d/0d/0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d.jpg"
                    alt="portada"
                />
                <div>
                    <h4>El Amante</h4>
                    <p>Nicky Jam</p>
                </div>
            </FooterLeft>
            <FooterCenter>
                <ShuffleOutlined />
                <SkipPreviousOutlined />
                <PlayCircleOutlineOutlined />
                <SkipNextOutlined />
                <RepeatOneOutlined />
            </FooterCenter>
            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDownRounded />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </FooterRight>
        </FooterContainer>
    );
};

export default Footer;
