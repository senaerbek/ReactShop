import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems.slice()
    .filter((x) => x.id !== product.id);
  dispatch({ 
    type: REMOVE_FROM_CART,
     payload: { cartItems } 
    });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
