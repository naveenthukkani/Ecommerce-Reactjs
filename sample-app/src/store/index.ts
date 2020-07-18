import {combineReducers} from 'redux';
import home from './home';
import myorders from './myorders';
import cart from './cart'

const reducers = combineReducers({
        home:home.reducers,
        myorders: myorders.reducers,
        cart: cart.reducers

});

const actions= {
    home: home.actions,
    myorders: myorders.actions,
    cart: cart.actions

}

const saga = {
    home: home.saga,
    myorders: myorders.saga,
    cart: cart.saga

}

const selectors = {
    home: home.selectors,
    myorders: myorders.selectors,
    cart: cart.selectors

}


export { reducers, saga, actions, selectors};