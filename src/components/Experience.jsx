import React from "react";
import { Grow, Card } from "@material-ui/core";
import { useEffect, useState } from "react";

import '../index.css';
import ESLogo from "../resources/es.jpg";
import CiscoLogo from "../resources/cisco.png";
import AutodeskLogo from "../resources/autodesk.png";
import VitalLogo from "../resources/vital-logo.svg";
import BFLogo from "../resources/bf.png";
import SDSLogo from "../resources/sds_light.png";
import { useStyles } from "../utils/styles";
import { GridLayout } from "../utils/GridLayout";

const Experience = () => {
    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();
    
    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;

    const work = [
        {
            company: "Sony San Diego Studio",
            position: "Frontend Logic Programmer",
            date: "2022-",
            url: "https://sonysandiegostudio.games/",
            image: SDSLogo,
        },
        {
            company: "Element Science",
            position: "Software Engineer II",
            date: "2019-2022",
            url: "https://www.elementscience.com/",
            image: ESLogo,
        },
        {
            company: "Cisco",
            position: "Software Engineer in Test",
            date: "2019",
            url: "https://www.cisco.com/",
            image: CiscoLogo,
        },
        {
            company: "Autodesk",
            position: "Python Automation Engineer",
            date: "2018-2019",
            url: "https://www.autodesk.com/",
            image: AutodeskLogo,
        },
        {
            company: "Vital Enterprises",
            position: "QA Software Engineer",
            date: "2017-2018",
            url: "https://www.vital.enterprises/",
            image: VitalLogo,
        },
        {
            company: "Blackfire Research",
            position: "Software QA | Software Engineer",
            date: "2016-2017",
            url: "https://bfrx.com/",
            image: BFLogo,
        },
    ];

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
                    <a className="highlight-text-white" href={work.url}>{work.url}</a>
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