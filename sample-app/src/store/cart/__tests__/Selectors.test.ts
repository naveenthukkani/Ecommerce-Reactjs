import Selectors from '../Selectors';
import { BooksList} from '../../../__mocks__/BooksList'
import  selectors from '../Selectors';

describe('CartSelectors', () =>{

    it('should select cart items', () =>{
        const state ={
            cart:{
                cartItems: BooksList
            }
        }
    expect(selectors.getCartItems(state)).toEqual(BooksList);
    });
});