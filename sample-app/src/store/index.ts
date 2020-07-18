import {combineReducers} from 'redux';
import home from './home';

const reducers = combineReducers(
    {
        home:home.reducers
    }
);

const actions= {
    home: home.actions
}

const saga = {
    home: home.saga
}

const selectors = {
    home: home.selectors
}


export { reducers, saga, actions, selectors};