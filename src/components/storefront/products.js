import React, { useEffect } from 'react';

// Dependancies
import {If, Then, When } from 'react-if';
import { connect } from 'react-redux';
import { getProducts } from '../../store/products.js';

// Material UI Dependancies
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


// // TODO: create a product component that looks for the category
// // TODO: searches for matching "category" in the products then displays them
// // TODO: make a details/add to cart buttons on each product card
// // 

const Products = (props) => {

  const { products } = props;

  console.log(products)
  // console.log(activatedCategory, 'activatedCategory')
  // useEffect(() => {
  //   console.log(getProducts(activatedCategory))
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [activatedCategory, getProducts])
  // console.log(productList);
  return (
    <Container>
      {products.map((product) => (
        <Typography>
          {product.name}
          <br />
          {product.display_name}
        </Typography>

      ))}
    </Container>
  )
}

// found at https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/
const mapStateToProps = state => ({
  products: state.products.products,
  activatedCategory: state.categories.activatedCategory,
});


export default connect(mapStateToProps)(Products);