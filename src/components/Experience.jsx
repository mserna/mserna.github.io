import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Badge } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import { Work, HourglassBottomRounded } from "@mui/icons-material";
import { isMobile } from "react-device-detect";

import '../index.css';
import { work } from "../utils/constants";

const useStyles = makeStyles({
    mainTechStyle: {
        textAlign: "left",
        marginBottom: "4px",
    },
    footerStyle: {
        textAlign: "left",
        marginTop: "15px",
    },
    footerMobileStyle: {
        textAlign: "left",
        marginTop: "15px",
        display: "inline-grid",
    }
});

const Experience = () => {
    const classes = useStyles();
    const sectionName = "Experience";
    const localWork = work.map((work, i) => {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
            return(
                <Badge pill className="main-badge mr-2" key={i}>
                    {technology}
                </Badge>
            );
        });

        var tech = technologies.map((technology, i) => {
            return(
                <Badge pill className="experience-badge mr-2" key={i}>
                    {technology}
                </Badge>
            );
        });

        return(
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={work.date}
                iconStyle={{
                    background: "#495f5f",
                    color: "#fff",
                    textAlign: "center",
                }}
                icon={<Work/>}
                key={i}
            >
                <div className={classes.mainTechStyle}>
                    {mainTech}
                </div>
                <h3 
                    className="veritical-timeline-element-title" 
                    style={{textAlign: "left"}}
                >
                    {work.position}
                </h3>
                <h4 
                    className="veritical-timeline-element-subtitle" 
                    style={{textAlign: "left"}}
                >
                    {work.company}
                </h4>
                <div className={isMobile ? classes.footerMobileStyle : classes.footerStyle}>
                    {tech}
                </div>
            </VerticalTimelineElement>
        );
    });

    return(
        <section id="resume" className="pb-5">
            <div className="col-md-12" mx="auto">
                <div className="col-md-12">
                    <h1 className="section-title" style={{color: "#000"}}>
                        <span className="text-black" style={{textAlign: "center"}}>
                            {sectionName}
                        </span>
                    </h1>
                </div>
            </div>
            <div className="col-md-8 mx-auto">
                <VerticalTimeline>
                    {localWork}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "#495f5f",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={<HourglassBottomRounded/>}
                    />
                </VerticalTimeline>
            </div>
            <div style={{paddingBottom: "20px"}}></div>
        </section>
    );
}

export default Experience;