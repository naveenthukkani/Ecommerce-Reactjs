import {combineReducers} from 'redux';
import home from './home';
import myorders from './myorders';

const reducers = combineReducers({
        home:home.reducers,
        myorders: myorders.reducers
});

const actions= {
    home: home.actions,
    myorders: myorders.actions
}

const saga = {
    home: home.saga,
    myorders: myorders.saga
}

const selectors = {
    home: home.selectors,
    myorders: myorders.selectors
}


export { reducers, saga, actions, selectors};