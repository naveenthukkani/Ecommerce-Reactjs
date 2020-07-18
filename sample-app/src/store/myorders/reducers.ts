import { Reducer } from "redux";
import { OrdersActionTypes, OrdersState } from "./types";
export const initialState: OrdersState = {
  myorders: [],
  errors: undefined,
  loading: false
};
const reducer: Reducer<OrdersState> = (state = initialState, action) => {
  switch (action.type) {
    case OrdersActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case OrdersActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, myorders: action.payload };
    }
    case OrdersActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default reducer;