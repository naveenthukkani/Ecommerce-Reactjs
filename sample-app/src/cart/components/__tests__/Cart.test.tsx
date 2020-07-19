import React from 'react';
import { shallow } from 'enzyme';
import {Provider} from 'react-redux'
import toJson from 'enzyme-to-json';
import {Cart} from '../Cart';
import {mockStore} from '../../../config/RMock'
import { store } from '../../../store/store'

describe("Payment info", () =>{

    it('renders the component', () => {
        const component = shallow(
            <Provider store={mockStore(store)}>
                <Cart />
            </Provider>);
        expect(toJson(component)).toMatchSnapshot();
    });

});