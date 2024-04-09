import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.text.secondary, 
      backgroundSize: 'cover',
      minHeight: '400px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    image: {
        margin: 'auto',
        flexGrow: 1,
        maxHeight: '250px',
        maxWidth: '250px',
        display: "block",
        paddingTop: "1rem",
    },
}));

export { useStyles }; 