import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { BooksActionTypes } from "./types";
import actions  from "./HomeActions";
import {booksApi} from "../../config/Api"

function* handleFetch() {
  try {
      const response= yield call(booksApi.getListOfBooks('/v1/bookslist'))
      console.log("response"+ response.data)
    yield put(actions.fetchSuccess(response.data));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(actions.fetchError(err.stack));
    } else {
      yield put(actions.fetchError("An unknown error occurred."));
    }
  }
}
function* watchFetchRequest() {
  yield takeEvery(BooksActionTypes.FETCH_REQUEST, handleFetch);
}
function* HomeSaga() {
  yield all([fork(watchFetchRequest)]);
}
export default HomeSaga;