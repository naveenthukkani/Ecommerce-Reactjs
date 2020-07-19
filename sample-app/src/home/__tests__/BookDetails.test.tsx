import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {BookDetails} from '../BookDetails';
import { BooksList } from '../../__mocks__/BooksList';

describe('BookDetails', () =>{
    let props:any;
    beforeEach(()=>{
        props= {
         listOfBooks: BooksList
        }
    });

    it('renders the component correctly', () => {
        const component = shallow(<BookDetails {...props}  match={{params: {id: 1}}} />);
        expect(toJson(component)).toMatchSnapshot();
      });
});

