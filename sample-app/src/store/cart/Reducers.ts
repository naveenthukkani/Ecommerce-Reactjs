import { Reducer } from "redux";
import { CartActionTypes, CartState } from "./Types";
export const initialState: CartState = {
  cartItems: [],
  errors: undefined,
  loading: false
};
const reducer: Reducer<CartState> = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case CartActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, cartItems: action.payload };
    }
    case CartActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default reducer;