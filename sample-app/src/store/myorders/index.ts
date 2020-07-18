import reducers from './reducers';
import actions  from './actions';
import {BooksActionTypes} from './types';
import saga from './saga'
import selectors from './selectors';

export default {
    reducers,
    actions:{
        ...actions,
        BooksActionTypes,
    },
    saga,
    selectors
}