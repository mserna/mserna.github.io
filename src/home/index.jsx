import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

import Banner from "../components/Banner";
import Projects from "../components/Projects";
import BgImage from "../resources/cool-background-img.png";
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundImage: `url(${BgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      minHeight: '1600px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Banner></Banner>
            <br/>
            <Experience></Experience>
            <br/>
            <Projects></Projects>
            <br/>
            <Contact></Contact>
        </div>
    );
}

export { Home };