import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { CartActionTypes } from "./Types";
import actions from './Actions'
import {selectors} from "..";

function* handleFetch(data:any) {
  try {
      const cartItems = yield select(selectors.cart.getCartItems);
      cartItems.push(data.payload);
      yield put(actions.fetchSuccess(cartItems));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(actions.fetchError(err.stack));
    } else {
      yield put(actions.fetchError("An unknown error occurred."));
    }
  }
}
function* watchFetchRequest() {
  yield takeEvery(CartActionTypes.FETCH_REQUEST, handleFetch);
}
function* CartSaga() {
  yield all([fork(watchFetchRequest)]);
}
export default CartSaga;