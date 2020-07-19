import deepFreeze from 'deep-freeze';
import reducer from '../Reducers';
import actions from '../Actions';
import { initialState } from '../Reducers';
import { OrdersList} from '../../../__mocks__/MyOrders'

describe("MyOrdersReducer", ()=> {
    deepFreeze(initialState);

    it('should handle fetching the MyOrders', () =>{
        const reducerCall = reducer(initialState, actions.fetchRequest(OrdersList[0]));
        const expectedState= {
            ...initialState,
            errors: undefined,
            loading: true
        }

        expect(reducerCall).toEqual(expectedState);

    });

    it('should handle fetching success of My Orders', () =>{
        const reducerCall = reducer(initialState, actions.fetchSuccess(OrdersList));
        const expectedState= {
            ...initialState,
            errors: undefined,
            loading: false,
            myorders: OrdersList
        }

        expect(reducerCall).toEqual(expectedState);
    });
});