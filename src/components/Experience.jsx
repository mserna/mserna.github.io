import React,  { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Badge } from "react-bootstrap";
import { makeStyles } from "@mui/styles";
import { Modal, ModalClose, ModalDialog, Tooltip, Typography } from "@mui/joy";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from "@mui/material";
import { Apple, Gamepad } from "@mui/icons-material";
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
        marginTop: "15px",
    },
    footerMobileStyle: {
        marginTop: "15px",
        display: "inline-grid",
    }
});

const Experience = () => {
    const classes = useStyles();
    const [workDetailsShow, setWorkDetailsShow] = useState(false);
    const [workModalData, setWorkModalData] = useState({});
    const [techStack, setTechStack] = useState({});
    const sectionName = "Experience";

    const detailsModalShow = (data) => {
        setWorkDetailsShow(true);
        setWorkModalData(data);
        var mainTech = data.technologies.map((technology, i) => {
            return(
                <Badge pill className="experience-badge mr-2" key={i}>
                    {technology}
                </Badge>
            );
        });
        setTechStack(mainTech);
    };

    const detailsModalClose = () => {
        setWorkDetailsShow(false);
        setWorkModalData({});
        setTechStack({});
    };

    const localWork = work.map((work, i) => {
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
            return(
                <Badge pill className="main-badge mr-2" key={i}>
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
                onTimelineElementClick={() => {detailsModalShow(work)}}
            >
                <div style={{ cursor: "pointer" }}  >
                    <h1
                        className="veritical-timeline-element-title" 
                        style={{textAlign: "left"}}
                    >
                        {work.position}
                    </h1>
                    <h2
                        className="veritical-timeline-element-subtitle" 
                        style={{textAlign: "left"}}
                    >
                        {work.company}
                    </h2>
                    <div className={classes.mainTechStyle}>
                        {mainTech}
                    </div>
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
            {workModalData && 
            <Modal
                open={workDetailsShow}
                onClose={detailsModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalDialog>
                    <ModalClose />
                    <div className="col-md-12">
                        <div className="col-md-10 mx-auto modal-content" style={{ paddingBottom: "50px" }}>
                                <img
                                    src={workModalData.gif ? workModalData.gif : workModalData.image}
                                    alt="projectImages"
                                    height="360"
                                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative', objectFit: "cover"}}
                                />
                        </div>
                        <div className="col-md-10 mx-auto" style={{ textAlign: "center" }}>
                            <h2 style={{ padding: "5px 5px 0 5px" }}>
                                {workModalData.company}
                                {workModalData.url &&
                                    <Tooltip title="Website">
                                        <IconButton 
                                            href={workModalData.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <OpenInNewIcon/>
                                        </IconButton>
                                    </Tooltip>
                                }
                                {workModalData.app &&
                                    <Tooltip title={workModalData.company === "Element Science" ? "App Store" : "PS Store"}>
                                        <IconButton
                                            href={workModalData.app}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {workModalData.company === "Element Science" ? <Apple/> : <Gamepad/>}
                                        </IconButton>
                                    </Tooltip>
                                }
                            </h2>
                            <Typography sx={{fontSize: "1.5em", textAlign: "center"}}>{workModalData.description}</Typography>
                            <div className={isMobile ? classes.footerMobileStyle : classes.footerStyle}>
                                {techStack}
                            </div>
                        </div>
                    </div>
                    </ModalDialog>
            </Modal>}
            <div style={{paddingBottom: "50px"}}></div>
        </section>
    );
}

export default Experience;