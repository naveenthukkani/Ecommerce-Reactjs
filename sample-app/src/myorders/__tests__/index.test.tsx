import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MyOrders} from '../index';
import { OrdersList } from '../../__mocks__/MyOrders';

describe('MyOrders', () =>{
    let props:any;
    beforeEach(()=>{
        props = {
         ordersList: OrdersList,
        }
    });

    it('renders the component correctly', () => {
        const component = shallow(<MyOrders {...props} />);
        expect(toJson(component)).toMatchSnapshot();
      });
});