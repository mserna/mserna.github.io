import React from "react";
import { Grow, Fade } from "@material-ui/core";
import { useEffect, useState } from "react";

import '../index.css';

const Projects = () => {

    const [bannerGrow, setBannerGrow] = useState(false);

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;
    var timeout2 = 2500;

    return(
        <div className="section" id="home">
            <div className="container">
                <div>
                    <Grow in={bannerGrow} timeout={timeout}>
                        <h1>
                        Projects
                        </h1>
                    </Grow>
                    <Grow in={bannerGrow} timeout={timeout2}>
                        <div>
                        <h2>
                            Wridr - iOS/Android application <t/>
                            <span role="img" aria-label="Emoji">
                                📱
                            </span>
                        </h2>
                    <Grow in={bannerGrow} timeout={timeout2}>
                        <h3>
                            Social app where users share stories on ride-sharing experiences.
                        </h3>
                    </Grow>
                    </div>
                    </Grow>
                </div>
            </div>
        </div>
    );
}

export default Projects;