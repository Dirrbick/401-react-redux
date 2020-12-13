import React from 'react';

// Dependancies
import {If, Then, When } from 'react-if';
import { connect } from 'react-redux';

// Material UI Dependancies
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  category: {
    align: 'center',
    color: 'textPrimary',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  details: {
    color: "textSecondary",
    align: "center",
    textAlign: 'center'
  }
})) 

// TODO: create a function component that shows the active category

const CurrentCategory = (props) => {

  const classes = useStyles();

  const { activatedDescription, activatedCategory } = props;

  return (
    <When condition={!!activatedCategory} >
      <div>
        <Container maxWidth='sm'>
          <Typography variant='h3' component='h1' className={classes.category} gutterBottom>
            {activatedCategory}
          </Typography>
          <Typography variant='h5' className={classes.details} paragraph>
            {activatedDescription}
          </Typography>
        </Container>
      </div>
    </When>
  )
}

// found at https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/
const mapStateToProps = state => ({
  activatedDescription: state.categories.activatedDescription,
  activatedCategory: state.categories.activatedCategory,
});

export default connect(mapStateToProps)(CurrentCategory);