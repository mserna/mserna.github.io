import React from "react";
import { makeStyles } from "@mui/styles";

import { learning, socials} from "../utils/constants";
import ProfilePic from "../resources/profile.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from "@mui/material";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      paddingTop: "150px",
      paddingBottom: "150px",
    },
    paper: {
      textAlign: 'center',
    },
    image: {
        margin: 'auto',
        flexGrow: 1,
        maxHeight: '250px',
        maxWidth: '250px',
        display: "block",
        paddingTop: "1rem",
    },
    banner: {
        display: "flex",
        flexFlow: "row wrap",
        width:"90%",
        maxWidth: "1400px",
        marginRight: "auto", 
        marginLeft: "auto"
    },
    education: {
        fontSize: "14px",
        flex: "1 1 0",
        marginBottom: "0",
    },
    educationSpace: {
        paddingRight: "2rem",
    },
    educationLine: {
        display: "flex",
        alignItems: "center",
    },
});

const Banner = () => {
    const classes = useStyles();
    const hello = "Hello, welcome to my website!";
    const about = "I am Matthew Serna";

    const allLearning = learning.map((coursework) => {
        return(
            <>
                <img alt="icon" src={coursework.image} className="banner-icon"></img>
                <div className={classes.educationLine}>
                    <div>{coursework.name}</div>
                </div>
                <div className={classes.educationLine}>
                    <div>{coursework.degree}</div>
                </div>
                <br/>
            </>
        );
    });

    const localSocials = socials.map((soc) => {
        return(
            <>
                <div className={classes.educationLine}>
                    <img alt="icon" src={soc.icon} className="banner-icon" style={{paddingRight: "1rem"}}></img>
                    <div>{soc.name}</div>
                    <IconButton
                        href={soc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <OpenInNewIcon/>
                    </IconButton>
                </div>
                <br/>
            </>
        );
    });

    const hobbies = {};

    return(
        <section id="about" className={classes.root} style={{color: "#fff"}}>
            <div className={classes.banner}>
                <div>
                    <h1 style={{color: "#fff"}}>{hello}</h1>
                    <h1 style={{color: "#fff"}}>{about}</h1>
                </div>
                <div style={{
                    margin: "auto",
                    marginBottom: "2rem",
                    marginTop: "2rem",
                }}>
                    <div className="polaroid">
                        <img
                            src={ProfilePic}
                            alt="Avatar placeholder"
                        />
                    </div>
                </div>
            </div>
            <div className={classes.banner}>
                <div className={classes.education}>
                    <h2>Education</h2>
                    {allLearning}
                </div>
                <div className={classes.education}>
                    <h2>Socials</h2>
                    {localSocials}
                </div>
            </div>
        </section>
    );
}

export default Banner;