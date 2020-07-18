import reducers from './reducers';
import actions  from './actions';
import {OrdersActionTypes} from './types';
import saga from './saga'
import selectors from './selectors';

export default {
    reducers,
    actions:{
        ...actions,
        OrdersActionTypes,
    },
    saga,
    selectors
}