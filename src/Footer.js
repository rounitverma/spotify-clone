import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
// import { Grid, Slider } from '@material-ui/core';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo" src="https://media.gettyimages.com/photos/indias-mahendra-singh-dhoni-runs-on-the-pitch-during-the-2019-cricket-picture-id1151430063?s=612x612" alt="" />
                <div className="footer_songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>

            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />

            </div>

            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />

                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />

                    </Grid>
                    <Grid item xs>
                        <Slider />

                    </Grid>
                </Grid>

            </div>
            
        </div>
    );
}

export default Footer;
