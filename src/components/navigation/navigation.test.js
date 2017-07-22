import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './index';

describe('<Navigation />', () => {
    it('Render without crashing', () => {
        shallow(<Navigation match={{params: 1}} location={{pathname: '/detail'}}/>);
    });

    it("Both li have class 'not-active' when pathname = '/detail' ", () => {
        const wrapper = shallow(<Navigation match={{params: 1}} location={{pathname: '/detail'}}/>);
        expect(wrapper.find('li.not-active').length).toBe(2);
    });

    it("One li have class 'not-active' when pathname != '/detail' ", () => {
        const wrapper = shallow(<Navigation match={{params: 1}} location={{pathname: 'hi'}}/>);
        expect(wrapper.find('li.not-active').length).toBe(1);
    });

});
