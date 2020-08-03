import { all, call, fork, put, takeEvery, select, takeLatest } from "redux-saga/effects";
import { OrdersActionTypes } from "./Types";
import actions from './Actions'
import {selectors} from "..";

function* handleFetch(data:any) {
  try {
      const orders = yield select(selectors.myorders.getOrdersList);
      orders.push(data.payload);
      yield put(actions.fetchSuccess(orders));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(actions.fetchError(err.stack));
    } else {
      yield put(actions.fetchError("An unknown error occurred."));
    }
  }
}
function * deleteOrder(data: any) {
  try {
    const orders:any = yield select(selectors.myorders.getOrdersList);
    orders.forEach((order:any, index:number)=>{
      if(order.id === data.payload.id){
            orders.splice(index,1);
          }
    })
    yield put(actions.fetchSuccess(orders));
  }catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(actions.fetchError(err.stack));
    } else {
      yield put(actions.fetchError("An unknown error occurred."));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(OrdersActionTypes.FETCH_REQUEST, handleFetch);
  yield takeEvery(OrdersActionTypes.DELETE_ORDER, deleteOrder)
}
function* MyOrdersSaga() {
  yield all([fork(watchFetchRequest)]);
}
export default MyOrdersSaga;