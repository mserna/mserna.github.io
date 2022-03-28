import React from "react";
import { Grow, Fade, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import '../index.css';
import BgImage from "../resources/cool-background.png";
import WridrLogo from "../resources/wridr-icon.png";
import HobbyMeLogo from "../resources/hobbyme-icon.PNG";
import TabMakerLogo from "../resources/tabmaker-icon.png";
import UnrealLogo from "../resources/Unreal_Engine-Logo.png"
import MLBLogo from "../resources/MLB-Logo.png";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundImage: `url(${BgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: '400px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const Projects = () => {

    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;
    var timeout2 = 2500;

    return(
        <div className={classes.root}>
            <div className="section" id="projects">
                <div className="container">
                    <Grow in={bannerGrow} timeout={timeout}>
                        <h1>
                        Projects
                        </h1>
                    </Grow>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <img src={UnrealLogo} width="100" height="150" className="center"/>
                                <h2 className="highlight-text">
                                    Untitled Video Game Project
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text">
                                    2022 (in progress)<br/>
                                    <a href="">Github</a>
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <img src={MLBLogo} width="250" height="150" className="center"/>
                                <h2 className="highlight-text">
                                    MLB Statcast App | React Web Application
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text">
                                    2021<br/>
                                    <a href="https://github.com/mserna/mlb-pitcher-statcast/tree/master/question_3">Github</a>
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <img src={HobbyMeLogo} width="100" height="100" className="center"/>
                                <h2 className="highlight-text">
                                    HobbyMe | iOS Mobile Application
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text">
                                    2020<br/>
                                    <a href="" onClick={() => window.open('https://github.com/mserna/Hobby_Me')}>Github</a>
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <img src={WridrLogo} width="200" height="200" className="center"s/>
                                <h2 className="highlight-text">
                                    Wridr | iOS/Android Mobile Application
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text">
                                        2016<br/>
                                        <a href="" onClick={() => window.open('https://github.com/mserna/Wridr')}>Github</a>
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;