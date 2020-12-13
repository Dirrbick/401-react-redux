const initialState = {
  productList: [
    {_id: 54321, category: "Coding Classes", name: "Javascript", display_name: "code401", description: "coding"},
    {_id: 5432, category: "Coding Classes", name: "C#", display_name: "code401", description: "coding"},
    {_id: 543, category: "Coding Classes", name: "Python", display_name: "code401", description: "coding"},
    {_id: 54, category: "Food", name: "Pasta", display_name: "Alfredo", description: "Italian"},
    {_id: 321, category: "Food", name: "Burgers", display_name: "Cheese Burger", description: "American"},
    {_id: 24334, category: "Food", name: "Spaghetti", display_name: "pasta saucey", description: "Italian"},
  ],
  activeProduct: '',
  products: [],
}

export default function productReducer(state=initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "DETAIL":
      const record = state.filter(product => product._id === payload._id);
      return record
    case "ACTIVATED":
      const products = getProducts(payload.category);
      return { ...state, products: products }
    default:
      return state;
  }
}

export const getProducts = (category) => {
  const products = initialState.productList;
  const response = products.filter(product => product.category === category);
  return response;
} 

export const getProduct = (product) => {
  return {
    type: "DETAIL",
    payload: product,
  }
}