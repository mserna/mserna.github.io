import React from "react";
import { Grow, makeStyles, IconButton, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import Carousel from 'react-material-ui-carousel';

import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const useStyles = makeStyles((theme) => ({
    paper: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "#ffffff",
    },
    banner: {
        height: '100%',
        position: 'relative'
    }
}));

const Project = (props) => {
    const classes = useStyles();

    return (
        <div>
            <h2>{props.project.name}</h2>
            <p>{props.project.description}</p>
            <IconButton  color="inherit" onClick={() => window.open(props.project.link)}>
                <GitHubIcon />
            </IconButton>
            <Button className={classes.paper}>
                Check it out!
            </Button>
        </div>
    );
}

const Award = (props) => {
    const classes = useStyles();

    return (
        <div>
            <h2>{props.award.name}</h2>
            <p>{props.award.description}</p>
            <IconButton  color="inherit" onClick={() => window.open(props.award.link)}>
                <LaunchIcon />
            </IconButton>
        </div>
    );
}

const  MyCarousel = () => {
    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    let timeout = 1000;

    let projects = [
        {
            name: "Baseball Pitcher Statcast",
            description: "Stats view of pitchers across the league",
            link: "https://github.com/mserna/mlb-pitcher-statcast"
        },
        {
            name: "HobbyMe",
            description: "Mobile application that allows users with similar hobbies to network",
            link: "https://github.com/mserna/Hobby_Me"
        },
        {
            name: "Wridr",
            description: "Mobile application for sharing ridesharing stories",
            link: "https://github.com/mserna/Wridr"
        }
    ];

    let awards = [
        {
            name: "TechCrunch",
            description: "Recognition for SafeZone mobile application",
            link: "https://techcrunch.com/2016/09/11/safezone-guides-you-to-safe-spaces-in-crises/"
        },
        {
            name: "SFSU COSE Showcase – 3rd place in Overall Competition",
            description: "For an Android mobile application called SafeZone, which allowed users to alert first responders during emergencies",
            link: "https://techcrunch.com/2016/09/11/safezone-guides-you-to-safe-spaces-in-crises/"
        }
    ]

    return(
        <div className={classes.paper} id="projects">
            <Grow in={bannerGrow} timeout={timeout}>
                <h1 className="highlight-text-white">
                Projects
                </h1>
            </Grow>
            <Carousel>
                {
                    projects.map( (item, i) => <Project key={i} project={item} /> )
                }
            </Carousel>
            {/* <Grow in={bannerGrow} timeout={timeout}>
                <h1 className="highlight-text-white">
                Awards/Recognitions
                </h1>
            </Grow>
            <Carousel style={{height: '80%', width: '80%'}}>
                {
                    awards.map( (item, i) => <Award key={i} award={item} /> )
                }
            </Carousel> */}
        </div>
    );
}

export default MyCarousel;