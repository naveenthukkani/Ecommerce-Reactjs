import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {Home} from '../index';
import { BooksList } from '../../__mocks__/BooksList';

describe('Home', () =>{
    let props:any;
    beforeEach(()=>{
        props = {
         listOfBooks: BooksList,
         actions: {
            fetchBooksList: jest.fn()
         }
        }
    });

    it('renders the component correctly', () => {
        const component = shallow(<Home {...props} />);
        expect(toJson(component)).toMatchSnapshot();
      });
});




