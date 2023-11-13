import React from "react";
import { 
    Grow,
    Typography,
} from "@material-ui/core";
import { useEffect, useState} from "react";

const Banner = () => {
    const [bannerGrow, setBannerGrow] = useState(false);
    const headline = "Hello, welcome to my website!";
    const summary = "Here you will find what I've been doing with my life as well as some projects I have and will be working on. Enjoy!";
    const name = "Matthew Serna";
    const projects = document.getElementById("projects");

    useEffect(() => {
        setBannerGrow(true);
    }, []);
    
    var timeout = 1000;
    var timeout2 = 2500;

    return(
        <div className="banner" id="home">
            <div className="sub-banner">
                <Grow in={bannerGrow} timeout={timeout}>
                    <Typography variant="h1">{name}</Typography>
                </Grow>
                <Grow in={bannerGrow} timeout={timeout2}>
                    <div className="container" style={{color: "#ffffff"}}>
                        <Typography variant="h5">{headline}</Typography>
                        <Typography variant="h5">{summary}</Typography>
                    </div>
                </Grow>
            </div>
        </div>
    );
}

export default Banner;