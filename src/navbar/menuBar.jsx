import React from 'react';
import PropTypes from 'prop-types';

import { alpha, makeStyles } from '@material-ui/core/styles';
import { Grid, Tooltip, Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import Logo from '../resources/matthew_serna_logo.png';

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

    var sectionStyle = {
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#2A3439',
      backgroundSize: 'contain',
      minHeight: 50
    }

    return (
        <div className={classes.root}>
            <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar style={sectionStyle}>
                <Toolbar className={classes.customizeToolbar}>
                    <div>
                      <Grid>
                          <p>Matthew<br/>Serna</p>
                      </Grid>
                    </div>
                    <div className={classes.linksSection}>
                      <Tooltip title="Github profile" arrow>
                        <IconButton  color="inherit" onClick={() => window.open('https://github.com/mserna')}>
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="LinkedIn profile" arrow>
                        <IconButton color="inherit" onClick={() => window.open('https://www.linkedin.com/in/matthew-serna-46a1a073/')}>
                          <LinkedInIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="My music(coming soon)" arrow>
                        <IconButton color="inherit" label="My music(coming soon)">
                          <MusicNoteIcon />
                        </IconButton>
                      </Tooltip>
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