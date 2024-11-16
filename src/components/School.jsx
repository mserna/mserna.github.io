import React from "react";
import { Grow, Card } from "@material-ui/core";
import { useEffect, useState } from "react";

import '../index.css';
import { timeout, learing} from "../utils/constants";
import { GridLayout } from "../utils/GridLayout";
import { useStyles } from "../utils/styles";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Education = () => {
    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();
    
    useEffect(() => {
        setBannerGrow(true);
    }, []);

    const allLearning = learing.map((coursework) => {
        return(
            <Card className={classes.root}>
                <img alt="proj-img" max-height="250" src={coursework.image} className={classes.image}/>
                <h2 className="highlight-text-white">
                    {coursework.name}
                </h2>
                <Grow in={bannerGrow} timeout={timeout}>
                    <h3 className="highlight-text-white">
                    {coursework.year}
                    <br/>
                    <p className="highligh-text-white">{coursework.description}</p>
                    <a className="highlight-text-white" target="_blank" rel="noopener noreferrer" href={coursework.link}>{coursework.link}<OpenInNewIcon/></a>
                    </h3>
                </Grow>
            </Card>
        );
    });

    return(
        <div>
            <div className="section-two" id="projects">
                <div className="container">
                    <Grow in={bannerGrow} timeout={timeout}>
                        <h1 className="highlight-text-white">
                        Education and Certificates
                        </h1>
                    </Grow>
                    <Grow in={bannerGrow} timeout={timeout}>
                        <GridLayout all={allLearning}/>
                    </Grow>
                </div>
            </div>
        </div>
    );
}

export default Education;