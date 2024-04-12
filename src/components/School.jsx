import React from "react";
import { Grow, Card } from "@material-ui/core";
import { useEffect, useState } from "react";

import '../index.css';
import SFSULogo from "../resources/sfsu.png";
import CourseraLogo from "../resources/coursera.svg";
import { GridLayout } from "../utils/GridLayout";
import { useStyles } from "../utils/styles";

const Education = () => {
    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();
    const coursework = "Relevant courswork: Data Structures, Algorithms, Programming Methodology, Software Development using Android Studio, Machine Structures, Operating Systems, Game Development using Unity, Machine Learning Development";
    
    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;

    const learing = [
        {
            key: 1,
            name: "San Francisco State University",
            image: SFSULogo,
            description: coursework,
            link: "https://cs.sfsu.edu"
        },
        {
            key: 2,
            name: "Stanford Online (Coursera) - Machine Learning",
            image: CourseraLogo,
            description: "Course in Machine Learning by Andrew Ng, going over fundamental concepts and techniques, ranging from supervised and unsupervised learning to neural netowrks using the Octave programming language",
            link: "https://www.coursera.org/account/accomplishments/verify/8MSE2T6Q5LYH"
        },
    ];

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
                    <a className="highlight-text-white" href={coursework.link}>{coursework.link}</a>
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