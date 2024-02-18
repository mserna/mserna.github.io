import React from "react";
import { Grow, Icon, SvgIcon, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { 
    Stack, 
    Box,
    ImageListItem,
    List, 
    ListItem, 
    ListItemIcon,
    ListItemButton,
    ListItemText 
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import '../index.css';
import ESLogo from "../resources/es-logo.svg";
import CiscoLogo from "../resources/Cisco-logo.png";
import AutodeskLogo from "../resources/autodesk.svg";
import VitalLogo from "../resources/vital-logo.svg";
import BFLogo from "../resources/bf-icon.png";
import SDSLogo from "../resources/sds_light.png";
import SFSULogo from "../resources/sfsu.png";

const useStyles = makeStyles((theme) => ({
    display: "grid", 
    gridTemplateColumns: `repeat(2, 1fr)`, 
    gridGap: 20
}));

const GridLayout = (props) => {
    const [cols, setGridCols] = useState(3);

    useEffect(() => {
        // console.log(window.outerWidth);
        if(window.outerWidth < 1000) {
            setGridCols(2);
        } else if(window.outerWidth >= 1000) {
            setGridCols(3);
        }
    }, [window.outerWidth]);
    
    return(
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gridGap: 20 }}>
            {props.content}
        </div>
    );
}

const Experience = () => {
    const myStyle = useStyles();
    const [bannerGrow, setBannerGrow] = useState(false);
    const coursework = <b>Relevant Coursework</b>;
    const coursework2 = "Data Structures, Algorithms, Programming Methodology, Software Development using Android Studio, Machine Structures, Operating Systems, Game Development using Unity, Machine Learning Development";

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;

    const work = [
        {
            company: "Sony San Diego Studio",
            position: "Frontend Logic Programmer",
            date: "2022-",
            url: "https://sonysandiegostudio.games/",
            image: SDSLogo,
        },
        {
            company: "Element Science",
            position: "Software Engineer II",
            date: "2019-2022",
            url: "https://www.elementscience.com/",
            image: ESLogo,
        },
        {
            company: "Cisco",
            position: "Software Engineer in Test",
            date: "2019",
            url: "https://www.cisco.com/",
            image: CiscoLogo,
        },
        {
            company: "Autodesk",
            position: "Python Automation Engineer",
            date: "2018-2019",
            url: "https://www.autodesk.com/",
            image: AutodeskLogo,
        },
        {
            company: "Vital Enterprises",
            position: "QA Software Engineer",
            date: "2017-2018",
            url: "https://www.vital.enterprises/",
            image: VitalLogo,
        },
        {
            company: "Blackfire Research",
            position: "Software QA | Software Engineer",
            date: "2016-2017",
            url: "https://bfrx.com/",
            image: BFLogo,
        },
    ];

    const workHtml = work.map((work) => {
        return (
        <div style={{color:"#fff"}}>
            <ListItem >
            <ListItemButton onClick={() => {window.open(work.url)}}>
                <ListItemIcon><img style={{width:'80px', height:'80px'}} src={work.image}></img></ListItemIcon>
                <ListItemText primary={work.company} />
            </ListItemButton>
            <ListItemText style={{marginLeft: 0}} primary={work.position} />
            <ListItemText style={{marginRight: 0}} primary={work.date} />
            </ListItem>
        </div>
        );
    });

    return(
        <div>
            <div className="section" id="experience">
                <Grow in={bannerGrow} timeout={timeout}>
                    <Box sx={{ flexGrow: 1}}>
                        <h1>Work Experience</h1>
                        <Grid container spacing={{xs:2, md:3}} columns={{xs:4, sm:8, md:12}}>
                            <br/>
                            <List sx={{ width: '75%', maxWidth: 900, marginLeft:"auto", marginRight:"auto"}}>
                                {workHtml}
                            </List>
                        </Grid>
                        
                        <h1>School</h1>
                        <Grid container spacing={{xs:2, md:3}} columns={{xs:4, sm:8, md:12}}>
                            <br/>
                            <List style={{color:"#fff"}} sx={{ width: '75%', maxWidth: 900, marginLeft:"auto", marginRight:"auto"}}>
                                <ListItem>
                                    &nbsp;&nbsp;<ListItemIcon><img style={{width:'80px', height:'80px'}} src={SFSULogo}></img></ListItemIcon>
                                    &nbsp;&nbsp;<ListItemText primary="San Francisco State University"></ListItemText>
                                    &nbsp;&nbsp;<ListItemText primary="B.S. Computer Science"></ListItemText>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<p>{coursework}: {coursework2}</p>
                                </ListItem>
                            </List>
                        </Grid>
                    </Box>
                </Grow>
            </div>
        </div>
    );
}

export default Experience;