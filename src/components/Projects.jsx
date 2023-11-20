import React from "react";
import { Grow, Card, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import '../index.css';
import GithubLogo from "../resources/git-white.png";
import PitcherPlots from "../resources/pitcher-plots.png";
import HobbyMe from "../resources/HobbyMe.png";
import Wridr from "../resources/wridr.png";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.text.secondary, 
      backgroundSize: 'cover',
      minHeight: '400px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    image: {
        flexGrow: 1,
        display: "block",
        paddingTop: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
    },
}));

const GridLayout = (props) => {
    const [cols, setGridCols] = useState(3);

    useEffect(() => {
        // console.log(window.outerWidth);
        if(window.outerWidth < 1000) {
            setGridCols(2);
        } else if(window.outerWidth >= 1000) {
            setGridCols(3);
        }
    }, [window.outerWidth]);
    
    return(
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gridGap: 20 }}>
            {props.allProjects}
        </div>
    );
}

export {GridLayout};

const Projects = () => {

    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();
    
    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;
    var timeout2 = 2500;

    const projects = [
        {
            key: 1,
            name: "MLB Pitcher Plots | React",
            image: PitcherPlots,
            year: "2021",
            description: "A React JS webpage that loads MLB pitcher data and visualizes it against other pitchers around the league.",
            link: "https://github.com/mserna/mlb-pitcher-statcast/tree/master/question_3"
        },
        {
            key: 2,
            name: "HobbyMe | iOS",
            image: HobbyMe,
            year: "2020",
            description: "A mobile application that allowed users to network, collaborate and meetup with others that shared similar hobbies.",
            link: "https://github.com/mserna/Hobby_Me"
        },
        {
            key: 3,
            name: "Wridr | iOS",
            image: Wridr,
            year: "2016",
            description: "A social platform mobile application that allowed users to share ride-sharing stories using Twitter/X API.",
            link: "https://github.com/mserna/Wridr"
        },
        {
            key: 4,
            name: "Untitled Project Name",
            image: GithubLogo,
            year: "2024",
            description: "In Progress",
            link: "https://github.com/mserna/"
        }
    ];

    const allProjects = projects.map((project) => {
        return(
            <Card className={classes.root}>
                <img src={project.image} className={classes.image}/>
                <h2 className="highlight-text-white">
                    {project.name}
                </h2>
                <Grow in={bannerGrow} timeout={timeout2}>
                    <h3 className="highlight-text-white">
                    {project.year}
                    <br/>
                    <p className="highligh-text-white">{project.description}</p>
                    <a className="highlight-text-white" href={project.link}>Github</a>
                    </h3>
                </Grow>
            </Card>
        );
    });

    return(
        <div>
            <div className="section" id="projects">
                <div className="container">
                    <Grow in={bannerGrow} timeout={timeout}>
                        <h1 className="highlight-text-white">
                        Projects
                        </h1>
                    </Grow>
                    <Grow in={bannerGrow} timeout={timeout2}>
                        <GridLayout allProjects={allProjects}/>
                    </Grow>
                </div>
            </div>
        </div>
    );
}

export default Projects;