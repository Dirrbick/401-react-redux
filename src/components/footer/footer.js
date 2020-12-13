import React from 'react';

// Material UI dependancies
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( {
  footer: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  }
})

const Footer = (props) => {
  
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Typography variant='h5' align='center' gutterBottom>&copy; 2020 Javascript 401</Typography>
        <Typography variant='subtitle1' align='center' component='p'>React + Redux + Material UI</Typography>
      </footer>
    </>
  )
}

export default Footer;