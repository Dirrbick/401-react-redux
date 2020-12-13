import React from 'react';

import Categories from './categories.js';
import Products from './products.js';
import CurrentCategory from './current-category.js';

// TODO: Create a user friendly UI that is appealing to the eye
// TODO: Bring in the products and current-categories;
export default function Storefront() {
  return (
    <>
      <Categories />
      <CurrentCategory />
      <Products />

    </>
  )
}