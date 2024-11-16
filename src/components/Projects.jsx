import React from "react";
import { Grow, Card } from "@material-ui/core";
import { useEffect, useState } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import '../index.css';
import { timeout, timeout2, projects } from "../utils/constants";
import { useStyles } from "../utils/styles";
import { GridLayout } from "../utils/GridLayout";

const Projects = () => {

    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();
    
    useEffect(() => {
        setBannerGrow(true);
    }, []);

    const allProjects = projects.map((project) => {
        return(
            <Card className={classes.root}>
                <img alt="proj-img" max-height="250" src={project.image} className={classes.image}/>
                <h2 className="highlight-text-white">
                    {project.name}
                </h2>
                <Grow in={bannerGrow} timeout={timeout2}>
                    <h3 className="highlight-text-white">
                    {project.year}
                    <br/>
                    <p className="highligh-text-white">{project.description}</p>
                    {project.link &&
                        <>
                        <a className="highlight-text-white" target="_blank" rel="noopener noreferrer" href={project.link}>Site<OpenInNewIcon/></a><br/><br/>
                        </>
                    }
                    {project.github &&
                        <>
                            <a className="highlight-text-white" target="_blank" rel="noopener noreferrer" href={project.github}>Github<OpenInNewIcon/></a>
                        </>
                    }
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
                        Projects
                        </h1>
                    </Grow>
                    <Grow in={bannerGrow} timeout={timeout2}>
                        <GridLayout all={allProjects}/>
                    </Grow>
                </div>
            </div>
        </div>
    );
}

export default Projects;