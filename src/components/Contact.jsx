import React from "react";
import { Grow, Fade, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import IconButton from '@material-ui/core/IconButton';

import '../index.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color: "#ffffff",
      backgroundColor: "#164773"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
}));

const Contact = () => {

    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;
    var timeout2 = 2500;

    const handleSubmit = (e) => {
        console.log("Sending email");
    };
    
    const email = 'matthewserna714@gmail.com'

    return(
        <div className={classes.root}>
            <div className='container'>
                <Grow in={bannerGrow} timeout={timeout}>
                    <h1 className={classes.header}>
                    Contact
                    </h1>
                </Grow>
                <Grow in={bannerGrow} timeout={timeout}>
                    <IconButton color="inherit" href="mailto:matthewserna714@gmail.com">
                        <MarkunreadMailboxIcon />
                    </IconButton>
                </Grow>
            </div>
        </div>
    );
}

export default Contact;