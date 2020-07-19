import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {CartItems} from '../index';

describe("CartItems", ()=>{

    it('renders Cart Screen Correctly', () => {
        const component = shallow(<CartItems />);
        expect(toJson(component)).toMatchSnapshot();
    });

});