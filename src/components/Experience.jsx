import React from "react";
import { Grow, Fade, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import '../index.css';
import BgImage from "../resources/cool-background.png";
import ESLogo from "../resources/Element-Science-Logo.png";
import CiscoLogo from "../resources/cisco-icon.png";
import AutodeskLogo from "../resources/autodesk-icon.png";
import VitalLogo from "../resources/vital-icon.png";
import BFLogo from "../resources/bf-icon.png";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundSize: 'auto',
      minHeight: '400px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
}));

const Experience = () => {

    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;
    var timeout2 = 2500;

    return(
        <div className={classes.root}>
            <div id="experience">
                <div className="container">
                    <Grow in={bannerGrow} timeout={timeout}>
                        <h1>
                        Experience
                        </h1>
                    </Grow>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <a href="https://www.elementscience.com/">
                                    <img src={ESLogo} width="300" height="200" className="center"/>
                                </a>
                                <h2 className="highlight-text">
                                    Element Science | Full-Stack Software Engineer <t/>
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text">
                                    2019 - Current
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <a href="https://www.cisco.com/">
                                    <img src={CiscoLogo} width="200" height="200" className="center"s/>
                                </a>
                                <h2 className="highlight-text">
                                    Cisco | Software Engineer in Test <t/>
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text">
                                    2019 - 2019 (contract)
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <a href="https://www.autodesk.com/">
                                    <img src={AutodeskLogo} width="200" height="200" className="center"s/>
                                </a>
                                <h2 className="highlight-text">
                                    Autodesk | Python Automation Engineer <t/>
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text">
                                        2018 - 2019 (contract)
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                    </div>
                    {/* End of row */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <a href="https://www.vital.enterprises/">
                                    <img src={VitalLogo} width="150" height="200" className="center"s/>
                                </a>
                                <h2 className="highlight-text">
                                    Vital Enterprises | Software QA Engineer <t/>
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text">
                                        2017 - 2018
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                        <Grow in={bannerGrow} timeout={timeout2}>
                            <div>
                                <a href="https://bfrx.com/">
                                    <img src={BFLogo} width="200" height="200" className="center"s/>
                                </a>
                                <h2 className="highlight-text">
                                    Blackfire Research | Software Engineer <t/>
                                </h2>
                                <Grow in={bannerGrow} timeout={timeout2}>
                                    <h3 className="highlight-text">
                                        2016 - 2017
                                    </h3>
                                </Grow>
                            </div>
                        </Grow>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;