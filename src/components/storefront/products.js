import React from "react";

// Dependancies
import { connect } from "react-redux";

// Material UI Dependancies
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

// // TODO: create a product component that looks for the category
// // TODO: searches for matching "category" in the products then displays them
// // TODO: make a details/add to cart buttons on each product card
// //
const useStyles = makeStyles({
  cardMedia: {
    height: 140,
  }
});



const Products = (props) => {
  const { products } = props;
  const classes = useStyles();

  return (

    <Container maxWidth="md">
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product._id}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={`https://source.unsplash.com/random?${product.name}`}
                title={product.name}
              />
              <CardContent className=''>
                <Typography>
                  {product.name}
                </Typography>
                <Typography>
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Add To Cart</Button>
                <Button>View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// found at https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/
const mapStateToProps = (state) => ({
  products: state.products.products,
  activatedCategory: state.categories.activatedCategory,
});

export default connect(mapStateToProps)(Products);
