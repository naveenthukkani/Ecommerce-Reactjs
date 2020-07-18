import reducers from './Reducers';
import actions  from './Actions';
import {CartActionTypes} from './Types';
import saga from './Saga'
import selectors from './Selectors';

export default {
    reducers,
    actions:{
        ...actions,
        CartActionTypes,
    },
    saga,
    selectors
}