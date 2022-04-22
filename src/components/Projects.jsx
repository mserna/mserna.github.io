import React from "react";
import { Grow, Fade, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import '../index.css';
import GithubLogo from "../resources/git-white.png";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: "#2A3439",
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
                        <h1 className="highlight-text-white">
                        Projects
                        </h1>
                    </Grow>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <img src={GithubLogo} width="250" height="130" className="center"/>
                                <h2 className="highlight-text-white">
                                    MLB Statcast | React
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text-white">
                                    2021<br/>
                                    <a className="highlight-text-white" href="https://github.com/mserna/mlb-pitcher-statcast/tree/master/question_3">Github</a>
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <img src={GithubLogo} width="250" height="130" className="center"/>
                                <h2 className="highlight-text-white">
                                    HobbyMe | iOS
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text-white">
                                    2020<br/>
                                    <a className="highlight-text-white" href="" onClick={() => window.open('https://github.com/mserna/Hobby_Me')}>Github</a>
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <img src={GithubLogo} width="250" height="130" className="center"/>
                                <h2 className="highlight-text-white">
                                    Wridr | iOS
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text-white">
                                        2016<br/>
                                        <a className="highlight-text-white" href="" onClick={() => window.open('https://github.com/mserna/Wridr')}>Github</a>
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