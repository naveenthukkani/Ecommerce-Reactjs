import deepFreeze from 'deep-freeze';
import reducer from '../HomeReducer';
import actions from '../HomeActions';
import { initialState } from '../HomeReducer';
import { BooksList} from '../../../__mocks__/BooksList'

describe("HomeReducers", ()=> {
    deepFreeze(initialState);

    it('should handle fetching the books', () =>{
        const reducerCall = reducer(initialState, actions.fetchRequest());
        const expectedState= {
            ...initialState,
            errors: undefined,
            loading: true
        }

        expect(reducerCall).toEqual(expectedState);
    });

    it('should handle fetching success of books', () =>{
        const reducerCall = reducer(initialState, actions.fetchSuccess(BooksList));
        const expectedState= {
            ...initialState,
            errors: undefined,
            loading: false,
            data: BooksList
        }

        expect(reducerCall).toEqual(expectedState);
    });
});