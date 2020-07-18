import { Reducer } from "redux";
import { BooksActionTypes, BooksState } from "./Types";
export const initialState: BooksState = {
  data: [],
  errors: undefined,
  loading: false
};
const reducer: Reducer<BooksState> = (state = initialState, action) => {
  switch (action.type) {
    case BooksActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case BooksActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case BooksActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default reducer;