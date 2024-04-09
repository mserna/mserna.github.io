import React from "react";
import { Grow, Card, Grid,Link } from "@material-ui/core";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";

import '../index.css';
import SFSULogo from "../resources/sfsu.png";
import { useStyles } from "../utils/styles";

const School = () => {
    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();
    const coursework = <b>Relevant Coursework</b>;
    const coursework2 = "Data Structures, Algorithms, Programming Methodology, Software Development using Android Studio, Machine Structures, Operating Systems, Game Development using Unity, Machine Learning Development";

    return(
        <div>
            <div className="section section-two" id="experience">
                <div className="container">
                    <Grow in={bannerGrow} timeout={timeout}>
                        <h1 className="highlight-text-white">
                            School
                        </h1>
                    </Grow>
                    <Grow in={bannerGrow} timeout={timeout}>
                        <GridLayout all={allExperience}/>
                    </Grow>
                </div>
            </div>
        </div>
    );
}

export default School;