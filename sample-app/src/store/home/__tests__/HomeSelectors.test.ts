import { BooksList} from '../../../__mocks__/BooksList'
import  selectors from '../HomeSelectors';

describe('HomeSelectors', () =>{

    it('should select Books list', () =>{
        const state ={
            home:{
                data: BooksList
            }
        }
    expect(selectors.getBooksList(state)).toEqual(BooksList);
    });
});