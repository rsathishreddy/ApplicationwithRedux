const initialState = {
  cartItems: []
};

const reducer = (state = initialState, action) => {
  //console.log("pau=", action.payload);
  // console.log("carr=", state.cartItems);
  const pay = [...state.cartItems.concat(action.payload)];
  if (action.type === "addProduct") {
    return {
      ...state,
      cartItems: pay
    };
  }
  return state;
};

export default reducer;
