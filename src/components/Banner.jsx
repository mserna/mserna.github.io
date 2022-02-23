import React from "react";
import { Grow, Fade, makeStyles} from "@material-ui/core";
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
                </div>
                <div>
                    <Grow in={bannerGrow} timeout={timeout2}>
                        <div className="container">
                            <h2 className="highlight-text">
                                I am a passionate software engineer with interests in
                                mobile development, backend development, automation and anything music/audio related.
                            </h2>
                            <Grow in={bannerGrow} timeout={timeout2}>
                                <h3 className="highlight-text">
                                    Top right! Those are my socials.
                                    <span role="img" aria-label="Emoji">
                                        ☝️
                                    </span> <br/>
                                    Down below you can learn more about me<t/>
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