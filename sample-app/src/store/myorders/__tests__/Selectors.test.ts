import { OrdersList} from '../../../__mocks__/MyOrders'
import  selectors from '../Selectors';

describe('MyOrderSelectors', () =>{

    it('should select Books list', () =>{
        const state ={
            myorders:{
                myorders: OrdersList
            }
        }
    expect(selectors.getOrdersList(state)).toEqual(OrdersList);
    });
});