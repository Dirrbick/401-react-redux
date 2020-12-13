import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import * as action from "../../store/categories.js";

// this will be the file that renders categories to the page
// we will bring in the categories reducer and

// TODO: get the categories to populate
// TODO: create an action for when active, send category data
//
function Categories() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.categoryList);

  
  const activate = (category) => {
    dispatch(action.activated(category))
  }

  return (
    <div>
      <Typography>Browse our Categories</Typography>
      {category.map((item) => {
        return <Button key={item._id} onClick={() => activate(item.name)}>{ item.name }</Button>
      })}
    </div>
  );
}



export default Categories;
