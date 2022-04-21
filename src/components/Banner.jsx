import React from "react";
import { 
    Grow,
    IconButton,
    Typography,
} from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import { useEffect, useState } from "react";

import '../index.css';

const Banner = () => {

    const [bannerGrow, setBannerGrow] = useState(false);
    const summaryText = "I am a passionate software engineer with interests in mobile development, API development, automation and music."
    const name = "Matthew Serna"

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;
    var timeout2 = 2500;

    return(
        <div className="banner" id="home">
            <div className="sub-banner">
                <Grow in={bannerGrow} timeout={timeout}>
                    <Typography variant="h1">{name}</Typography>
                </Grow>
                <Grow in={bannerGrow} timeout={timeout2}>
                    <div className="container">
                        <h2 className="highlight-text">{summaryText}</h2>
                        <IconButton color="#000000">
                            Github<GitHubIcon></GitHubIcon>
                        </IconButton>
                        <IconButton color="#000000">
                            Projects<WorkIcon></WorkIcon>
                        </IconButton>
                    </div>
                </Grow>
            </div>
        </div>
    );
}

export default Banner;