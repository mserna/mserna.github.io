import React from "react";
import { Grow, Fade } from "@material-ui/core";
import { useEffect, useState } from "react";

import '../index.css';

const Banner = () => {

    const [bannerGrow, setBannerGrow] = useState(false);

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;
    var timeout2 = 2500;

    return(
        <div className="section" id="home">
            <div className="container">
                <div className="header-wrapper">
                    <Grow in={bannerGrow} timeout={timeout}>
                        <h1>
                        Hi, I'm Matt <t/>
                        <span role="img" aria-label="Emoji">
                            🧙
                        </span>
                        </h1>
                    </Grow>
                    <Grow in={bannerGrow} timeout={timeout2}>
                        <div className="header-wrapper">
                        <h2>
                            I am a passionate software engineer with interests in
                            mobile development, backend services, and anything music related.
                        </h2>
                    <Grow in={bannerGrow} timeout={timeout2}>
                        <h3>
                            Top right! Those are my socials.
                        </h3>
                    </Grow>
                    <Grow in={bannerGrow} timeout={timeout2}>
                    <h3>
                        Down below you can learn more about me and my work history <t/>
                        <span role="img" aria-label="Emoji">
                            👇
                        </span>
                    </h3>
                    </Grow>
                    </div>
                    </Grow>
                </div>
            </div>
        </div>
    );
}

export default Banner;