import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    linksSection: {
        marginLeft: 'auto',
    }
  }));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const HideAppBar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                <Toolbar>
                    <Typography variant="h6">Logo Placeholder</Typography>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Experience</Button>
                    <div className={classes.linksSection}>
                        <IconButton  color="inherit">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <MusicNoteIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <EmailIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            </React.Fragment>
        </div>
    );
}

export { HideAppBar };