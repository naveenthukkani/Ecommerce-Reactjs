import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { OrdersActionTypes } from "./types";
import actions from './actions'
import {selectors} from "../";

function* handleFetch(data:any) {
  try {
      const orders = yield select(selectors.myorders.getOrdersList);
      orders.push(data.payload);
      console.log(orders);
      yield put(actions.fetchSuccess(orders));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(actions.fetchError(err.stack));
    } else {
      yield put(actions.fetchError("An unknown error occurred."));
    }
  }
}
function* watchFetchRequest() {
  yield takeEvery(OrdersActionTypes.FETCH_REQUEST, handleFetch);
}
function* MyOrdersSaga() {
  yield all([fork(watchFetchRequest)]);
}
export default MyOrdersSaga;