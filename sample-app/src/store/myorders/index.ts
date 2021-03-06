import reducers from './Reducers';
import actions  from './Actions';
import {OrdersActionTypes} from './Types';
import saga from './Saga'
import selectors from './Selectors';

export default {
    reducers,
    actions:{
        ...actions,
        OrdersActionTypes,
    },
    saga,
    selectors
}