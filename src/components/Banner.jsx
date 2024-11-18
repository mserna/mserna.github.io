import React from "react";
import { makeStyles } from "@mui/styles";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from "@mui/material";

import { learning, socials} from "../utils/constants";

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
        width:"50%",
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
    const hello = "Hello! Welcome to my site. ";
    const about = "I am computer programmer who loves";
    const hobby1 = " playing and developing video games";
    const hobby2 = ", making music";
    const hobby3 = " and riding my bike.";

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

    return(
        <section id="about" className={classes.root} style={{color: "#fff"}}>
            <div className={classes.banner}>
                <h1 style={{color: "#fff"}}>{hello}<br/>{about}{hobby1}{hobby2}{hobby3}</h1>
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
                <div className={classes.education}>
                    <div>
                        <h2>Recommended Reads</h2>
                        <div className={classes.educationLine}>
                    </div>
                    <h3>Programming</h3>
                        <li><u><i>Effective C++: 55 Specific Ways to Improve Your Programs and Designs</i></u> <b>By Scott Meyers</b>
                        <IconButton
                            href="https://www.goodreads.com/book/show/105125.Effective_C_"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon/>
                        </IconButton></li>
                        <li><u><i>Game Programming Patterns</i></u> <b>By Bystrom Robert</b>
                        <IconButton
                            href="https://www.goodreads.com/book/show/15499449-game-programming-patterns"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon/>
                        </IconButton></li>
                    <h3>Leisure</h3>
                        <li><u><i>Kafka on the Shore</i></u> <b>By Haruki Murakami</b>
                        <IconButton
                            href="https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon/>
                        </IconButton></li>
                        <li><u><i>11/22/63</i></u> <b>By Stephen King</b>
                        <IconButton
                            href="https://www.goodreads.com/book/show/10644930-11-22-63"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon/>
                        </IconButton></li>
                        <li><u><i>Catch Me If You Can</i></u> <b>By Frank W. Abagnale</b>
                        <IconButton
                            href="https://www.goodreads.com/book/show/138269.Catch_Me_If_You_Can"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon/>
                        </IconButton></li>
                        <li><u><i>Blood, Sweat, and Pixels</i></u> <b>By Jason Schreier</b>
                        <IconButton
                            href="https://www.goodreads.com/book/show/34376766-blood-sweat-and-pixels"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon/>
                        </IconButton></li>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;