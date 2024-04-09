import { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((cols) => ({
    gridStyle: {
        display: "grid", 
        gridTemplateColumns: `repeat(${cols}, 1fr)`, 
        gridGap: 20
    },
}));

const GridLayout = (props) => {
    const [cols, setGridCols] = useState(3);
    const classes = useStyles();

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
            {props.all}
        </div>
    )
}

export {GridLayout};
