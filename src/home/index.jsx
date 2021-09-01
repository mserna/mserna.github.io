import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

import Banner from "../components/Banner";
import Projects from "../components/Projects";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
            <Projects></Projects>
        </div>
    );
}

export { Home };