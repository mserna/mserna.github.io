import React from "react";
import { 
    Button,
    Grow,
    Typography,
} from "@material-ui/core";
import {
    Stack,
} from "@mui/material";
import { useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    flexGrow: {
        flex: '1',
    },
    buttonOne: {
        '&:hover': {
            backgroundColor: '#546d6d',
            color: '#fff',
        },
    },
    buttonTwo: {
        '&:hover': {
            backgroundColor: '#5f7c7c',
            color: '#fff',
        },
    },
    buttonThree: {
        '&:hover': {
            backgroundColor: '#6b8a8a',
            color: '#fff',
        },
    },
})

const Banner = () => {
    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();
    const headline = "Hello, welcome to my website!";
    const name = "Matthew Serna";

    useEffect(() => {
        setBannerGrow(true);
    }, []);
    
    var timeout = 1000;
    var timeout2 = 2500;

    let history = useHistory();
    const routeChange = (pathStr) => {
        history.push(pathStr);
    };

    return(
        <div className="banner" id="home">
            <div className="sub-banner">
                <Grow in={bannerGrow} timeout={timeout}>
                    <Typography variant="h1">{name}</Typography>
                </Grow>
                <Grow in={bannerGrow} timeout={timeout2}>
                    <div className="container" style={{color: "#ffffff"}}>
                        <Typography variant="h5">{headline}</Typography>
                        <br/>
                    </div>
                </Grow>
                <Grow in={bannerGrow} timeout={timeout2}>
                    <Stack className="container-body" spacing={2} direction="row" alignContent="center">
                        <Button variant="contained" className={classes.buttonOne} onClick={() => routeChange("experience")}>Experience</Button>
                        <Button variant="contained" className={classes.buttonTwo} onClick={() => routeChange("projects")}>Projects</Button>
                        <Button variant="contained" className={classes.buttonThree} href="mailto:matthewserna714@gmail.com">Contact</Button>
                    </Stack>
                </Grow>
            </div>
        </div>
    );
}

export default Banner;