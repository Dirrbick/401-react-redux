const initialState = {
  categoryList: [
    { _id: 23456, name: "coding", description: "maybe?" },
    { _id: 12345, name: "nothing", description: "maybe?" },
    { _id: 34532, name: "testing", description: "maybe?" },
  ],
  activedCategory: '',
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "INITIALIZE":
      return initialState;
    case "ACTIVATED":
      return {...state, activedCategory: payload}
    default:
      return state;
  }
}


export const initialize = () => {
  return {
    type: 'INITIALIZE',
  }
}
export const activated = (category) => {
  return {
    type: "ACTIVATED",
    payload: category,
    };
};
