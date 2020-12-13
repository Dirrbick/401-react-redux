const initialState = {
  categoryList: [
    { _id: 23456, name: "Coding Classes", description: "List of Coding Classes" },
    { _id: 12345, name: "Food", description: "List of Foods" },
  ],
  activatedCategory: '',
  activatedDescription: '',
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "INITIALIZE":
      return initialState;
    case "ACTIVATED":
      return {...state, activatedCategory: payload.category, activatedDescription: payload.description}
    default:
      return state;
  }
}


export const initialize = () => {
  return {
    type: 'INITIALIZE',
  }
}
export const activated = (category, description) => {
  return {
    type: "ACTIVATED",
    payload: {
      category,
      description
    }
    };
};
