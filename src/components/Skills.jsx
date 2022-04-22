import React from "react";
import { Grow, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import '../index.css';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

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

const Skills = () => {

    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();
    var timeout = 1000;

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    const programmingSkillz = {
        labels: [
            'Personal Projects',
            'Experience (years)',
            'Classes Taken',
            'Work Projects',
            'Work Experience (years)',
          ],
          datasets: [
              {
                label: 'Python',
                data: [5, 5, 0, 10, 4],
                fill: true,
                backgroundColor: 'rgba(50, 205, 50, 0.2)',
                borderColor: 'rgb(50, 205, 50)',
                pointBackgroundColor: 'rgb(50, 205, 50)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(50, 205, 50)'
            }, 
            {
                label: 'Javascript',
                data: [8, 4, 0, 4, 2.5],
                fill: true,
                backgroundColor: 'rgba(159, 43, 104, 0.2)',
                borderColor: 'rgb(159, 43, 104)',
                pointBackgroundColor: 'rgb(159, 43, 104)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(159, 43, 104)'
            },
            {
                label: 'Swift/Obj-C',
                data: [5, 6, 1, 2, 2.5],
                fill: true,
                backgroundColor: 'rgba(255, 79, 0, 0.2)',
                borderColor: 'rgb(255, 79, 0)',
                pointBackgroundColor: 'rgb(255, 79, 0)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 79, 0)'
            },
            {
                label: 'Java',
                data: [4, 8, 6, 2, 1],
                fill: true,
                backgroundColor: 'rgba(204,204,0, 0.2)',
                borderColor: 'rgb(204,204,0)',
                pointBackgroundColor: 'rgb(204,204,0)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(204,204,0)'
            },
            {
                label: 'C++',
                data: [2, 8, 5, 1, 1],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }
        ]
    };

    return(
        <div className="skill-container">
            <Grow in={bannerGrow} timeout={timeout}>
                <h1>
                Skills
                </h1>
            </Grow>
            <Radar data={programmingSkillz} />
        </div>
    );
}

export default Skills;