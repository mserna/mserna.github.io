import { Grid } from '@material-ui/core';

const GridLayout = (props) => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} sm container>
                <Grid item xs>
                    {props.all}
                </Grid>
            </Grid>
        </Grid>
    )
}

export {GridLayout};
