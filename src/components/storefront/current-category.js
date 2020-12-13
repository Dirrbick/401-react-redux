import React from 'react';

// Dependancies
import { When } from 'react-if';
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

  // console.log(props, 'activated category')
  // console.log(props.description, 'props.description')
  const classes = useStyles();


  return (
    <When condition={!!props.activedCategory} >
      <div>
        <Container maxWidth='sm'>
          <Typography variant='h3' component='h1' className={classes.category} gutterBottom>
            {props.activedCategory}
          </Typography>
          <Typography variant='h5' className={classes.details} paragraph>
            {/* {props.description} */}
            Description will go here....
          </Typography>
        </Container>
      </div>
    </When>
  )
}

// found at https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/
const mapStateToProps = state => ({
  categoryList: state.categories.description,
  activedCategory: state.categories.activedCategory,
});

export default connect(mapStateToProps)(CurrentCategory);