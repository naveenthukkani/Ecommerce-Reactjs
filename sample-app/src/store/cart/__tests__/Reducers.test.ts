import deepFreeze from 'deep-freeze';
import reducer from '../Reducers';
import actions from '../Actions';
import { initialState } from '../Reducers';
import { BooksList} from '../../../__mocks__/BooksList'

describe("CartReducer", ()=> {
    deepFreeze(initialState);

    it("should handle fetching the cart items", () =>{
        const reducerCall = reducer(initialState, actions.fetchRequest(BooksList[0]));
        const expectedState= {
            ...initialState,
            errors: undefined,
            loading: true
        }

        expect(reducerCall).toEqual(expectedState);

    });

    it('should handle fetching success of cartItems', () =>{
        const reducerCall = reducer(initialState, actions.fetchSuccess(BooksList));
        const expectedState= {
            ...initialState,
            errors: undefined,
            loading: false,
            cartItems: BooksList
        }

        expect(reducerCall).toEqual(expectedState);
    });
});





