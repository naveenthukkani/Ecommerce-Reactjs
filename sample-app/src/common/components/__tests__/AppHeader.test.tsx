import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {AppHeader} from '../AppHeader';

describe("Header", () =>{

  it('renders header component correctly', () => {
    const component = shallow(<AppHeader />);
    expect(toJson(component)).toMatchSnapshot();
  });

});