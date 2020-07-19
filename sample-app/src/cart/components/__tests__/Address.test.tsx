import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {Address} from '../Address';


describe("Address", () =>{

    it('renders address component correctly', () => {
        const component = shallow(<Address />);
        expect(toJson(component)).toMatchSnapshot();
    });

});