import React from "react";
import { Grow, Card, Grid,Link } from "@material-ui/core";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
            <Card sx={{ maxWidth: 345 }} className={classes.root}>
                <CardMedia
                component="img"
                height="250"
                image={work.image}
                alt="image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="white">
                    {work.company}
                </Typography>
                <Typography gutterBottom variant="h7" component="div" color="white">
                    {work.position}
                </Typography>
                <Typography variant="body" color="white">
                    {work.date}
                </Typography>
                <Typography variant="body2" color="white">
                    <Link href={work.url}>{work.url}</Link>
                </Typography>
                </CardContent>
            </Card>
        );
    });

    return(
        <div>
            <div className="section section-two" id="experience">
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