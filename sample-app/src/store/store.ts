import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducers, saga } from './index';
import { all, fork , call } from 'redux-saga/effects';

function* wrapForErrorHandling (fn: any){
    try {
        yield call(fn, { restarted: false});
    }catch(e){
            throw e;
    }
}

function * rootSaga() {
    yield all(Object.values(saga).map(saga => fork(wrapForErrorHandling, saga)))
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  );
sagaMiddleware.run(rootSaga);

export {store};
