import React from "react";
import { Grow, Card } from "@material-ui/core";
import { useEffect, useState } from "react";

import '../index.css';
import { timeout, work } from "../utils/constants";
import { useStyles } from "../utils/styles";
import { GridLayout } from "../utils/GridLayout";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Experience = () => {
    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();
    
    useEffect(() => {
        setBannerGrow(true);
    }, []);

    const allExperience = work.map((work) => {
        return(
            <Card className={classes.root}>
                <img alt="logo" max-height="250" src={work.image} className={classes.image}/>
                <h2 className="highlight-text-white">
                    {work.company}
                </h2>
                <h3 className="highlight-text-white">
                    {work.position}
                </h3>
                <Grow in={bannerGrow} timeout={timeout}>
                    <h3 className="highlight-text-white">
                    {work.date}
                    <br/>
                    <p className="highligh-text-white">{work.description}</p>
                    <a className="highlight-text-white" target="_blank" rel="noopener noreferrer" href={work.url}>{work.url}<OpenInNewIcon/></a>
                    </h3>
                </Grow>
            </Card>
        );
    });

    return(
        <div>
            <div className="section-two" id="experience">
                <div className="container">
                    <Grow in={bannerGrow} timeout={timeout}>
                        <h1 className="highlight-text-white">
                            Experience
                        </h1>
                    </Grow>
                    <Grow in={bannerGrow} timeout={timeout}>
                        <GridLayout all={allExperience}/>
                    </Grow>
                </div>
            </div>
        </div>
    );
}

export default Experience;