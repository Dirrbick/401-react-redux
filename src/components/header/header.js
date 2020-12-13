import React from "react";


// Material UI dependancies
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  header: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
  },

  button: {
    alignSelf: "center",
    textAlign: "right",
  },
});

export default function Header(props) {
  const styles = useStyles();

  return (
    <>
      <AppBar className={styles.header} position="relative">
        <ToolBar className={styles.toolBar}>
          <Grid container>
            <Grid item xs>
              {/* TODO: Make button go to home */}
              <Button>
                <Typography variant="h2" color="inherit">
                  OUR STORE
                </Typography>
              </Button>
            </Grid>
            <Grid item xs className={styles.button}>
              {/* TODO: Create something dynamic for how many items in Cart */}
              <Button >Cart (0)</Button> 
            </Grid>
          </Grid>
        </ToolBar>
      </AppBar>
    </>
  );
}
