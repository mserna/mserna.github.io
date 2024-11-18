import React, { useEffect, useState }  from "react";
import { Modal, ModalClose, ModalDialog, Tooltip, Typography } from "@mui/joy";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

import '../index.css';
import { projects } from "../utils/constants";

const Projects = () => {
    const [projectDetailsShow, setProjectDetailsShow] = useState(false);
    const [projectModalData, setProjectModalData] = useState({});
    const sectionName = "Projects";

    const detailsModalShow = (data) => {
        setProjectDetailsShow(true);
        setProjectModalData(data);
    };

    const detailsModalClose = () => {
        setProjectDetailsShow(false);
        setProjectModalData(null);
    };

    const allProjects = projects.map((proj) => {
        return(
            <div
                className="col-sm-12 col-md-6 col-lg-4"
                key={proj.name}
                style={{ cursor: "pointer" }}
            >
                <span className="portfolio-item d-block">
                    <div className="foto" onClick={() => detailsModalShow(proj)}>
                        <div>
                            <img
                                src={proj.image}
                                alt="projectImages"
                                height="230"
                                style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                            />
                            <span className="project-date">{proj.year}</span>
                            <br />
                            <p className="project-title-settings mt-3">
                                {proj.name}
                            </p>
                        </div>
                </div>
                </span>
          </div>
        );
    });

    return(
        <section id="portfolio">
            <div className="col-md-12">
                <h1 className="section-title" style={{color: "#000"}}>
                    <span>{sectionName}</span>
                </h1>
                <div className="col-md-12 mx-auto" style={{display: "flex"}}>
                    <div className="row mx-auto">
                        {allProjects}
                    </div>
                </div>
                {projectModalData && 
                <Modal
                    open={projectDetailsShow}
                    onClose={detailsModalClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <ModalDialog>
                        <ModalClose />
                        <div className="col-md-12">
                            <div className="col-md-10 mx-auto modal-content" style={{ paddingBottom: "50px" }}>
                                    <img
                                        src={projectModalData.gif ? projectModalData.gif : projectModalData.image}
                                        alt="projectImages"
                                        height="360"
                                        style={{marginBottom: 0, paddingBottom: 0, position: 'relative', objectFit: "cover"}}
                                    />
                            </div>
                            <div className="col-md-10 mx-auto" style={{ textAlign: "center" }}>
                                <h2 style={{ padding: "5px 5px 0 5px" }}>
                                    {projectModalData.name}
                                    {projectModalData.link &&
                                        <Tooltip title="Demo">
                                            <IconButton 
                                                href={projectModalData.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <OpenInNewIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    }
                                    {projectModalData.github &&
                                        <Tooltip title="Source Code">
                                            <IconButton
                                                href={projectModalData.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <GitHubIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    }
                                </h2>
                                <Typography sx={{fontSize: "1.5em", textAlign: "center"}}>{projectModalData.description}</Typography>
                                <Typography>{projectModalData.tech}</Typography>
                            </div>
                        </div>
                        </ModalDialog>
                </Modal>
                }
            </div>
        </section>
    );
}

export default Projects;