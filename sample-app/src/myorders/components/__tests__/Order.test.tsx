import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MyOrder} from '../Order';
import { OrdersList } from '../../../__mocks__/MyOrders';

describe('MyOrderComponent', () =>{
    let props:any;
    beforeEach(()=>{
        props = OrdersList[0]
    });

    it('renders the component correctly', () => {
        const component = shallow(<MyOrder {...props} />);
        expect(toJson(component)).toMatchSnapshot();
      });
});