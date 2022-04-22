import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import ParticlesBg from "particles-bg";

import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const Home = () => {
    const classes = useStyles();
    const numShapes = 25;

    return (
        <>
        <ParticlesBg num={numShapes} type="cobweb" bg={true} color="#2A3439"/>
        <div className={classes.root}>
            <Banner></Banner>
            <Experience></Experience>
            <br/>
            <Projects></Projects>
            <br/>
            <Skills></Skills>
            <br/>
            <Contact></Contact>
        </div>
        </>
    );
}

export { Home };