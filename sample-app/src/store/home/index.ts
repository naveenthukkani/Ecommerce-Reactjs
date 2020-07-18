import reducers from './HomeReducer';
import actions  from './HomeActions';
import {BooksActionTypes} from './Types';
import saga from './HomeSaga'
import selectors from './HomeSelectors';

export default {
    reducers,
    actions:{
        ...actions,
        BooksActionTypes,
    },
    saga,
    selectors
}