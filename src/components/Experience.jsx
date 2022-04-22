import React from "react";
import { Grow, Fade, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import '../index.css';
import ESLogo from "../resources/Element-Science-Logo.png";
import CiscoLogo from "../resources/cisco-icon.png";
import AutodeskLogo from "../resources/autodesk-icon.png";
import VitalLogo from "../resources/vital-icon.png";
import BFLogo from "../resources/bf-logo.jpg";


const Experience = () => {

    const [bannerGrow, setBannerGrow] = useState(false);
    const coursework = "Relevant Coursework: Data Structures, Algorithms, Programming Methodology, Software Development using Android Studio, Machine Structures, Operating Systems, Game Development using Unity, Machine Learning Development"
    const rightCol = "nine columns right-col";
    const leftCol = "nine columns left-col";
    const work = [
        {
            company: "Element Science",
            position: "Software Engineer II",
            date: "2019-",
            url: "https://www.elementscience.com/",
            image: ESLogo,
            direction: leftCol
        },
        {
            company: "Cisco",
            position: "Software Engineer in Test",
            date: "2019-2019 (contract)",
            url: "https://www.cisco.com/",
            image: CiscoLogo,
            direction: rightCol
        },
        {
            company: "Autodesk",
            position: "Python Automation Engineer",
            date: "2018-2019",
            url: "https://www.autodesk.com/",
            image: AutodeskLogo,
            direction: leftCol
        },
        {
            company: "Vital Enterprises",
            position: "QA Software Engineer",
            date: "2017-2018",
            url: "https://www.vital.enterprises/",
            image: VitalLogo,
            direction: rightCol
        },
        {
            company: "Blackfire Research",
            position: "Software QA | Software Engineer",
            date: "2016-2017",
            url: "https://bfrx.com/",
            image: BFLogo,
            direction: leftCol
        },
    ];

    const workHtml = work.map((work) => {
        return (
        <div>
        <div className={work.direction}>
            <div key={work.company}>
            <a href={work.url}>
                <img src={work.image} width="300" height="200" className="center"/>
            </a>
            <h3>{work.company}</h3>
            <p className="info">
                {work.position}
                <span>&bull;</span> <em className="date">{work.date}</em>
            </p>
            </div>
        </div>
        <div className={work.direction == rightCol ? leftCol : rightCol}>
            {work.description}
        </div>
        </div>
        );
      });

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;

    return(
        <div className="row-container" id="experience">
            <Grow in={bannerGrow} timeout={timeout}>
                <h1>
                Education
                </h1>
            </Grow>
            <Grow in={bannerGrow} timeout={timeout}>
                <div className="row-container">
                    <h3>San Francisco State University</h3>
                    <p className="info">
                        B.S. Computer Science <span>&bull;</span>
                        <em className="date">2017</em>
                    </p>
                    <p>{coursework}</p>
                </div>
            </Grow>
            <Grow in={bannerGrow} timeout={timeout}>
                <h1>
                Work Experience
                </h1>
            </Grow>
            <Grow in={bannerGrow} timeout={timeout}>
                <div>{workHtml}</div>
            </Grow>
        </div>
    );
}

export default Experience;